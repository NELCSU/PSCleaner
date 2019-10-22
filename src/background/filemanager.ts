import chok from "chokidar";
import { FSWatcher } from "chokidar";
import EventEmitter from "events";
import fs from "fs-extra";
import makeDir from "make-dir";
import path from "path";
import trash from "trash";

/**
 * ### Wrapper for Node's FileSystem library
 */
export class FileManager {
  private _folder!: string;

  public events = new EventEmitter();
  public get fileCount(): Promise<number> {
    return this.listFiles().then(files => files.length);
  }
  public filter!: string;
  public get folder(): string {
    return this._folder;
  }
  public set folder(value: string) {
    this._folder = value;
    fs.exists(this._folder, async found => {
      if (found) {
        this.init();
      } else {        
        await makeDir(this._folder)
          .then(() => this.init())
      }
    });
  }
  public fs: any;
  public mkdir: Function = makeDir;
  public watcher!: FSWatcher;

  /**
   * @param {string} folder - Base folder to reference. Creates path to folder if missing
   */
  constructor(folder: string) {
    this.fs = fs;
    this.folder = folder;
  }

  /**
   * Copies files between from and to folders
   * @param {string} from - folder to copy files from
   * @param {string} to - folder to copy files to
   * @return {Promise<boolean>} - returns true if all files copied
   */
  public async copyFiles(from: string, to: string): Promise<boolean> {
    const files: string[] = await this.listFiles(from);
    return Promise.all(files.map(f => fs.copyFile(path.join(from, f), path.join(to, f))))
      .then(() => Promise.resolve(true))
      .catch((err: string) => Promise.reject(err));
  }

  /**
   * Recycles file (soft delete)
   * @param {string} file - file to send to recycle bin
   * @return {Promise<boolean>} - returns true if file deleted
   */
  public async deleteFile(file: string): Promise<boolean> {
    return await trash([file])
      .then(() => Promise.resolve(true))
      .catch((err: string) => Promise.reject(err));
  }

  /**
   * Returns file name from file path
   * @param {string} file - file path to check
   * @return {string}
   */
  public fileName(file: string): string { return path.basename(file); }

  /**
   * Folder initialiser
   */
  public init(): void {
    let path: string = this.folder;
    if (this.filter) {
      path += `/**/*.${this.filter}`;
    }
    if (this.watcher) {
      this.watcher.close();
    }
    this.watcher = chok.watch(path, {
      ignored: /^\./,
      persistent: true
    });
    this.watcher
      .on("add", () => {
        this.events.emit("file-count-change", this.fileCount);
      })
      .on("unlink", () => {
        this.events.emit("file-count-change", this.fileCount);
      });
  }

  /**
   * Returns file under path
   * @param {string} file - file to link into path
   */
  public join(file: string): string { return path.join(this.folder, file); }

  /**
   * Returns file list from folder
   * @param {string?} folder - folder to list files from. Defaults to class folder is missing
   * @return {Promise<string>}
   */
  public async listFiles(folder?: string | undefined): Promise<string[]> {
    if (this.filter) {
      const re = new RegExp(`\.${this.filter}$`);
      return await fs.readdir(folder || this.folder)
        .then((files: string[]) => files.filter(f => re.test(f)))
        .catch(err => Promise.reject(err));
    } else {
      return await fs.readdir(folder || this.folder)
        .catch((err: string) => Promise.reject(err));
    }
  }

  /**
   * Saves files
   * @param {string} file - file path to save to
   * @param {any} data - data to save to file
   * @return {Promise<boolean>}
   */
  public async saveFile(file: string, data: any): Promise<boolean> {
    return await fs.writeFile(file, data)
      .then(() => Promise.resolve(true))
      .catch((err: string) => Promise.reject(err));
  }
  
  /**
   * Returns iterator over file list
   * @param {string[]} files - list of files to read
   * @return {Generator<string, any, undefined>}
   */
  public * readFiles(files: string[]): Generator<string, any, undefined> {
    for (let file of files) {
      yield fs.readFileSync(this.join(file), "utf8");
    }
  }
}