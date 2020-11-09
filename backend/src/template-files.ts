import { app, ipcMain as ipc } from "electron";
import * as stringify from "json-stringify-pretty-compact";
import * as csv from "fast-csv";
import { join } from "path";
import { FileManager } from "./file-manager";
import * as jschardet from "jschardet";
import type { CSVField, CSVTemplate, ReadFileAction } from "../types/PSCleaner";

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
  public exclusions: string[] = [];
  public fields: Map<string, CSVField> = new Map<string, CSVField>();
  public fm!: FileManager;
  public header: boolean = false;
  public trace: boolean = true;

  private _store: any;

  constructor(store: any) {
    let folder = store.get("TEMPLATE_FOLDER");
    if (!folder) {
      folder = join(app.getPath("home"), "Documents", app.getName(), "template");
      store.set("TEMPLATE_FOLDER", folder);
    }
    this._store = store;
    this.fm = new FileManager(folder);

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
      try {
        this._store.set("TEMPLATE_FOLDER", path);
        this.fm.folder = path;
        e.reply("template-folder", this.fm.folder);
      } catch {
        e.reply("template-folder-error", this.fm.folder);
      }
    });

    ipc.on("define-template", (e, file) => {
      const size: number = this.fm.fs.statSync(file).size;
      if (size < 3) {
        throw new Error("File cannot be empty");
      }
      const rs = this.fm.fs.createReadStream(file, { start: 0, end: size > 499 ? 499 : size });
      rs.on("data", async (chunk: any) => {          
        const isUTF8: boolean = chunk[0] === 239 && chunk[1] === 187 && chunk[2] === 191;
        rs.close();
        const text: any = jschardet.detect(chunk.toString());
        const headers: string[] = [];
        let rows: number = 0;

        csv.parseFile(file, {
          encoding: isUTF8 ? "utf-8" : text.encoding,
          headers: false,
          ignoreEmpty: true,
          strictColumnHandling: true
        })
        .on("data", async (row: any) => {
          if (rows === 0) {
            for (let cell in row) {
              headers.push(row[cell]);
            }
            rows = 1;
            e.reply("define-template", headers);
          }
        });
      });
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
              this.trace = data.trace;

              data.fields.forEach((field: any, n: number) => {
                if (Array.isArray(field)) { // legacy file
                  this.fields.set(field[0], { label: field[0], enabled: field[1], rules: undefined, seq: n });
                } else {
                  this.fields.set(data.header ? field.label : `${field.seq}`, field);
                }
              });

              e.reply(success.status, success.fn, {
                exclusions: data.exclusions ? data.exclusions : [],
                fields: Array.from(this.fields.values()),
                header: data.header,
                trace: data.trace
              });
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

    ipc.on("get-trace-status", (e) => {
      e.reply("trace-status", this.trace);
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
    if (template.fields === undefined || !Array.isArray(template.fields) || template.fields.length === 0) {
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
    this.trace = true;
    this.fields.clear();
    this.exclusions = [];
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
}