import { app, ipcMain as ipc } from "electron";
import { FileManager } from "./filemanager";
import DB from "sqlite3-helper";
import { join } from "path";

export class ExportFiles {
  public fm!: FileManager;
  public ready: boolean = false;

  /**
   * @constructor
   * @param parent - reference to main process
   */
  constructor(parent: any) {
    this.init(parent);

    ipc.on("get-export-folder", async e => {
      e.reply("export-folder", this.fm.folder);
    });

    ipc.on("get-export-file-count", async e => {
      e.reply("export-file-count", this.fm.fileCount);
    });
  }

  public async init(parent: any): Promise<void> {    
    await DB().queryFirstRow(`SELECT value FROM AppSettings WHERE field='EXPORT_FOLDER'`)
      .then(async row => {
        if (row) {
          return row.value;
        } else {
          const loc: string = join(app.getPath("home"), "Documents", app.getName(), "export");
          await DB().insert("AppSettings", { field: "EXPORT_FOLDER", value: loc })
          return loc;
        }
      })
      .then((location: string) => {
        this.fm = new FileManager(location);

        this.fm.events.on("file-count-change", n => {
          parent.mainWindow.webContents.send("export-file-count" , n);
        });

        this.ready = true;
      });
  }
}