import { app, Menu, Tray } from "electron";
import config from "./views";

export class AppTray {
  public tray: Tray;

  /**
   * @param parent - reference to main process
   */
  constructor(parent: any) {
    const menu: Menu = Menu.buildFromTemplate([
      { click: _ => parent.show(), label: `Open ${app.getName()}` },
      {
        checked: parent.mainWindow.hideWhenMinimised,
        click: item => parent.mainWindow.hideWhenMinimised = item.checked,
        label: "Hide When Minimized",
        type: "checkbox"
      },
      { type: "separator" },
      { click: _ => parent.hardClose(), label: "Quit" }
    ]);

    const imagePath = config.images.get("favicon") ?? "";
    this.tray = new Tray(imagePath);
    this.tray.setToolTip(`Click to view options for ${app.getName()}`);
    this.tray.setContextMenu(menu);
    this.tray.on("click", _ => parent.show());
  }
}