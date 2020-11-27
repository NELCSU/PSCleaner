import { app, ipcMain as ipc } from "electron";
import { FileManager } from "./file-manager";
import { join } from "path";
import { ImportResponse } from "../types/PSCleaner";

/**
 * ### Manages files stored in watched folder.
 * #### API  (ipc request -> response)
 * 1. start-import      -> imported
 * 2. start-import      -> stop-import
 * 3. import-file-count -> import-file-count
 * 4. get-import-folder -> import-folder
 * 5. set-import-folder -> import-folder
 * 6. set-import-folder -> import-folder-error
 */
export class ImportFiles {
  public sendTo: string = "";
  public fm!: FileManager;

  private _store: any;

  constructor(store: any) {
    let folder = store.get("IMPORT_FOLDER");
    if (!folder) {
      folder = join(app.getPath("home"), "Documents", app.getName(), "import");
      store.set("IMPORT_FOLDER", folder);
    }
    this._store = store;
    this.fm = new FileManager(folder);
    this.fm.filter = "csv";

    ipc.on("get-import-folder", e => e.reply("import-folder", this.fm.folder));

    ipc.on("set-import-folder", (e, path) => {
      try {
        this._store.set("IMPORT_FOLDER", path);
        this.fm.folder = path;
        e.reply("import-folder", this.fm.folder);
      } catch {
        e.reply("import-folder-error", this.fm.folder);
      }
    });

    ipc.on("import-file-count", e => {
      this.fm.fileCount
        .then(n => e.reply("import-file-count", n));
    });
  }

  /**
   * Moves one file from folder to sendTo location
   */
  public moveOne(): Promise<ImportResponse> {
    return this.fm.listFiles()
      .then(files =>
        files.length > 0
          ? this.fm.fs.move(
              join(this.fm.folder, files[0]),
              join(this.sendTo, files[0])
            ).then(() => Promise.resolve("imported"))
             .catch(() => Promise.reject("stop-import"))
          : Promise.reject("stop-import")
      );
  }
}