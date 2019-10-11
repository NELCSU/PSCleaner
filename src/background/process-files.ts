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

  constructor() {
    this.init();
    this.nlp = new NLP();
    ipc.on("get-processing-folder", e => e.reply("processing-folder", this.fm.folder));
    ipc.on("processing-file-count", e => e.reply("processing-file-count", this.fm.fileCount));

    ipc.on("start-processing", e => {
      this.moveOne()
        .then(
          success => e.reply("processed"),
          fail => e.reply("stop-processing")
        );
    });
  }

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

  public async moveOne(): Promise<boolean> {
    return await this.fm.listFiles()
      .then(async files => {
        if (files.length > 0) {
          const from: string = join(this.fm.folder, files[0]);
          const to: string = join(this.sendTo, files[0]);
          return await this.fm.fs.rename(from, to)
            .then(() => Promise.resolve(true));
        } else {
          return Promise.reject();
        }
      })
  }

  public async process(file: string): Promise<void> {
    const from: string = join(this.fm.folder, file);
    const temp: string = join(this.fm.folder, "temp.tmp");
    const to: string = join(this.sendTo, file);
    const stream = csv.format({ headers: true });
    const writeStream = this.fm.fs.createWriteStream(temp);
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
          .then(async () => {
            stream.write(row);
            if (--rq === 0) {
              stream.end();
              this.fm.fs.rename(temp, to);
            }
          });
      })
      .on("end", (rowCount: number) => {
        total = rowCount;
      });
  }

  public async start(): Promise<void> {
    await this.fm.listFiles()
      .then(async files => {
        if (files.length > 0) {
          await this.process(files[0])
        }
      });    
  }
}