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
let started = false;
let processing = false;

/**
 * Update the file counts in each badge
 */
async function updateUI() {
  importBadge.textContent = importFiles;
  processingBadge.textContent = processingFiles;
  exportBadge.textContent = exportFiles;
  runButton.hidden = started || (!started && processing) ? true : importFiles === 0; 
  runButton.textContent = started ? "Cancel" : "Start processing";
  progressBar.hidden = !started && !processing;
  progressBar.max = importFiles + processingFiles + exportFiles;
  progressBar.value = processingFiles + exportFiles;
}

ipc.on("stop-import", () => {
  started = false;
  ipc.send("get-file-counts");
});

ipc.on("stop-processing", () => {
  processing = false;
  updateUI();
})

ipc.on("imported", () => {
  updateUI();
  processing = true;
  ipc.send("start-processing");  
});

ipc.on("processed", () => {
  processing = false;
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
  started = true;
  updateUI();
  if (started) {
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