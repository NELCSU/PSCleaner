import { app, ipcMain as ipc } from "electron";
import csv from "fast-csv";
import { join } from "path";
import DB from "sqlite3-helper";
import { FileManager } from "./filemanager";
import { NLP } from "./nlp.js";

export class ProcessFiles {
  public fm!: FileManager;
  public nlp: NLP;
  public ready: boolean = false;
  public sendTo: string = "";

  /**
   * @constructor
   * @param parent - reference to main process
   */
  constructor(parent: any) {
    this.init(parent);
    this.nlp = new NLP();

    ipc.on("get-processing-folder", e => e.reply("processing-folder", this.fm.folder));
    ipc.on("get-processing-file-count", e => e.reply("processing-file-count", this.fm.fileCount));
  }

  public async init(parent: any): Promise<void> {
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

        this.fm.events.on("file-count-change", n => {
          parent.mainWindow.webContents.send("processing-file-count", n);
          if (n > 0) {
            this.run();
          }
        });

        this.ready = true;
      });
  }

  public async process(file: string): Promise<void> {
    const from: string = join(this.fm.folder, file);
    const to: string = join(this.sendTo, file);
    const stream = csv.format({ headers: true });
    const writeStream = this.fm.fs.createWriteStream(to);
    stream.pipe(writeStream);
    let rq: number = -1;
    let total: number = -1;

    csv.parseFile(from, { headers: true })
      .on("error", error => {
        console.error(error);
      })
      .on("data", async row => {
        const queue: any[] = [];
        rq = rq + (rq === -1 ? 2 : 1);
        
        for (let r in row) {
          if (/.*freetext.*/i.test(r)) {
            queue.push(
              await this.nlp.evaluate(row[r])
                .then(async matches => {
                  row[r] = await this.nlp.replace(row[r], matches);
                })
            );
          }
        }
        Promise.all(queue)
          .then(() => {
            stream.write(row);
            if (--rq === 0) {
              stream.end();
              this.fm.deleteFile(from);
            }
          });
      })
      .on("end", (rowCount: number) => {
        total = rowCount;
      });
  }

  public async run(): Promise<void> {
    await this.fm.listFiles()
      .then(files => {
        files.map(async (file: any) => await this.process(file));
      });    
  }
}