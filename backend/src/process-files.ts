import { app, ipcMain as ipc } from "electron";
import * as EventEmitter from "events";
import * as csv from "fast-csv";
import { FileManager } from "./file-manager";
import { join, parse } from "path";
import { TemplateFiles } from "./template-files";
import type { CSVField } from "../types/PSCleaner";
import type { ReadStream, WriteStream } from "fs";
import { csvFileProperties, TCSVFileProperties } from "./util/csv";
import * as logger from "electron-log";

const r = require("esm")(module);
const t = r("@buckneri/string");
const normalize = t.normalize;

/**
 * ### Manages files stored in watched folder. Runs NLP services on files.
 */
export class ProcessFiles {
  #logger: logger.ElectronLog;

  private _store: any;

  public events = new EventEmitter();
  public fm!: FileManager;  
  public nlp: any;
  public sendTo: string = "";
  
  constructor(store: any, nlp: any) {
    let folder = store.get("PROCESSING_FOLDER");
    if (!folder) {
      folder = join(app.getPath("home"), "Documents", app.getName(), "processing");
      store.set("PROCESSING_FOLDER", folder);
    }
    this._store = store;
    this.fm = new FileManager(folder);
    this.fm.filter = "csv";

    this.#logger = logger;
    this.#logger.transports.file.level = "debug";

    this.nlp = nlp;

    ipc.on("get-processing-folder", e => e.reply("processing-folder", this.fm.folder));

    ipc.on("set-processing-folder", (e, path) => {
      try {
        this._store.set("PROCESSING_FOLDER", path);
        this.fm.folder = path;
        e.reply("processing-folder", this.fm.folder);
      } catch {
        e.reply("processing-folder-error", this.fm.folder);
      }
    });

    ipc.on("processing-file-count", e => {
      this.fm.fileCount
        .then(n => e.reply("processing-file-count", n));
    });
  }

  /**
   * Processes file. Applies NLP service on free text
   * @param file - file path
   * @param templates - template to validate CSV file
   */
  public async processFile(file: string, templates: TemplateFiles): Promise<void> {
    const from: string = join(this.fm.folder, file);
    const temp: string = join(this.sendTo, "temp.tmp");
    let to: string = join(this.sendTo, file);
    let rowCount: number = 0;
    
    this.fm.fs.pathExists(to)
      .then((exists: boolean) => {
        if (exists) {
          const fpath: any = parse(file);
          to = join(this.sendTo, fpath.name + "_" + Date.now() + fpath.ext);
        }
      });

    csvFileProperties(from)
      .then((p: TCSVFileProperties) => {
        this.events.emit("row-count-estimation", p.estimatedSize);
        const writeCSV = csv.format({
          headers: templates.header,
          writeBOM: p.isUTF8
        }) as csv.CsvFormatterStream<any, any>;

        const writeStream = this.fm.fs.createWriteStream(temp, { highWaterMark: 64 * 1024 }) as WriteStream;
        writeStream.on("finish", () => {
          try {
            this.fm.delete(from)
              .then(() => {
                this.fm.fs.rename(temp, to)
                  .then(() => {
                    this.events.emit("file-processed");
                  });
              });
          } catch {
            this.events.emit("file-processing-error");
          }
        });

        writeCSV.pipe(writeStream);
        const rows: Promise<any>[] = [];
  
        const readCSV = this.fm.fs.createReadStream(from, { highWaterMark: 512 }) as ReadStream;
  
        csv.parseStream(readCSV, {
          encoding: p.encoding,
          headers: templates.header,
          ignoreEmpty: true,
          strictColumnHandling: true
        })
          .on("data", async (row: any) => {
            rows.push(
              this._processRow(row, writeCSV, templates)
                .then(() => {
                  this.events.emit("row-processed", ++rowCount);
                })
            );
          })
          .on("data-invalid", (row, rowNumber) => {
            this.#logger.log(`Invalid [rowNumber=${rowNumber}] [row=${JSON.stringify(row)}]`);
          })
          .on("end", () => {
            Promise.all(rows)
              .then(_ => {
                writeCSV.end();
              });
          });
      });
  }

  private async _processRow(row: any, stream: any, template: TemplateFiles): Promise<any> {
    const fields: Map<string, CSVField> = template.fields;
    const cellQ: any[] = [];
    let n = 0;
    for (let cell in row) {
      const field: CSVField | undefined = template.header ? fields.get(cell) : fields.get(`${n++}`); 
      let canProcess: boolean = field && field.enabled || false;
      if (canProcess) {
        cellQ.push(await this._processCell(cell, row));
      }
    }
    return Promise.all(cellQ)
      .then(_ => {
        stream.write(row);
        return Promise.resolve(row);
      })
      .catch((err: any) => this.#logger.log(err));
  }

  private async _processCell(cell: any, row: any[]): Promise<any> {
    let normalised: string = normalize(row[cell]);
    return await this.nlp.evaluate(normalised)
      .then(async (matches: any) => {
        await this.nlp.replace(normalised, matches)
          .then((r: any) => {
            return new Promise(resolve => resolve(row[cell] = r));
          })
          .catch((err: any) => this.#logger.log(err));
      })
      .catch((err: any) => this.#logger.log(err));
  }
}