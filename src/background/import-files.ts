import { app, ipcMain as ipc } from "electron";
import { FileManager } from "./filemanager";
import DB from "sqlite3-helper";
import { join } from "path";
import { ImportResponse } from "../typings/PSCleaner";

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
  public ready: boolean = false;

  constructor() {
    this.init();
    ipc.on("get-import-folder", e => e.reply("import-folder", this.fm.folder));

    ipc.on("set-import-folder", (e, path) => {
      DB().update("AppSettings", { field: "IMPORT_FOLDER", value: path }, { field: "IMPORT_FOLDER" })
        .then(
          () => {
            this.fm.folder = path;
            e.reply("import-folder", this.fm.folder)
          },
          () => e.reply("import-folder-error", this.fm.folder)
        );
    });
    
    ipc.on("import-file-count", e => {
      this.fm.fileCount
        .then(n => e.reply("import-file-count", n));
    });

    ipc.on("start-import", e => {
      this.moveOne()
        .then(
          (success: ImportResponse) => e.reply(success),
          (fail: ImportResponse) => e.reply(fail)
        );
    });
  }

  /**
   * Class initialiser and creates the folder path setting if missing
   */
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

  /**
   * Moves one file from folder to sendTo location
   * @param {string} folder - path to target folder
   * @return {Promise<ImportResponse>}
   */
  public moveOne(folder?: string): Promise<ImportResponse> {
    if (folder) {
      this.sendTo = folder;
    }
    return this.fm.listFiles()
      .then(files => 
        files.length > 0
          ? this.fm.fs.rename(join(this.fm.folder, files[0]), join(this.sendTo, files[0]))
              .then(() => Promise.resolve("imported"))
              .catch(() => Promise.reject("stop-import"))
          : Promise.reject("stop-import")
      )
  }
}