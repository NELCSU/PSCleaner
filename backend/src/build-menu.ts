import { app, Menu, shell } from "electron";
import config from "./views";

export class AppMenu {
  #parent: any;
  
  public menu: Menu;

  /**
   * @param parent - reference to main process
   */
  constructor(parent: unknown) {
    this.#parent = parent;
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
            case "showHelp":
              s.click = () => this.showHelp(s.url);
              break;
            case "showLogs":
              s.click = () => this.showLogs();
              break;
            case "showTagViewer":
              s.click = () => this.showTagViewer();
              break;
            case "showSettings":
              s.click = () => this.showSettings();
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
    this.#parent.hardClose();
  }

  public showDevTools(): void {
    this.#parent.mainWindow.webContents.toggleDevTools();
  }

  public showHelp(url: string): void {
    shell.openExternal(url);
  }

  public showLogs(): void {
    let path: string;
    switch (process.platform) {
      case "darwin": path = `~/Library/Logs/${app.name}/`;
           break;
      case "win32": path = `${app.getPath("home")}\\AppData\\Roaming\\${app.name}\\logs\\`;
           break;
      default: path = `~/.config/${app.name}/logs/`;
        break;
    }
    shell.showItemInFolder(path);
  }

  public showSettings(): void {
    this.#parent.mainWindow.loadURL(config.pages.get("settings"));
  }

  public showTagViewer(): void {
    this.#parent.mainWindow.loadURL(config.pages.get("viewer"));
  }

  public showVersion(): string {
    return `${app.getName()} v${app.getVersion()} NEL`;
  }
}