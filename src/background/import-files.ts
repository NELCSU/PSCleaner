import { ipcMain as ipc } from "electron";
import { FileManager } from "./filemanager";

export class ImportFiles {
  public fm: FileManager;

  constructor(location: string, parent: any) {
    this.fm = new FileManager(location);

    ipc.on("get-import-folder", async e => e.reply("import-folder", this.fm.folder));

    ipc.on("get-import-file-count", async e => {
      e.reply("import-file-count", this.fm.fileCount);
    });

    this.fm.events.on("file-count-change", n => {
      parent.mainWindow.webContents.send("import-file-count" , n);
    });
  }
}