import { app, ipcMain as ipc } from "electron";
import { FileManager } from "./filemanager";
import { join } from "path";
import DB from "sqlite3-helper";

/**
 * Manages files stored in watched folder.
 * ----------------------------------
 * API  (ipc request -> response)
 * ----------------------------------
 * get-export-folder -> export-folder - returns export folder path
 * export-file-count -> export-file-count - returns file count
 */
export class ExportFiles {
  public fm!: FileManager;
  public ready: boolean = false;

  constructor() {
    this.init();
    ipc.on("get-export-folder", async e => e.reply("export-folder", this.fm.folder));
    ipc.on("export-file-count", e => e.reply("export-file-count", this.fm.fileCount));
  }

  /**
   * Class initialiser and creates the folder path setting if missing
   */
  public async init(): Promise<void> {    
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
        this.fm.filter = "csv";
        this.ready = true;
      });
  }
}