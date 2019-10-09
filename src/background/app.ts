import {
  App, app, ipcMain as ipc, IpcMainEvent, protocol
} from "electron";
import DB from "sqlite3-helper";

require("dotenv").config();
if (require("electron-squirrel-startup")) { // eslint-disable-line global-require
  app.quit();
}

import { AppMenu } from "./build-menu";
import { AppTray } from "./build-tray";
import { Entities } from "./entities";
import { TrainingFiles } from "./training-files";
import { ImportFiles } from "./import-files";
import { ExportFiles } from "./export-files";
import { ProcessFiles } from "./process-files";
import { AppWindow } from "./window";
import { NLP } from "./nlp.js";
import fs from "fs";
import config from "./views";

class Main {
  private _initDB: boolean = false;

  public app: App;
  public isQuitting = false;
  public mainWindow: any;
  public menu: any;
  public entities!: Entities;
  public importFiles!: ImportFiles;
  public exportFiles!: ExportFiles;
  public processFiles!: ProcessFiles;
  public trainingFiles!: TrainingFiles;
  public tray: any;
  
  constructor() {
    this.app = app;
    const lock: boolean = this.app.requestSingleInstanceLock();

    protocol.registerSchemesAsPrivileged([{
      scheme: "es6",
      privileges: { standard: true, secure: true }
    }]);

    this.app.on("window-all-closed", () => {
      if (process.platform !== "darwin") {
        this.app.quit();
      }
    });
      
    if (!lock) {
      this.app.quit();
    } else {
      this.initDB()
        .then(async () => {
          const nlp: NLP = new NLP();
          this.entities = new Entities();
          this.trainingFiles = new TrainingFiles(this);
          this.importFiles = new ImportFiles(this);
          this.exportFiles = new ExportFiles(this);
          this.processFiles = new ProcessFiles(this);

          ipc.on("NLP-request", async (e: IpcMainEvent, text: string) => {
            (async (t) => await nlp.evaluate(t))(text)
              .then(result => {
                this.mainWindow.webContents.send("NLP-response", result);
              });
          }); 
        })

      this.app.on("second-instance", () => {
        if (this.mainWindow) {
          if (this.mainWindow.isMinimized()) {
            this.mainWindow.restore();
          }
          this.mainWindow.focus();
        }
      });

      this.app.once("ready", this.run);

      this.app.on("activate", () => {
        if (this.mainWindow === null) {
          this.run();
        }
      });
    }  
  }

  public hardClose = () => {
    this.isQuitting = true;
    this.app.quit();
  }

  public initDB(): Promise<void> {
    return (async () => {
      await DB().connection();
      this._initDB = true;
    })();
  }

  public show = () => this.mainWindow.show();

  public softClose = (event: Event) => {
    if(!this.isQuitting && this.mainWindow.hideWhenMinimised) {
      event.preventDefault();
      this.mainWindow.hide();
    }
  }

  public run = () => {
    if (!this._initDB || !this.trainingFiles.ready ||
        !this.importFiles.ready || !this.exportFiles.ready ||
        !this.processFiles.ready) {
      setTimeout(() => this.run(), 1000);
      return;
    }

    this.importFiles.sendTo = this.processFiles.fm.folder;
    this.processFiles.sendTo = this.exportFiles.fm.folder;

    this.importFiles.fm.events.on("file-count-change", n => {
      this.mainWindow.webContents.send("file-counts" , {
        import: this.importFiles.fm.fileCount,
        processing: this.processFiles.fm.fileCount,
        export: this.exportFiles.fm.fileCount
      });
    });

    this.processFiles.fm.events.on("file-count-change", n => {
      this.mainWindow.webContents.send("file-counts" , {
        import: this.importFiles.fm.fileCount,
        processing: this.processFiles.fm.fileCount,
        export: this.exportFiles.fm.fileCount
      });
    });

    this.exportFiles.fm.events.on("file-count-change", n => {
      this.mainWindow.webContents.send("file-counts" , {
        import: this.importFiles.fm.fileCount,
        processing: this.processFiles.fm.fileCount,
        export: this.exportFiles.fm.fileCount
      });
    });

    ipc.on("get-file-counts", (e: IpcMainEvent) => {
      e.reply("file-counts", {
        import: this.importFiles.fm.fileCount,
        processing: this.processFiles.fm.fileCount,
        export: this.exportFiles.fm.fileCount
      });
    });

    protocol.registerBufferProtocol("es6", (req, cb) => {
      fs.readFile(
        config.join(config.view, req.url.replace("es6://", "")),
        (e, b) => { cb({ mimeType: "text/javascript", data: b }); }
      );
    });

    this.mainWindow = new AppWindow({
      backgroundColor: "#002b36",
      file: config.pages.get("index"),
      icon: config.images.get("favicon"),
    });

    if (process.env.NODE_ENV === "Development") {
      this.mainWindow.webContents.on("did-frame-finish-load", () => {
        this.mainWindow.webContents.once("devtools-opened", () => {
          this.mainWindow.focus();
        });
        this.mainWindow.webContents.openDevTools();
      });
    }

    this.menu = new AppMenu(this);
    this.tray = new AppTray(this);

    this.mainWindow.on("minimize", (e: Event) => this.softClose(e));

    this.mainWindow.on("close", (e: Event) => {
      this.softClose(e);
      return false;
    });
  }
}

const main = new Main();