import { app, ipcMain as ipc } from "electron";
import EventEmitter from "events";
import csv from "fast-csv";
import { FileManager } from "./filemanager";
import { NLP } from "./nlp.js";
import { join } from "path";
import DB from "sqlite3-helper";

/**
 * Manages files stored in watched folder. Runs NLP services on files.
 * ----------------------------------
 * API  (ipc request     -> response)
 * ----------------------------------
 * get-processing-folder -> processing-folder - returns processing folder path
 * processing-file-count -> processing-file-count - returns file count
 * start-processing      -> processed - moves one file to sendTo folder
 * start-processing      -> stop-processing - no further files found
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
    ipc.on("processing-file-count", e => e.reply("processing-file-count", this.fm.fileCount));

    ipc.on("start-processing", e => {
      this.fm.listFiles()
        .then(files => {
          if (files.length > 0) {
            this.processFile(files[0]);
            this._events.on("file-processed", () => e.reply("processed"));
          } else {
            this._events.on("file-processing-error", () => e.reply("stop-processing"));
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
    const to: string = join(this.sendTo, file);
    const stream = csv.format({ headers: true });
    const writeStream = this.fm.fs.createWriteStream(temp);
    stream.pipe(writeStream);
    const rows: Promise<any>[] = [];

    csv.parseFile(from, { headers: true })
      .on("data", async (row: any) => await rows.push(this._processRow(row, stream)))
      .on("end", () => {
        Promise.all(rows)
          .then(() => {
            stream.end();
            Promise.all([this.fm.fs.rename(temp, to), this.fm.deleteFile(from)])
              .then(() => {
                this._events.emit("file-processed");
              })
              .catch(() => {
                this._events.emit("file-processing-error");
              });
          });
      });
  }

  private _processRow(row: any, stream: any): Promise<any> {
    const cellQ: any[] = [];
    
    for (let cell in row) {
      cellQ.push(this._processCell(cell, row));
    }

    return Promise.all(cellQ)
      .then(() => {
        stream.write(row);
        return Promise.resolve(row);
      });
  }

  private async _processCell(cell: any, row: any[]): Promise<any> {
    return /.*freetext.*/i.test(cell)
      ? await this.nlp.evaluate(row[cell])
          .then(async matches => {
            await this.nlp.replace(row[cell], matches)
              .then(r => {
                return new Promise(resolve => resolve(row[cell] = r));
              });
          })
      : Promise.resolve(cell);
  }
}