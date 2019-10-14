import { app, ipcMain as ipc } from "electron";
import stringify from "json-stringify-pretty-compact";
import { join } from "path";
import DB from "sqlite3-helper";
import uuidv1 from "uuid/v1";
import { FileManager } from "./filemanager";
import { TrainingFileResponse } from "../typings/PSCleaner";

/**
 * Manages files stored in watched folder.
 * ----------------------------------
 * API  (ipc request     -> response)
 * ----------------------------------
 * delete-training-file    -> training-file-deleted
 * delete-training-file    -> training-file-deletion-error
 * get-temp-training-file  -> temp-training-filename
 * get-training-file       -> training-file
 * get-training-file       -> training-file-error
 * get-training-file-count -> training-file-count
 * get-training-folder     -> training-folder - returns training folder path
 * rename-training-file    -> training-file-rename-error
 * rename-training-file    -> training-file-rename-warning
 * rename-training-file    -> training-file-renamed
 * save-training-file      -> training-file-save-error
 * save-training-file      -> training-file-saved
 */
export class TrainingFiles {
  public fm!: FileManager;
  public ready: boolean = false;

  /**
   * @param parent - reference to main process
   */
  constructor(parent: any) {
    this.init(parent);

    ipc.on("save-training-file", async (e, file, data) => {
      await this.fm.saveFile(this.fm.join(file), stringify(data))
        .then(
          () => e.reply("training-file-saved"),
          () => e.reply("training-file-save-error")
        );
    });

    ipc.on("rename-training-file", async (e, srcFile, destFile, force = false) => {
      const oldFilePath: string = this.fm.join(srcFile);
      let newFilePath: string = this.fm.join(destFile);
      if (!this.fm.fs.existsSync(oldFilePath)) {
        e.reply("training-file-renamed", destFile);
      } else if (!force && this.fm.fs.existsSync(newFilePath)) {
        e.reply("training-file-rename-warning", destFile);
      } else {
        this.fm.fs.rename(oldFilePath, newFilePath)
          .then(
            () => e.reply("training-file-renamed", destFile),
            () => e.reply("training-file-rename-error")
          );
      }
    });

    ipc.on("get-training-folder", async e => e.reply("training-folder", this.fm.folder));

    ipc.on("delete-training-file", (e, file) => {
      this.delete(this.fm.join(file))
        .then(success => e.reply(success), failure => e.reply(failure));
    });

    ipc.on("get-training-file", (e, file) => {
      this.fm.fs.readFile(file, "utf8")
        .then((data: string) => {
          e.reply("training-file", this.fm.fileName(file), data);
        })
        .catch(() => e.reply("training-file-error", file));
    });

    ipc.on("get-training-file-count", e => e.reply("training-file-count", this.fm.fileCount));

    ipc.on("get-temp-training-file", e => e.reply("temp-training-filename", uuidv1() + ".json"));
  }

  /**
   * Deletes a file
   * @param {string} file - file to delete
   * @return {Promise<TrainingFileResponse}
   */
  public delete(file: string): Promise<TrainingFileResponse> {
    return this.fm.deleteFile(file)
      .then(
        () => Promise.resolve("training-file-deleted"),
        () => Promise.resolve("training-file-deletion-error")
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