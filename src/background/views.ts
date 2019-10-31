import { app } from "electron";
import { join as j }  from "path";
import fileUrl from "file-url";
import os from "os";

const base: string = app.getAppPath();
const images: Map<string, string> = new Map<string, string>();
images.set("favicon", j(base, "static", "favicon.ico"));
const view: string = j(base, "static");
const pages: Map<string, string> = new Map<string, string>();
pages.set("entities", fileUrl(j(view, "entities.html")));
pages.set("index", fileUrl(j(view, "index.html")));
pages.set("settings", fileUrl(j(view, "settings.html")));
pages.set("training", fileUrl(j(view, "training.html")));
pages.set("templates", fileUrl(j(view, "templates.html")));

export default {
  images: images,
  join: j,
  menu: j(base, "static", "menu", `${os.platform()}.json`),
  pages: pages,
  view: view
}