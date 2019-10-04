import windowStateKeeper from "electron-window-state";
import { BrowserWindow, Point, screen } from "electron";

const windowDefault: any = {
  show: false,
  backgroundColor: "#fff",
  webPreferences: {
    nodeIntegration: true
  }
};

export class AppWindow extends BrowserWindow {
  private _wsk: any;
  public hideWhenMinimised: boolean = false;

  constructor({ file, ...windowSettings }: any) {
    super({ ...windowDefault, ...windowSettings });

    const cursorPos: Point = screen.getCursorScreenPoint();
    const { width, height } = screen.getDisplayNearestPoint(cursorPos).workAreaSize;

    this._wsk = windowStateKeeper({
      defaultWidth: width,
      defaultHeight: height
    });

    this.setBounds({
      x: this._wsk.x || 0,
      y: this._wsk.y || 0,
      width: this._wsk.width,
      height: this._wsk.height
    });

    this.loadURL(file);

    this.once("show", () => console.log("Application is ready to render"));
    this.once("ready-to-show", () => this.show());
    this.webContents.on("crashed", (e: Event) => console.log(e));
    this.on("unresponsive", (e: Event) => console.log(e));

    this._wsk.manage(this);
  }
}