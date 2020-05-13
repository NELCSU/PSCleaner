import * as chok from "chokidar";
import * as os from "os";
import * as EventEmitter from "events";
import * as fs from "fs-extra";
import { v4 as uuidv4 } from "uuid";
import * as makeDir from "make-dir";
import { basename, join } from "path";
import { isRootOrDriveLetter } from "./util/path";

/**
 * ### Wrapper for Node's FileSystem library
 */
export class FileManager {
  #folder!: string;
  
  public events = new EventEmitter();
  public get fileCount(): Promise<number> {
    return this.listFiles().then(files => files.length);
  }
  public filter!: string;
  public get folder(): string {
    return this.#folder;
  }
  public set folder(value: string) {
    this.#folder = value;
    fs.pathExists(this.#folder)
      .then(found => {
        if (found) {
          this.init();
        } else {
          makeDir(this.#folder)
            .then(_ => this.init());
        }
      });
  }
  public fs: any;
  public mkdir: Function = makeDir;
  public watcher!: chok.FSWatcher;

  /**
   * @param folder - Base folder to reference. Creates path to folder if missing
   */
  constructor(folder: string) {
    this.fs = fs;
    this.folder = folder;
  }

  /**
   * Copies files between from and to folders
   * @param from - folder to copy files from
   * @param to - folder to copy files to
   */
  public async copyFiles(from: string, to: string): Promise<boolean> {
    const files: string[] = await this.listFiles(from);
    return Promise.all(files.map(f => fs.copyFile(join(from, f), join(to, f))))
      .then(_ => Promise.resolve(true))
      .catch((err: string) => Promise.reject(err));
  }

  /**
   * Deletes a folder of file
   * @param path - return true if successful
   */
  public async delete(path: string): Promise<boolean> {
    if (isRootOrDriveLetter(path)) {
      throw new Error("Cannot to recursively delete root");
    }
    try {
      const pathInTemp = join(os.tmpdir(), uuidv4());
      try {
        await fs.rename(path, pathInTemp);
      } catch {
        this._delete(path);
        return Promise.resolve(true);
      }
      this._delete(pathInTemp);
      return Promise.resolve(true);
    } catch (err) {
      if (err.code !== "ENOENT") {
        throw err;
      }
      return Promise.reject(false);
    }
  }

  /**
   * Returns file name from file path
   * @param file - file path to check
   */
  public fileName(file: string): string { return basename(file); }

  /**
   * Folder initialiser
   * @param previousFailure - default = false, updates file watcher on error
   */
  public init(previousFailure: boolean = false): void {
    let path: string = this.folder;
    if (this.filter) {
      path += `/**/*.${this.filter}`;
    }
    if (this.watcher) {
      this.watcher.close();
    }
    this.watcher = chok.watch(path, {
      ignored: /^\./,
      persistent: true,
      usePolling: previousFailure
    });
    this.watcher
      .on("add", _ => {
        this.events.emit("file-count-change", this.fileCount);
      })
      .on("unlink", _ => {
        this.events.emit("file-count-change", this.fileCount);
      })
      .on("error", err => {
        console.log(err);
        if (!previousFailure) {
          this.init(true);
        }
      });
  }

  /**
   * Returns file under path
   * @param file - file to link into path
   */
  public join(file: string): string { return join(this.folder, file); }

  /**
   * Returns file list from folder
   * @param folder - folder to list files from. Defaults to class folder is missing
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
   * @param file - file path to save to
   * @param data - data to save to file
   */
  public async saveFile(file: string, data: any): Promise<boolean> {
    return await fs.writeFile(file, data)
      .then(_ => Promise.resolve(true))
      .catch((err: string) => Promise.reject(err));
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

  /**
   * See https://github.com/microsoft/vscode/blob/master/src/vs/base/node/pfs.ts
   * @param path - directory or folder
   */
  private async _delete(path: string): Promise<void> {
    try {
      const stat = await fs.lstat(path);  
      if (stat.isDirectory() && !stat.isSymbolicLink()) {
        const children = await fs.readdir(path);
        await Promise.all(children.map(child => this._delete(join(path, child))));
        await fs.rmdir(path);
      } else {
        const mode = stat.mode;
        if (!(mode & 128)) {
          await fs.chmod(path, mode | 128);
        }
        return fs.unlink(path);
      }
    } catch (err) {
      if (err.code !== "ENOENT") {
        throw err;
      }
    }
  }
}