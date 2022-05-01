import { app } from "electron";
import { join as j } from "path";
import os from "os";

// https://github.com/sindresorhus/file-url/blob/main/index.js
function fileUrl(path: string): string {
  let pathName = path.replace(/\\/g, '/');
	if (pathName[0] !== '/') {
		pathName = `/${pathName}`;
	}
	return encodeURI(`file://${pathName}`).replace(/[?#]/g, encodeURIComponent);
}

const base: string = app.getAppPath();
const images: Map<string, string> = new Map<string, string>();
images.set("favicon", j(base, "client", "favicon.ico"));
const view: string = j(base, "client");
const pages: Map<string, string> = new Map<string, string>();
pages.set("index", fileUrl(j(view, "index.html")));
pages.set("settings", fileUrl(j(view, "settings.html")));
pages.set("viewer", fileUrl(j(view, "viewer.html")));
pages.set("templates", fileUrl(j(view, "templates.html")));

export default {
  images: images,
  join: j,
  menu: j(base, "backend", "menu", `${os.platform()}.json`),
  pages: pages,
  view: view
};