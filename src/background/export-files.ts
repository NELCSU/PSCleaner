import { ipcMain as ipc } from "electron";
import { FileManager } from "./filemanager";

export class ExportFiles {
  public fm: FileManager;

  constructor(location: string, parent: any) {
    this.fm = new FileManager(location);

    ipc.on("get-export-folder", async e => e.reply("export-folder", this.fm.folder));

    ipc.on("get-export-file-count", async e => {
      e.reply("export-file-count", this.fm.fileCount);
    });

    this.fm.events.on("file-count-change", n => {
      parent.mainWindow.webContents.send("export-file-count" , n);
    });
  }
}