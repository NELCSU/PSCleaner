import { ipcRenderer as ipc, shell } from "electron";
import { one } from "@buckneri/js-lib-dom-selection";

const importBadge = one("#statPending");
const processingBadge = one("#statProcessing");
const exportBadge = one("#statComplete");
const runButton = one("#btnProcessFiles");
const progressBar = one("#stProcessFiles");
let importFiles = 0;
let processingFiles = 0;
let exportFiles = 0;
let running = false;

/**
 * Update the file counts in each badge
 */
async function updateUI() {
  importBadge.textContent = importFiles;
  processingBadge.textContent = processingFiles;
  exportBadge.textContent = exportFiles;
  runButton.disabled = !running && importFiles > 0 ? false : !running; 
  runButton.textContent = running ? "Cancel" : "Start processing";
  progressBar.hidden = !running;
  progressBar.max = importFiles + processingFiles + exportFiles;
  progressBar.value = processingFiles + exportFiles;
}

ipc.on("stop-import", () => {
  running = false;
  ipc.send("get-file-counts");
});

ipc.on("imported", () => {
  updateUI();
  ipc.send("start-processing");  
});

ipc.on("processed", () => {
  updateUI();
  ipc.send("start-import");
});

ipc.on("export-file-count", (e, data) => {
  exportFiles = data;
  updateUI();
});

ipc.on("processing-file-count", (e, data) => {
  processingFiles = data;
  updateUI();
});

ipc.on("import-file-count", (e, data) => {
  importFiles = data;
  updateUI();
});

runButton.addEventListener("click", () => {
  running = !running;
  updateUI();
  if (running) {
    ipc.send("start-import");
  }
});

ipc.send("import-file-count");
ipc.send("processing-file-count");
ipc.send("export-file-count");

// opens explorer view for each folder via badge click
importBadge.addEventListener("click", () => ipc.send("get-import-folder"));
processingBadge.addEventListener("click", () => ipc.send("get-processing-folder"));
exportBadge.addEventListener("click", () => ipc.send("get-export-folder"));
ipc.on("import-folder", (e, path) => shell.openItem(path));
ipc.on("processing-folder", (e, path) => shell.openItem(path));
ipc.on("export-folder", (e, path) => shell.openItem(path));