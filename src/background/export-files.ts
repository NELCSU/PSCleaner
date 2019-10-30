import { app, ipcMain as ipc } from "electron";
import { FileManager } from "./file-manager";
import { join } from "path";
import DB from "sqlite3-helper";

/**
 * ### Manages files stored in watched folder.
 * #### API  (ipc request -> response)
 * 1. export-file-count -> export-file-count
 * 2. get-export-folder -> export-folder
 * 3. set-export-folder -> export-folder
 * 4. set-export-folder -> export-folder-error
 */
export class ExportFiles {
  public fm!: FileManager;
  public ready: boolean = false;

  constructor() {
    this.init();

    ipc.on("get-export-folder", e => e.reply("export-folder", this.fm.folder));

    ipc.on("set-export-folder", (e, path) => {
      DB().update("AppSettings", { field: "EXPORT_FOLDER", value: path }, { field: "EXPORT_FOLDER" })
        .then(
          _ => {
            this.fm.folder = path;
            e.reply("export-folder", this.fm.folder)
          },
          _ => e.reply("export-folder-error", this.fm.folder)
        );
    });

    ipc.on("export-file-count", e => {
      this.fm.fileCount
        .then(n => e.reply("export-file-count", n));
    });
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