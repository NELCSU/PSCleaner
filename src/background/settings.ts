import { app, ipcMain as ipc } from "electron";
import Store from "electron-store";
import { join } from "path";
import makeDir from "make-dir";
import fs from "fs-extra";

export class Settings {
  public data: any;
  public defaultFolder: string = join(app.getPath("home"), "Documents", app.getName());

  constructor() {
    this.data = new Store({ name: "appSettings" });

    fs.exists(this.defaultFolder, found => {
      if (!found) {
        makeDir.sync(this.defaultFolder);
      }
      (async(folder: string): Promise<void> => {
        await this.initFolder("training", folder);
        await this.initFolder("import", folder);
        await this.initFolder("export", folder);
      })(this.defaultFolder);
    });
    
    ipc.on("save-folder", (e, data) => this.data.set(data.key, data.value));

    ipc.on("delete-folder", (e, key) => this.data.delete(key));

    ipc.on("get-folders", e => {
      const result: any = {
        default: this.defaultFolder
      };
      result.data = this.data.get("import");
      result.data = this.data.get("export");
      result.data = this.data.get("training");
      e.reply("response-folders", result);
    });
  }

  private async initFolder(folder: string, parent: string): Promise<void> {
    const path: string = join(parent, folder);
    await fs.exists(path, found => {
      if (!found) {
        makeDir(path);
        this.data.set(folder, path);
      } 
    });
  }
}