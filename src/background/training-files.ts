import { app, ipcMain as ipc } from "electron";
import stringify from "json-stringify-pretty-compact";
import { join } from "path";
import DB from "sqlite3-helper";
import uuidv1 from "uuid/v1";
import { FileManager } from "./filemanager";
import { TrainingFileAction } from "../typings/PSCleaner";

/**
 * ### Manages files stored in watched folder.
 * #### API  (ipc request     -> response)
 * 1. delete-training-file    -> training-file-deleted
 * 2. delete-training-file    -> training-file-deletion-error
 * 3. get-temp-training-file  -> temp-training-filename
 * 4. get-training-file       -> training-file
 * 5. get-training-file       -> training-file-error
 * 6. rename-training-file    -> training-file-rename-error
 * 7. rename-training-file    -> training-file-rename-warning
 * 8. rename-training-file    -> training-file-renamed
 * 9. save-training-file      -> training-file-save-error
 * 10. save-training-file      -> training-file-saved
 * 11. get-training-file-count -> training-file-count
 * 12. get-training-folder     -> training-folder
 * 13. set-training-folder     -> training-folder
 * 14. set-training-folder     -> training-folder-error
 */
export class TrainingFiles {
  public fm!: FileManager;
  public ready: boolean = false;

  /**
   * @param parent - reference to main process
   */
  constructor(parent: any) {
    this.init(parent);

    ipc.on("save-training-file", (e, file, data) => {
      this.save(file, data)
        .then(
          success => e.reply(success.status),
          failure => e.reply(failure.status)
        );
    });

    ipc.on("rename-training-file", (e, srcFile, destFile, force = false) => {
      this.rename(srcFile, destFile, force)
        .then(
          success => e.reply(success.status, success.fn),
          failure => e.reply(failure.status)
        );
    });

    ipc.on("get-training-folder", e => e.reply("training-folder", this.fm.folder));

    ipc.on("set-training-folder", (e, path) => {
      DB().update("AppSettings", { field: "TRAINING_FOLDER", value: path }, { field: "TRAINING_FOLDER" })
        .then(
          () => {
            this.fm.folder = path;
            e.reply("training-folder", this.fm.folder)
          },
          () => e.reply("training-folder-error", this.fm.folder)
        );
    });
    

    ipc.on("delete-training-file", (e, file) => {
      this.delete(this.fm.join(file))
        .then(
          success => e.reply(success.status),
          failure => e.reply(failure.status)
        );
    });

    ipc.on("get-training-file", (e, file) => {
      this.open(file)
        .then(
          success => e.reply(success.status, success.fn, success.data),
          failure => e.reply(failure.status)
        );
    });

    ipc.on("get-training-file-count", e => e.reply("training-file-count", this.fm.fileCount));

    ipc.on("get-temp-training-file", e => e.reply("temp-training-filename", uuidv1() + ".json"));
  }

  /**
   * Deletes a file
   * @param {string} file - file to delete
   * @return {Promise<any}
   */
  public delete(file: string): Promise<TrainingFileAction> {
    return this.fm.deleteFile(file)
      .then(() => Promise.resolve({
          fn: file,
          status: "training-file-deleted"
        }),
        () => Promise.reject({ status: "training-file-deletion-error" })
      );
  }

  /**
   * Opens a file
   * @param {string} file - path to file
   * @return {Promise<any>}
   */
  public open(file: string): Promise<TrainingFileAction> {
    return this.fm.fs.readFile(file, "utf8")
      .then((data: string) => Promise.resolve({
          data: data,
          fn: this.fm.fileName(file),
          status: "training-file"
        }),
        () => Promise.reject({ status: "training-file-error" })
      );
  }

  /**
   * Renames a file
   * @param {string} srcFile - source file to rename
   * @param {string} destFile - destination file name
   * @param {boolean} force - overwrite destination if true
   * @return {Promise<any>}
   */
  public rename(srcFile: string, destFile: string, force: boolean = false): Promise<TrainingFileAction> {
    let oldFilePath: string = this.fm.join(srcFile);
    let newFilePath: string = this.fm.join(destFile);

    return Promise.all([
      this.fm.fs.pathExists(oldFilePath), 
      this.fm.fs.pathExists(newFilePath)
    ])
      .then(
        exists => {
          if (!exists[0]) {
            return Promise.resolve({
              fn: destFile,
              status: "training-file-renamed"
            })
          } else if (force === false && exists[1]) {
            return Promise.resolve({
              fn: destFile,
              status: "training-file-rename-warning"
            })
          } else {
            return this.fm.fs.rename(oldFilePath, newFilePath)
              .then(
                () => Promise.resolve({
                  fn: destFile,
                  status: "training-file-renamed"
                }),
                () => Promise.reject({ status: "training-file-rename-error" })
              );
          }
        }
      );
  }

  /**
   * Save a file
   * @param {string} file - path to file
   * @param {any} data - data to save to file
   * @return {Promise<any>}
   */
  public save(file: string, data: any): Promise<TrainingFileAction> {
    return this.fm.saveFile(this.fm.join(file), stringify(data))
      .then(
        () => Promise.resolve({ status: "training-file-saved" }),
        () => Promise.reject({ status: "training-file-save-error" })
      );
  }

  /**
   * Class initialiser and creates the folder path setting if missing
   */
  public async init(parent: any): Promise<void> {
    await DB().queryFirstRow(`SELECT value FROM AppSettings WHERE field='TRAINING_FOLDER'`)
      .then(async row => {
        if (row) {
          return row.value;
        } else {
          const loc: string = join(app.getPath("home"), "Documents", app.getName(), "training");
          await DB().insert("AppSettings", { field: "TRAINING_FOLDER", value: loc })
          return loc;
        }
      })
      .then((location: string) => {
        this.fm = new FileManager(location);

        this.fm.events.on("file-count-change", n => {
          parent.mainWindow.webContents.send("training-file-count", n);
        });

        this.ready = true;
      });
  }
}