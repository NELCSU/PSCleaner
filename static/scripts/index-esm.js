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

function setUpProgressBar() {
  progressBar.value = 0;
  progressBar.max = importFiles + processingFiles + exportFiles;
  progressBar.hidden = false;
}

function teardownProgressBar() {
  progressBar.max = 0;
  progressBar.hidden = true;
}

function toggleRun() {
  running = !running;
  if (running && (importFiles > 0 || processingFiles > 0)) {
    runButton.textContent = "Stop";
    setUpProgressBar();
    if (processingFiles > 0) {
      ipc.send("start-processing");
    } else {
      ipc.send("start-import");
    }
  } else {
    runButton.textContent = "Start";
    teardownProgressBar();
  }
}

function startImport() {
  if (processingFiles === 0) {
    if (importFiles === 0) {
      toggleRun();
    } else {
      ipc.send("start-import");
    }
  } else if (processingFiles > 0) {
    setTimeout(startImport, 500);
  } else {
    toggleRun();
  }
}

runButton.addEventListener("click", toggleRun);

//*** opens explorer view for each folder via badge click
importBadge.addEventListener("click", _ => ipc.send("get-import-folder"));
processingBadge.addEventListener("click", _ => ipc.send("get-processing-folder"));
exportBadge.addEventListener("click", _ => ipc.send("get-export-folder"));
ipc.on("import-folder", (_, path) => shell.openItem(path));
ipc.on("processing-folder", (_, path) => shell.openItem(path));
ipc.on("export-folder", (_, path) => shell.openItem(path));

//*** initialisation of badge counts
ipc.send("import-file-count");
ipc.on("import-file-count", (_, data) => {
  importFiles = data;
  importBadge.textContent = importFiles;
});
ipc.send("processing-file-count");
ipc.on("processing-file-count", (_, data) => {
  processingFiles = data;
  processingBadge.textContent = processingFiles;
  if (running && processingFiles > 0) {
    ipc.send("start-processing");
  }
});
ipc.send("export-file-count");
ipc.on("export-file-count", (_, data) => {
  exportFiles = data;
  exportBadge.textContent = exportFiles;
  if (running) {
    progressBar.value = exportFiles;
    startImport();
  }
});

//*** Error handling
ipc.on("import-folder-error", (_, err) => {
  console.log(`An error occurred with the import folder ${err}`);
});
ipc.on("processing-folder-error", (_, err) => {
  console.log(`An error occurred with the processing folder ${err}`);
});
ipc.on("export-folder-error", (_, err) => {
  console.log(`An error occurred with the export folder ${err}`);
});