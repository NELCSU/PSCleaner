import { app, ipcMain as ipc } from "electron";
import * as EventEmitter from "events";
import * as csv from "fast-csv";
import { FileManager } from "./file-manager";
import { join, parse } from "path";
import { TemplateFiles } from "./template-files";
import * as jschardet from "jschardet";
import * as readline from "readline";

const r = require("esm")(module);
const t = r("@buckneri/string");
const normalize = t.normalize;

/**
 * ### Manages files stored in watched folder. Runs NLP services on files.
 */
export class ProcessFiles {
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
    const temp: string = join(this.fm.folder, "temp.tmp");
    let to: string = join(this.sendTo, file);
    this.fm.fs.pathExists(to)
      .then((exists: boolean) => {
        if (exists) {
          const fpath: any = parse(file);
          to = join(this.sendTo, fpath.name + "_" + Date.now() + fpath.ext);
        }
      });

    const size: number = this.fm.fs.statSync(from).size;
    if (size < 3) {
      throw new Error("File cannot be empty");
    }

    let rowCount: number = 0;

    const rs = this.fm.fs.createReadStream(from, { start: 0, end: size > 499 ? 499 : size });
    rs.on("data", async (chunk: any) => {          
      const isUTF8: boolean = chunk[0] === 239 && chunk[1] === 187 && chunk[2] === 191;
      rs.close();
      const text: any = jschardet.detect(chunk.toString());

      const fs = this.fm.fs.createReadStream(from);
      const rl = readline.createInterface({
        input: fs,
        crlfDelay: Infinity
      });

      let avgSize = 0, i = 0;
      for await (const line of rl) {
        avgSize += Buffer.byteLength(line, text.encoding);
        ++i;
        this.events.emit("row-count-estimation", Math.ceil(size / (avgSize / i)));
        if (i > 50) {
          break;
        }
      }

      const stream = csv.format({
        headers: templates.header,
        writeBOM: isUTF8 ? true : false
      });
      const writeStream = this.fm.fs.createWriteStream(temp);
      stream.pipe(writeStream);
      const rows: Promise<any>[] = [];
  
      csv.parseFile(from, {
        encoding: isUTF8 ? "utf-8" : text.encoding,
        headers: templates.header,
        ignoreEmpty: true,
        strictColumnHandling: true
      })
        .on("data", async (row: any) => {
          const r = this._processRow(row, stream, templates.fields);
          r.then(() => {
            this.events.emit("row-processed", ++rowCount);
          });
          rows.push(r);
        })
        .on("data-invalid", (row, rowNumber) => {
          console.log(`Invalid [rowNumber=${rowNumber}] [row=${JSON.stringify(row)}]`);
        })
        .on("end", () => {
          Promise.all(rows)
            .then(_ => {
              stream.end();
              stream.unpipe();
              Promise.all([
                this.fm.fs.move(temp, to),
                this.fm.delete(from)
              ]).then(_ => this.events.emit("file-processed"))
                .catch(_ => this.events.emit("file-processing-error"));
            });
        });
    });
  }

  private async _processRow(row: any, stream: any, fields: Map<string, boolean>): Promise<any> {
    const cellQ: any[] = [];
    for (let cell in row) {
      let canProcess: boolean = fields.get(cell) || false;
      if (canProcess) {
        cellQ.push(await this._processCell(cell, row));
      }
    }
    return Promise.all(cellQ)
      .then(_ => {
        stream.write(row);
        return Promise.resolve(row);
      });
  }

  private async _processCell(cell: any, row: any[]): Promise<any> {
    let normalised: string = normalize(row[cell]);
    return await this.nlp.evaluate(normalised)
      .then(async (matches: any) => {
        await this.nlp.replace(normalised, matches)
          .then((r: any) => new Promise(resolve => resolve(row[cell] = r)));
      });
  }
}