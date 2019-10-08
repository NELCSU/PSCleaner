import { app, ipcMain as ipc } from "electron";
import { FileManager } from "./filemanager";
import DB from "sqlite3-helper";
import { join } from "path";
import csv from "fast-csv";

export class ImportFiles {
  public exportTo: string = "";
  public fm!: FileManager;
  public ready: boolean = false;

  /**
   * @constructor
   * @param parent - reference to main process
   */
  constructor(parent: any) {
    this.init(parent);

    ipc.on("get-import-folder", async e => {
      e.reply("import-folder", this.fm.folder)
    });

    ipc.on("get-import-file-count", async e => {
      e.reply("import-file-count", this.fm.fileCount);
    });

    ipc.on("start-import", async e => {
      await this.processQueue()
        .then((success) => {
          e.reply("end-import");
        });
    });
  }

  public async init(parent: any): Promise<void> {
    await DB().queryFirstRow(`SELECT value FROM AppSettings WHERE field='IMPORT_FOLDER'`)
      .then(async row => {
        if (row) {
          return row.value;
        } else {
          const loc: string = join(app.getPath("home"), "Documents", app.getName(), "import");
          await DB().insert("AppSettings", { field: "IMPORT_FOLDER", value: loc })
          return loc;
        }
      })
      .then((location: string) => {
        this.fm = new FileManager(location);

        this.fm.events.on("file-count-change", n => {
          parent.mainWindow.webContents.send("import-file-count" , n);
        });

        this.ready = true;
      });
  }

  public async processQueue(): Promise<boolean> {
    const queue: Promise<any>[] = [];
    const files: String[] = await this.fm.listFiles();
      
    files.forEach((file: any) => {
      const from: string = join(this.fm.folder, file);
      
      csv.parseFile(from, { headers: true })
        .on("error", error => console.error(error))
        .on("data", row => {
          console.log(row);
        })
        .on("end", (rowCount: number) => console.log(`Parsed ${rowCount} rows`));

      const to: string = join(this.exportTo, file);
      queue.push(this.fm.fs.move(from, to));
    });        
      
    return Promise.all(queue)
      .then(() => Promise.resolve(true));
  }
}