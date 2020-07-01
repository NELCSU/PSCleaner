import * as windowStateKeeper from "electron-window-state";
import { BrowserWindow, Point, screen } from "electron";
import * as Store from "electron-store";

const windowDefault: any = {
  show: false,
  backgroundColor: "#fff",
  webPreferences: {
    nodeIntegration: true
  }
};

/**
 * ### Manages creation of browser window
 */
export class AppWindow extends BrowserWindow {
  #wsk: any;

  public data: any;
  public get hideWhenMinimised(): boolean {
    let state: boolean = this.data.get("hideWhenMinimised");
    if (state === undefined) {
      this.data.set("hideWhenMinimised", false);
      state = false;
    }
    return state;
  }
  public set hideWhenMinimised(value: boolean) {
    this.data.set("hideWhenMinimised", value);
  }

  constructor({ file, ...windowSettings }: any) {
    super({ ...windowDefault, ...windowSettings });

    this.data = new Store({ name: "appSettings" });

    const cursorPos: Point = screen.getCursorScreenPoint();
    const { width, height } = screen.getDisplayNearestPoint(cursorPos).workAreaSize;

    this.#wsk = windowStateKeeper({
      defaultWidth: width,
      defaultHeight: height
    });

    this.setBounds({
      x: this.#wsk.x || 0,
      y: this.#wsk.y || 0,
      width: this.#wsk.width,
      height: this.#wsk.height
    });

    this.loadURL(file);

    this.once("show", () => console.log("Application is ready to render"));
    this.once("ready-to-show", () => this.show());
    this.webContents.on("crashed", (e: Event) => console.log(e));
    this.on("unresponsive", (e: Event) => console.log(e));

    this.#wsk.manage(this);
  }
}