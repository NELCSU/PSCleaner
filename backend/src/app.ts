import * as isSquirrelStartup from "electron-squirrel-startup";
if (isSquirrelStartup) {
  app.quit();
}
import { App, app, dialog, ipcMain as ipc, IpcMainEvent, protocol } from "electron";
import * as EventEmitter from "events";
import * as Store from "electron-store";
import * as log from "electron-log";
import * as env from "dotenv";
env.config();
require('@electron/remote/main').initialize();
import { AppMenu } from "./build-menu";
import { AppTray } from "./build-tray";
import { Entities } from "./entities";
import { ImportFiles } from "./import-files";
import { ExportFiles } from "./export-files";
import { ProcessFiles } from "./process-files";
import { TemplateFiles } from "./template-files";
import { AppWindow } from "./window";
import { NLP } from "./nlp.js";
import * as fs from "fs";
import config from "./views";

class Main {
  private _store: any;

  public app: App;
  public isQuitting = false;
  public mainWindow: any;
  public menu: any;
  public entities!: Entities;
  public events = new EventEmitter();
  public importFiles!: ImportFiles;
  public exportFiles!: ExportFiles;
  public processFiles!: ProcessFiles;
  public templateFiles!: TemplateFiles;
  public logger: log.ElectronLog = log;
  public tray: any;

  constructor() {
    this.app = app;
    this.logger.transports.file.level = "debug";
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
      this._store = new Store();

      this.entities = new Entities();
      const nlp: NLP = new NLP(this.entities);
      this.templateFiles = new TemplateFiles(this._store);
      this.importFiles = new ImportFiles(this._store);
      this.exportFiles = new ExportFiles(this._store);
      this.processFiles = new ProcessFiles(this._store, nlp);

      ipc.handle("get-current-window", async (_: any) => {
        const window = this.mainWindow;
        return window;
      });

      ipc.handle("show-modal-input", async (_: any, options: Electron.MessageBoxOptions) => {
        return dialog.showMessageBoxSync(null as any, options);
      });

      ipc.handle("show-modal-open", async (_: any, options: Electron.OpenDialogOptions) => {
        return dialog.showOpenDialog(null as any, options);
      });

      ipc.on("NLP-request", async (_: IpcMainEvent, text: string) => {
        this.entities.exclude([]);
        (async (t) => await nlp.evaluate(t))(text)
          .then(result => {
            this.mainWindow.webContents.send("NLP-response", result);
          });
      });

      ipc.on("start-import", e => {
        this.importFiles.sendTo = this.processFiles.fm.folder;
        this.importFiles.moveOne()
          .then(
            (success) => e.reply(success),
            (fail) => e.reply(fail)
          );
      });

      ipc.on("start-processing", async (e: any) => {
        try {
          this.processFiles.sendTo = this.exportFiles.fm.folder;
          this.processFiles.fm.listFiles()
            .then(files => {
              if (files.length > 0) {
                nlp.trace = this.templateFiles.trace;
                this.entities.exclude(this.templateFiles.exclusions ? this.templateFiles.exclusions : []);
                this.processFiles.processFile(files[0], this.templateFiles);
                this.processFiles.events.on("file-processed", (_: any) => e.reply("processed"));
                this.processFiles.events.on("row-processed", (rows: number) => e.reply("row-completed", rows));
                this.processFiles.events.on("row-count-estimation", (rows: number) => e.reply("row-count", rows));
              } else {
                this.processFiles.events.on("file-processing-error", (_: any) => e.reply("stop-processing"));
                e.reply("stop-processing");
              }
            });
        } catch (err) {
          e.reply("processing-folder-error", err.message);
        }
      });

      this.app.on("second-instance", (_: any) => {
        if (this.mainWindow) {
          if (this.mainWindow.isMinimized()) {
            this.mainWindow.restore();
          }
          this.mainWindow.focus();
        }
      });

      this.app.once("ready", this.run);

      this.app.on("activate", (_: any) => {
        if (this.mainWindow === null) {
          this.run();
        }
      });
    }
  }

  public hardClose() {
    this.isQuitting = true;
    this.app.quit();
  }

  public show() {
    this.mainWindow.show();
  }

  public softClose(event: Event) {
    if (!this.isQuitting && this.mainWindow.hideWhenMinimised) {
      event.preventDefault();
      this.mainWindow.hide();
    }
  }

  public run = () => {
    this.importFiles.sendTo = this.processFiles.fm.folder;
    this.processFiles.sendTo = this.exportFiles.fm.folder;

    this.importFiles.fm.events.on("file-count-change", (count: any) => {
      count.then((n: number) => this.mainWindow.webContents.send("import-file-count", n));
    });

    this.processFiles.fm.events.on("file-count-change", (count: any) => {
      count.then((n: number) => this.mainWindow.webContents.send("processing-file-count", n));
    });

    this.exportFiles.fm.events.on("file-count-change", (count: any) => {
      count.then((n: number) => this.mainWindow.webContents.send("export-file-count", n));
    });

    protocol.registerBufferProtocol("es6", (req: any, cb: Function) => {
      fs.readFile(
        config.join(config.view, req.url.replace("es6://", "")),
        (_, b) => { cb({ mimeType: "text/javascript", data: b }); }
      );
    });

    this.mainWindow = new AppWindow({
      backgroundColor: "#002b36",
      file: config.pages.get("index"),
      icon: config.images.get("favicon"),
      webPreferences: {
        enableRemoteModule: true,
        nodeIntegration: true,
        spellcheck: true,
        worldSafeExecuteJavaScript: true
      }
    });

    if (process.env.NODE_ENV === "development") {
      this.mainWindow.webContents.on("did-frame-finish-load", () => {
        this.mainWindow.webContents.once("devtools-opened", () => this.mainWindow.focus());
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
  };
}

new Main();