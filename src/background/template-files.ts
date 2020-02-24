import { app, ipcMain as ipc } from "electron";
import stringify from "json-stringify-pretty-compact";
import { join } from "path";
import DB from "sqlite3-helper";
import { FileManager } from "./file-manager";
import type { CSVTemplate, ReadFileAction } from "../typings/PSCleaner";

/**
 * ### Manages files stored in watched folder.
 * #### API  (ipc request  -> response)
 * clear-templete-file
 * delete-templete-file    -> template-file-deleted
 * delete-template-file    -> template-file-deletion-error
 * get-template-file       -> template-file
 * get-template-file       -> template-file-error
 * get-template-files      -> template-files
 * rename-template-file    -> template-file-rename-error
 * rename-template-file    -> template-file-rename-warning
 * rename-template-file    -> template-file-renamed
 * save-template-file      -> template-file-save-error
 * save-template-file      -> template-file-saved
 * get-template-folder     -> template-folder
 * set-template-folder     -> template-folder
 * set-template-folder     -> template-folder-error
 */
export class TemplateFiles {
  #error?: string;

  public get error(): string | undefined {
    return this.#error;
  }
  public set error(message: string | undefined) {
    this.#error = message;
    if (this.#error) {
      console.log(this.#error);
    }
  }
  public fields: Map<string, boolean> = new Map<string, boolean>();
  public fm!: FileManager;
  public header: boolean = false;
  public ready: boolean = false;

  constructor() {
    this.init();

    ipc.on("clear-template-file", () => this.clear());

    ipc.on("save-template-file", (e, file, data) => {
      this.saveFile(file, data)
        .then(
          success => e.reply(success.status),
          failure => e.reply(failure.status)
        );
    });

    ipc.on("get-template-folder", e => e.reply("template-folder", this.fm.folder));

    ipc.on("set-template-folder", (e, path) => {
      DB().update("AppSettings", { field: "TEMPLATE_FOLDER", value: path }, { field: "TEMPLATE_FOLDER" })
        .then(
          _ => {
            this.fm.folder = path;
            e.reply("template-folder", this.fm.folder);
          },
          _ => e.reply("template-folder-error", this.fm.folder)
        );
    });

    ipc.on("delete-template-file", (e, file) => {
      this.deleteFile(file)
        .then(
          success => e.reply(success),
          failure => e.reply(failure)
        );
    });

    ipc.on("get-template-file", (e, file) => {
      this.openFile(file)
        .then(
          success => {
            const data: CSVTemplate = JSON.parse(success.data as any);
            if (this.check(data)) {
              this.error = undefined;
              this.clear();
              this.header = data.header;
              data.fields.forEach((field: [string, boolean]) => {
                this.fields.set(field[0], field[1]);
              });
              e.reply(success.status, success.fn, data);
            } else {
              e.reply(this.error);
            }
          },
          failure => {
            e.reply(failure.status);
          }
        );
    });

    ipc.on("get-template-files", (e) => {
      this.fm.listFiles()
        .then(
          success => {
            success = success.map(f => f.replace(/\.json/, ""));
            e.reply("template-files", success);
          }
        );
    });
  }

  /**
   * Returns false if check on parameter fails. Stores error.
   * @param template
   */
  public check(template: CSVTemplate): boolean {
    if (template.header === undefined || typeof template.header !== "boolean") {
      this.error = "Processing template is missing header specification";
      return false;
    }
    if (template.fields === undefined || !Array.isArray(template.fields) ||
      (template.fields.length > 0 && !Array.isArray(template.fields[0]))) {
      this.error = "Processing template is missing fields specification";
      return false;
    }
    return true;
  }

  /**
   * Clears out current selected template
   */
  public clear(): void {
    this.header = false;
    this.fields.clear();
  }

  /**
   * Deletes a file
   * @param file - file to delete
   */
  public deleteFile(file: string): Promise<string> {
    const fullPath: string = this.fm.join(file.replace(/\.json/, "") + ".json");
    return this.fm.delete(fullPath)
      .then(
        _ => Promise.resolve("template-file-deleted"),
        _ => Promise.reject("template-file-deletion-error")
      );
  }

  /**
   * Opens a file
   * @param file - path to file
   */
  public openFile(file: string): Promise<ReadFileAction> {
    const fullPath: string = this.fm.join(file.replace(/\.json/, "") + ".json");
    return this.fm.fs.readFile(fullPath, "utf8")
      .then((data: string) => Promise.resolve({
        data: data,
        fn: file.replace(/\.json/, ""),
        status: "template-file"
      }),
        () => Promise.reject({ status: "template-file-error" })
      );
  }

  /**
   * Save a file
   * @param file - path to file
   * @param data - data to save to file
   */
  public saveFile(file: string, data: any): Promise<ReadFileAction> {
    const fullPath: string = this.fm.join(file.replace(/\.json/, "") + ".json");
    return this.fm.saveFile(fullPath, stringify(data))
      .then(
        _ => Promise.resolve({ status: "template-file-saved" }),
        _ => Promise.reject({ status: "template-file-save-error" })
      );
  }

  /**
   * Class initialiser and creates the folder path setting if missing
   */
  public async init(): Promise<void> {
    await DB().queryFirstRow(`SELECT value FROM AppSettings WHERE field='TEMPLATE_FOLDER'`)
      .then(async row => {
        if (row) {
          return row.value;
        } else {
          const loc: string = join(app.getPath("home"), "Documents", app.getName(), "template");
          await DB().insert("AppSettings", { field: "TEMPLATE_FOLDER", value: loc });
          return loc;
        }
      })
      .then((location: string) => {
        this.fm = new FileManager(location);
        this.ready = true;
      });
  }
}