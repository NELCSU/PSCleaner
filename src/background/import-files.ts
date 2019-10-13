import { app, ipcMain as ipc } from "electron";
import { FileManager } from "./filemanager";
import DB from "sqlite3-helper";
import { join } from "path";

export class ImportFiles {
  public sendTo: string = "";
  public fm!: FileManager;
  public ready: boolean = false;

  constructor() {
    this.init();
    ipc.on("get-import-folder", e => e.reply("import-folder", this.fm.folder));
    ipc.on("import-file-count", e => e.reply("import-file-count", this.fm.fileCount));

    ipc.on("start-import", async e => {
      await this.moveOne()
        .then(
          success => e.reply("imported"),
          fail => e.reply("stop-import")
        );
    });
  }

  public async init(): Promise<void> {
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
}