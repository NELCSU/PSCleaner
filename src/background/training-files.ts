import { app, ipcMain as ipc } from "electron";
import stringify from "json-stringify-pretty-compact";
import { join } from "path";
import DB from "sqlite3-helper";
import uuidv1 from "uuid/v1";
import { FileManager } from "./file-manager";
import type { ReadFileAction } from "../typings/PSCleaner";

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
 * 11. get-training-folder     -> training-folder
 * 12. set-training-folder     -> training-folder
 * 13. set-training-folder     -> training-folder-error
 */
export class TrainingFiles {
  public fm!: FileManager;
  public ready: boolean = false;

  constructor() {
    this.init();

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
          _ => {
            this.fm.folder = path;
            e.reply("training-folder", this.fm.folder);
          },
          _ => e.reply("training-folder-error", this.fm.folder)
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

    ipc.on("get-temp-training-file", e => e.reply("temp-training-filename", uuidv1() + ".json"));
  }

  /**
   * Deletes a file
   * @param file - file to delete
   */
  public delete(file: string): Promise<ReadFileAction> {
    return this.fm.delete(file)
      .then(_ => Promise.resolve({
        fn: file,
        status: "training-file-deleted"
      }),
        _ => Promise.reject({ status: "training-file-deletion-error" })
      );
  }

  /**
   * Opens a file
   * @param file - path to file
   */
  public open(file: string): Promise<ReadFileAction> {
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
   * @param srcFile - source file to rename
   * @param destFile - destination file name
   * @param force - overwrite destination if true
   */
  public rename(srcFile: string, destFile: string, force: boolean = false): Promise<ReadFileAction> {
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
            });
          } else if (force === false && exists[1]) {
            return Promise.resolve({
              fn: destFile,
              status: "training-file-rename-warning"
            });
          } else {
            return this.fm.fs.move(oldFilePath, newFilePath)
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
   * @param file - path to file
   * @param data - data to save to file
   */
  public save(file: string, data: any): Promise<ReadFileAction> {
    return this.fm.saveFile(this.fm.join(file), stringify(data))
      .then(
        _ => Promise.resolve({ status: "training-file-saved" }),
        _ => Promise.reject({ status: "training-file-save-error" })
      );
  }

  /**
   * Class initialiser and creates the folder path setting if missing
   */
  public async init(): Promise<void> {
    await DB().queryFirstRow(`SELECT value FROM AppSettings WHERE field='TRAINING_FOLDER'`)
      .then(async row => {
        if (row) {
          return row.value;
        } else {
          const loc: string = join(app.getPath("home"), "Documents", app.getName(), "training");
          await DB().insert("AppSettings", { field: "TRAINING_FOLDER", value: loc });
          return loc;
        }
      })
      .then((location: string) => {
        this.fm = new FileManager(location);
        this.ready = true;
      });
  }
}