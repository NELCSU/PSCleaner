import { app, ipcMain as ipc } from "electron";
import EventEmitter from "events";
import csv from "fast-csv";
import { FileManager } from "./file-manager";
import { NLP } from "./nlp.js";
import { join, parse } from "path";
import DB from "sqlite3-helper";

/**
 * ### Manages files stored in watched folder. Runs NLP services on files.
 * #### API  (ipc request     -> response)
 * 1. start-processing      -> processed
 * 2. start-processing      -> stop-processing
 * 3. processing-file-count -> processing-file-count
 * 4. get-processing-folder -> processing-folder
 * 5. set-processing-folder -> processing-folder
 * 6. set-processing-folder -> processing-folder-error
 */
export class ProcessFiles {
  private _events = new EventEmitter();

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
          _ => e.reply("processing-folder-error", this.fm.folder)
        );
    });

    ipc.on("processing-file-count", e => {
      this.fm.fileCount
        .then(n => e.reply("processing-file-count", n));
    });

    ipc.on("start-processing", e => {
      this.fm.listFiles()
        .then(files => {
          if (files.length > 0) {
            this.processFile(files[0]);
            this._events.on("file-processed", _ => e.reply("processed"));
          } else {
            this._events.on("file-processing-error", _ => e.reply("stop-processing"));
            e.reply("stop-processing");
          }
        });
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
   */
  public processFile(file: string): void {
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

    const stream = csv.format({ headers: true });
    const writeStream = this.fm.fs.createWriteStream(temp);
    stream.pipe(writeStream);
    const rows: Promise<any>[] = [];

    csv.parseFile(from, { headers: true })
      .on("data", async (row: any) => await rows.push(this._processRow(row, stream)))
      .on("end", () => {
        Promise.all(rows)
          .then(_ => {
            stream.end();
            Promise.all([
              this.fm.fs.move(temp, to), 
              this.fm.delete(from)
            ]).then(_ => this._events.emit("file-processed"))
              .catch(_ => this._events.emit("file-processing-error"));
          });
      });
  }

  private _processRow(row: any, stream: any): Promise<any> {
    const cellQ: any[] = [];

    for (let cell in row) {
      cellQ.push(this._processCell(cell, row));
    }

    return Promise.all(cellQ)
      .then(_ => {
        stream.write(row);
        return Promise.resolve(row);
      });
  }

  private async _processCell(cell: any, row: any[]): Promise<any> {
    let normalised: string = row[cell].replace(/(?:\r\n|\r|\n)/g, " ");
    normalised = normalised.replace(/\s+/g, " ");
    return /.*freetext.*/i.test(cell)
      ? await this.nlp.evaluate(normalised)
        .then(async matches => {
          await this.nlp.replace(normalised, matches)
            .then(r => {
              return new Promise(resolve => resolve(row[cell] = r));
            });
        })
      : Promise.resolve(cell);
  }
}