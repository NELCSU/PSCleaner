import chok from "chokidar";
import { FSWatcher } from "chokidar";
import EventEmitter from "events";
import fs from "fs-extra";
import path from "path";
import trash from "trash";
import makeDir from "make-dir";

export class FileManager {
  public events = new EventEmitter();
  public fileCount = 0;
  public filter!: string;
  public folder: string;
  public fs: any;
  public watcher!: FSWatcher;

  /**
   * @constructor
   * @param folder - Base folder to reference. Creates path to folder if missing
   */
  constructor(folder: string) {
    this.folder = folder;
    this.fs = fs;
    fs.exists(folder, async found => {
      if (found) {
        this.init();
      } else {        
        await makeDir(folder)
          .then(() => this.init())
      }
    });
  }

  public async copyFiles(srcFolder: string, destFolder: string): Promise<boolean> {
    const files: string[] = await this.listFiles(srcFolder);
    return Promise.all(files.map(f => fs.copyFile(path.join(srcFolder, f), path.join(destFolder, f))))
      .then(() => {
        return true;
      });      
  }

  public async deleteFile(file: string): Promise<boolean> {
    return await trash([file])
      .then(() => true)
      .catch(() => false);
  }

  public exists(file: string): boolean { return fs.existsSync(file); }

  public fileName(file: string): string { return path.basename(file); }

  public init(): void {
    let path: string = this.folder;
    if (this.filter) {
      path += `/**/*.${this.filter}`;
    }
    this.watcher = chok.watch(path, { ignored: /^\./, persistent: true });
    this.watcher
      .on("add", () => {
        this.events.emit("file-count-change", ++this.fileCount);
      })
      .on("unlink", () => {
        this.events.emit("file-count-change", --this.fileCount);
      });
  }

  public async listFiles(folder?: string | undefined): Promise<string[]> {
    if (this.filter) {
      const re = new RegExp(`\.${this.filter}$`);
      return await fs.readdir(folder || this.folder)
        .then(files => files.filter(f => re.test(f)));
    } else {
      return await fs.readdir(folder || this.folder);
    }
  }

  public normalizePath(file: string): string { return path.join(this.folder, file); }

  public async saveFile(file: string, data: any): Promise<boolean> {
    return await fs.writeFile(file, data)
      .then(() => true)
      .catch(() => false);
  }

  public async readFile(file: string): Promise<any> {
    return await fs.readFile(file, "utf8");
  }

  public * readFiles(files: string[]): any {
    for (let file of files) {
      yield fs.readFileSync(this.normalizePath(file), "utf8");
    }
  }

  public async rename(oldFile: string, newFile: string): Promise<boolean> {
    return await fs.rename(oldFile, newFile)
      .then(() => true)
      .catch(() => false);
  }
}