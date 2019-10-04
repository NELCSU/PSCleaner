import { app, ipcMain as ipc } from "electron";
import Store from "electron-store";
import path from "path";
import makeDir from "make-dir";
import fs from "fs";

export class Settings {
  public data: any;
  public defaultFolder: string = path.join(app.getPath("home"), "Documents", app.getName());

  constructor() {
    this.data = new Store({ name: "appSettings" });

    if (!fs.existsSync(this.defaultFolder)) {
      makeDir.sync(this.defaultFolder);
    }

    const d: string = path.join(this.defaultFolder, "data");
    if (!fs.existsSync(d)) {
      makeDir.sync(d);
    }
    if (!this.data.has("data")) {
      this.data.set("data", d);
    }

    const m: string = path.join(this.defaultFolder, "model");
    if (!fs.existsSync(m)) {
      makeDir.sync(m);
    }
    if (!this.data.has("model")) {
      this.data.set("model", m);
    }

    ipc.on("save-folder", (e, data) => this.data.set(data.key, data.value));

    ipc.on("delete-folder", (e, key) => this.data.delete(key));

    ipc.on("get-folders", e => {
      const result: any = {
        default: this.defaultFolder
      };
      result.data = this.data.get("data");
      result.model = this.data.get("model");
      e.reply("response-folders", result);
    });
  }
}