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

  /**
   * Copies files between from and to folders
   * @param from - folder to copy files from
   * @param to - folder to copy files to
   */
  public async copyFiles(from: string, to: string): Promise<boolean> {
    const files: string[] = await this.listFiles(from);
    return Promise.all(files.map(f => fs.copyFile(path.join(from, f), path.join(to, f)))).then(() => true);      
  }

  /**
   * Recycles file (soft delete)
   * @param file - file to send to recycle bin
   */
  public async deleteFile(file: string): Promise<boolean> {
    return await trash([file])
      .then(() => true)
      .catch(() => false);
  }

  /**
   * Performs synchronous file existence check
   * @param file - file path to check
   */
  public exists(file: string): boolean { return fs.existsSync(file); }

  /**
   * Returns file name from file path
   * @param file - file path to check
   */
  public fileName(file: string): string { return path.basename(file); }

  /**
   * Initialises the class
   */
  public init(): void {
    let path: string = this.folder;
    if (this.filter) {
      path += `/**/*.${this.filter}`;
    }
    this.watcher = chok.watch(path, {
      ignored: /^\./,
      persistent: true
    });
    this.watcher
      .on("add", () => {
        fs.readdir(this.folder)
          .then(files => {
            this.fileCount = files.length;
            this.events.emit("file-count-change", this.fileCount);
          });
      })
      .on("unlink", () => {
        fs.readdir(this.folder)
          .then(files => {
            this.fileCount = files.length;
            this.events.emit("file-count-change", this.fileCount);
          });
      });
  }

  /**
   * 
   * @param folder - folder to list files from. Defaults to class folder is missing
   */
  public async listFiles(folder?: string | undefined): Promise<string[]> {
    if (this.filter) {
      const re = new RegExp(`\.${this.filter}$`);
      return await fs.readdir(folder || this.folder)
        .then(files => files.filter(f => re.test(f)));
    } else {
      return await fs.readdir(folder || this.folder);
    }
  }

  /**
   * Returns file under path
   * @param file - file to link into path
   */
  public join(file: string): string { return path.join(this.folder, file); }

  /**
   * Saves files
   * @param file - file path to save to
   * @param data - data to save to file
   */
  public async saveFile(file: string, data: any): Promise<boolean> {
    return await fs.writeFile(file, data)
      .then(() => true)
      .catch(() => false);
  }
  
  /**
   * Returns iterator over file list
   * @param files - list of files to read
   */
  public * readFiles(files: string[]): Generator<string, any, undefined> {
    for (let file of files) {
      yield fs.readFileSync(this.join(file), "utf8");
    }
  }
}