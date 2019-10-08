import { app, Menu } from "electron";
import config from "./views";

export class AppMenu {
  private _parent: any;
  
  public menu: Menu;

  /**
   * @constructor
   * @param parent - reference to main process
   */
  constructor(parent: any) {
    this._parent = parent;
    const def: any = require(config.menu);
    def.menu.forEach((menu: any) => {
      if (menu.submenu) {
        const sub: any[] = menu.submenu;
        sub.forEach((s: any) => {
          if (s.label === "version") {
            s.label = this.showVersion();
          }
          switch (s.click) {
            case "showDevTools":
              s.click = () => this.showDevTools();
              break;
            case "showEntities":
              s.click = () => this.showEntities();
              break;
            case "showTrainingData":
              s.click = () => this.showTrainingData();
              break;
            case "showPreferences":
              s.click = () => this.showPreferences();
              break;
            case "close":
              s.click = () => this.close(); 
              break;
          }
        });
      }
    });
    this.menu = Menu.buildFromTemplate(def.menu);
    Menu.setApplicationMenu(this.menu);
  }

  public close(): void {
    this._parent.hardClose();
  }

  public showDevTools(): void {
    this._parent.mainWindow.webContents.toggleDevTools();
  }

  public showEntities(): void {
    this._parent.mainWindow.loadURL(config.pages.get("entities"));
  }

  public showPreferences(): void {
    this._parent.mainWindow.loadURL(config.pages.get("preferences"));
  }

  public showTrainingData(): void {
    this._parent.mainWindow.loadURL(config.pages.get("training"));
  }

  public showVersion(): string {
    return `${app.getName()} v${app.getVersion()} NEL`;
  }
}