import { ipcRenderer as ipc, shell } from "electron";
import { one } from "@buckneri/js-lib-dom-selection";

const pending = one("#statPending");
const complete = one("#statComplete");

function updateCount(process, n) {
  if (process === "import") {
    pending.textContent = n;
  } else {
    complete.textContent = n;
  }
}

ipc.on("import-file-count", (e, count) => updateCount("import", count));
ipc.on("export-file-count", (e, count) => updateCount("export", count));
ipc.send("get-import-file-count");
ipc.send("get-export-file-count");

pending.addEventListener("click", function() {
  ipc.send("get-import-folder");
  ipc.on("import-folder", (e, path) => {
    shell.openItem(path);
  });
});

complete.addEventListener("click", function() {
  ipc.send("get-export-folder");
  ipc.on("export-folder", (e, path) => {
    shell.openItem(path);
  });
});