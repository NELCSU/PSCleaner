import { app, Menu, Tray } from "electron";
import config from "./views";

export class AppTray {
  public tray: Tray;

  constructor(parent: any) {
    const menu: Menu = Menu.buildFromTemplate([
      { click: () => parent.show(), label: `Open ${app.getName()}` },
      {
        checked: parent.hideWhenMinimised(),
        click: item => parent.hideWhenMinimised(item.checked),
        label: "Hide When Minimized",
        type: "checkbox"
      },
      { type: "separator" },
      { click: () => parent.hardClose(), label: "Quit" }
    ]);

    const imagePath: string = config.images.get("favicon") || "";
    this.tray = new Tray(imagePath);
    this.tray.setToolTip(`Click to view options for ${app.getName()}`);
    this.tray.setContextMenu(menu);
    this.tray.on("click", () => parent.show());
  }
}