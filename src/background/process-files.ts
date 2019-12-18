import { app, ipcMain as ipc } from "electron";
import EventEmitter from "events";
import * as csv from "fast-csv";
import { FileManager } from "./file-manager";
import { NLP } from "./nlp.js";
import { join, parse } from "path";
import DB from "sqlite3-helper";
import { cleanText } from "./util/text";
import { TemplateFiles } from "./template-files";
import jschardet from "jschardet";

/**
 * ### Manages files stored in watched folder. Runs NLP services on files.
 * #### API  (ipc request   -> response)
 * 1. start-processing      -> processed
 * 2. start-processing      -> stop-processing
 * 3. start-processing      -> processing-folder-error
 * 4. processing-file-count -> processing-file-count
 * 5. get-processing-folder -> processing-folder
 * 6. set-processing-folder -> processing-folder
 * 7. set-processing-folder -> processing-folder-error
 */
export class ProcessFiles {
  public events = new EventEmitter();
  public fm!: FileManager;  
  public nlp: NLP;
  public ready: boolean = false;
  public sendTo: string = "";
  
  constructor() {
    this.init();

    this.nlp = new NLP();

    ipc.on("get-processing-folder", e => e.reply("processing-folder", this.fm.folder));

    ipc.on("set-processing-folder", (e, path) => {
      DB().update("AppSettings", { field: "PROCESSING_FOLDER", value: path }, { field: "PROCESSING_FOLDER" })
        .then(
          _ => {
            this.fm.folder = path;
            e.reply("processing-folder", this.fm.folder)
          },
          _ => e.reply("processing-folder-error", `${this.fm.folder} cannot be opened`)
        );
    });

    ipc.on("processing-file-count", e => {
      this.fm.fileCount
        .then(n => e.reply("processing-file-count", n));
    });
  }

  /**
   * Class initialiser and creates the folder path setting if missing
   */
  public async init(): Promise<void> {
    await DB().queryFirstRow(`SELECT value FROM AppSettings WHERE field='PROCESSING_FOLDER'`)
      .then(async row => {
        if (row) {
          return row.value;
        } else {
          const loc: string = join(app.getPath("home"), "Documents", app.getName(), "processing");
          await DB().insert("AppSettings", { field: "PROCESSING_FOLDER", value: loc })
          return loc;
        }
      })
      .then((location: string) => {
        this.fm = new FileManager(location);
        this.fm.filter = "csv";
        this.ready = true;
      });
  }

  /**
   * Processes file. Applies NLP service on free text
   * @param {string} file
   * @param {ImportTemplate} - template to validate CSV file
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

    const rs = this.fm.fs.createReadStream(from, { start: 0, end: size > 499 ? 499 : size });
    rs.on("data", (chunk: any) => {          
      const isUTF8: boolean = chunk[0] === 239 && chunk[1] === 187 && chunk[2] === 191 
      rs.close();
      const text: any = jschardet.detect(chunk.toString());

      const stream = csv.format({
        headers: templates.header,
        writeBOM: isUTF8 ? true : false
      });
      const writeStream = this.fm.fs.createWriteStream(temp);
      stream.pipe(writeStream);
      const rows: Promise<any>[] = [];
  
      csv.parseFile(from, {
        encoding: isUTF8 ? "utf-8" : text.encoding,
        headers: templates.header
      })
        .on("data", async (row: any) => {
          await rows.push(this._processRow(row, stream, templates.fields));
        })
        .on("end", () => {
          Promise.all(rows)
            .then(_ => {
              stream.end();
              Promise.all([
                this.fm.fs.move(temp, to),
                this.fm.delete(from)
              ]).then(_ => this.events.emit("file-processed"))
                .catch(_ => this.events.emit("file-processing-error"));
            });
        });
    });
  }

  private _processRow(row: any, stream: any, fields: Map<string, boolean>): Promise<any> {
    const cellQ: any[] = [];
    for (let cell in row) {
      cellQ.push(this._processCell(cell, row, fields));
    }
    return Promise.all(cellQ)
      .then(_ => {
        stream.write(row);
        return Promise.resolve(row);
      });
  }

  private async _processCell(cell: any, row: any[], fields: Map<string, boolean>): Promise<any> {
    let canProcess: boolean = fields.get(cell) || false;
    if (canProcess) {
      let normalised: string = cleanText(row[cell]);
      return await this.nlp.evaluate(normalised)
        .then(async matches => {
          await this.nlp.replace(normalised, matches)
            .then(r => new Promise(resolve => resolve(row[cell] = r)));
        })
    } else {
      return Promise.resolve(cell);
    }
  }
}