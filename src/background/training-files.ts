import { app, ipcMain as ipc } from "electron";
import uuidv1 from "uuid/v1";
import { FileManager } from "./filemanager";
import DB from "sqlite3-helper";
import stringify from "json-stringify-pretty-compact";
import { join } from "path";

export class TrainingFiles {
  public activeFile: string = "";
  public fm!: FileManager;
  public ready: boolean = false;

  /**
   * @constructor
   * @param parent - reference to main process
   */
  constructor(parent: any) {
    this.init(parent);

    ipc.on("save-training-file", async (e, file, data) => {
      await this.fm.saveFile(
        this.fm.normalizePath(file),
        stringify(data)
      ).then(success => {
        if (success) {
          e.reply("training-file-saved");
        }
      });
    });

    ipc.on("training-file-rename", async(e, file, force = false) => {
      const oldFilePath: string = this.fm.normalizePath(this.activeFile);
      let newFilePath: string = this.fm.normalizePath(file);
      if (!this.fm.exists(oldFilePath)) {
        this.activeFile = file;
        e.reply("training-file-rename-complete", file);
      } else if (!force && this.fm.exists(newFilePath)) {
        e.reply("training-file-rename-warning", file);
      } else {
        await this.fm.rename(oldFilePath, newFilePath)
          .then(success => {
            if (success) {
              e.reply("training-file-rename-complete", file);
            }
          });
      }
    });

    ipc.on("get-training-folder", async e => e.reply("training-folder", this.fm.folder));

    ipc.on("clear-training-file", async () => this.activeFile = "");

    ipc.on("delete-training-file", async (e, file) => {
      await this.fm.deleteFile(
        this.fm.normalizePath(file)
      ).then(success => {
        if (success) {
          e.reply("training-file-deleted");
        }
      });
    });

    ipc.on("get-training-file", async (e, file) => {
      await this.fm.readFile(file)
        .then(data => {
          this.activeFile = this.fm.fileName(file);
          e.reply("training-file", this.activeFile, data);
        });
    });

    ipc.on("get-training-file-count", async e => {
      e.reply("training-file-count", this.fm.fileCount);
    });

    ipc.on("get-temp-training-filename", async (e) => {
      this.activeFile = uuidv1() + ".json";
      e.reply("temp-training-filename", this.activeFile);
    });
  }

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
          parent.mainWindow.webContents.send("training-file-count" , n);
        });

        this.ready = true;
      });
  }
}