import {
  App, app, ipcMain as ipc, IpcMainEvent, protocol
} from "electron";

import DB from "sqlite3-helper";

require("dotenv").config();
if (require("electron-squirrel-startup")) { // eslint-disable-line global-require
  app.quit();
}

import { AppMenu } from "./background/build-menu";
import { AppTray } from "./background/build-tray";
import { Settings } from "./background/settings";
import { Entities } from "./background/entities";
import { TrainingData } from "./background/training-data";
import { AppWindow } from "./background/window";
import { NLP } from "./background/nlp.js";
import fs from "fs";
import config from "./background/views";

class Main {
  public app: App;
  public entities: Entities;
  public isQuitting = false;
  public mainWindow: any;
  public menu: any;
  public samples: TrainingData;
  public settings: Settings;
  public tray: any;

  constructor() {
    this.app = app;
    const lock: boolean = this.app.requestSingleInstanceLock();

    protocol.registerSchemesAsPrivileged([{
      scheme: "es6",
      privileges: { standard: true, secure: true }
    }]);

    this.initDB();
      
    if (!lock) {
      this.app.quit();
    } else {
      this.app.on("second-instance", () => {
        if (this.mainWindow) {
          if (this.mainWindow.isMinimized()) {
            this.mainWindow.restore();
          }
          this.mainWindow.focus();
        }
      });
      this.app.once("ready", this.run);
      this.app.on("window-all-closed", () => {
        if (process.platform !== "darwin") {
          this.app.quit();
        }
      });
      this.app.on("activate", () => {
        if (this.mainWindow === null) {
          this.run();
        }
      });
    }
    
    this.settings = new Settings();
    this.samples = new TrainingData(this.settings.data.get("data"), this);

    const nlp: NLP = new NLP();

    this.entities = new Entities();
    
    ipc.on("NLP-request", async (e: IpcMainEvent, text: string) => {
      (async (t) => await nlp.evaluate(t))(text)
        .then(result => {
          this.mainWindow.webContents.send("NLP-response", result);
        });
    });   
  }

  public hardClose = () => {
    this.isQuitting = true;
    this.app.quit();
  }

  public hideWhenMinimised = (hide?: boolean | undefined) => {
    if (hide === undefined) {
      const state: boolean = this.settings.data.get("hideWhenMinimised") || false;
      return state;
    }
    this.mainWindow.hideWhenMinimised = hide;
    this.settings.data.set("hideWhenMinimised", hide);
  }

  public async initDB(): Promise<any> {
    return await DB().connection();
  }

  public show = () => this.mainWindow.show();

  public softClose = (event: Event) => {
    if(!this.isQuitting && this.mainWindow.hideWhenMinimised) {
      event.preventDefault();
      this.mainWindow.hide();
    }
  }

  public run = () => {
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

    this.mainWindow.hideWhenMinimised = this.hideWhenMinimised();

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