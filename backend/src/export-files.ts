import { app, ipcMain as ipc } from "electron";
import { FileManager } from "./file-manager";
import { join } from "path";

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

  private _store: any;

  constructor(store: any) {
    let folder = store.get("EXPORT_FOLDER");
    if (!folder) {
      folder = join(app.getPath("home"), "Documents", app.getName(), "export");
      store.set("EXPORT_FOLDER", folder);
    }
    this._store = store;
    this.fm = new FileManager(folder);
    this.fm.filter = "csv";

    ipc.on("get-export-folder", e => e.reply("export-folder", this.fm.folder));

    ipc.on("set-export-folder", (e, path) => {
      try {
        this._store.set("EXPORT_FOLDER", path);
        this.fm.folder = path;
        e.reply("export-folder", this.fm.folder);
      } catch {
        e.reply("export-folder-error", this.fm.folder);
      }
    });

    ipc.on("export-file-count", e => {
      this.fm.fileCount
        .then(n => e.reply("export-file-count", n));
    });
  }
}