import { ipcRenderer as ipc, shell } from "electron";
import { one } from "@buckneri/js-lib-dom-selection";

const pending = one("#statPending");
const processing = one("#statProcessing");
const complete = one("#statComplete");
const processFiles = one("#btnProcessFiles")

function updateCount(process, n) {
  if (process === "import") {
    pending.textContent = n;
  } else {
    complete.textContent = n;
  }
}

ipc.on("import-file-count", (e, count) => updateCount("import", count));
ipc.on("processing-file-count", (e, count) => updateCount("processing", count));
ipc.on("export-file-count", (e, count) => updateCount("export", count));

ipc.send("get-import-file-count");
ipc.send("get-processing-file-count");
ipc.send("get-export-file-count");

pending.addEventListener("click", () => {
  ipc.send("get-import-folder");
  ipc.on("import-folder", (e, path) => {
    shell.openItem(path);
  });
});

complete.addEventListener("click", () => {
  ipc.send("get-export-folder");
  ipc.on("export-folder", (e, path) => {
    shell.openItem(path);
  });
});

processing.addEventListener("click", () => {
  ipc.send("get-processing-folder");
  ipc.on("processing-folder", (e, path) => {
    shell.openItem(path);
  });
});

processFiles.addEventListener("click", () => {
  ipc.send("start-import");
  processFiles.disabled = true;
  ipc.on("end-import", () => {
    processFiles.disabled = false;
  });
});