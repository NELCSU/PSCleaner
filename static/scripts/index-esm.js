import { ipcRenderer as ipc, shell } from "electron";
import { one } from "@buckneri/js-lib-dom-selection";

const importBadge = one("#statPending");
const processingBadge = one("#statProcessing");
const exportBadge = one("#statComplete");
const modalView = one("#modalView");
const modalMessage = one(".modal-message");
const runButton = one("#btnProcessFiles");
const progressBar = one("#stProcessFiles");
const timeLabel = one("#lblTime");
const messageDelay = 3000;
const FILES_REQUIRED = "Click on QUEUED to view the import folder. CSV files are required.";
let importFiles = 0;
let processingFiles = 0;
let exportFiles = 0;
let running = false;
let timeStart, timeEnd = new Date(null), timer;

function formatTime(start, end) {
  if (start === null) {
    start = Date.now();
  }
  if (end === null) {
    end = Date.now();
  }
  timeEnd.setSeconds((end - start) / 1000);
  return timeEnd.toISOString().substr(11, 8);
}

function setUpProgressBar() {
  progressBar.value = 0;
  progressBar.max = importFiles + processingFiles + exportFiles;
  progressBar.hidden = false;
}

function setUpTimer() {
  runButton.textContent = "Stop";
  timeStart = Date.now();
  timeLabel.innerHTML = "starting " + formatTime(timeStart, Date.now());
  timer = setInterval(() => {
    timeLabel.innerHTML = "in progress " + formatTime(timeStart, Date.now());
  }, 1000);
}

function showError(msg) {
  console.log(msg);
  modalMessage.innerHTML = msg;
  modalView.open = true;
  setTimeout(() => modalView.open = false, messageDelay);
}

function teardownProgressBar() {
  progressBar.max = 0;
  progressBar.hidden = true;
}

function teardownTimer() {
  clearInterval(timer);
  if (processingFiles > 0) {
    runButton.disabled = true;
    runButton.textContent = "Stopping";
    timer = setInterval(() => {
      timeLabel.innerHTML = "Stopping " + formatTime(timeStart, Date.now());
      teardownTimer();
    }, 1000);
  } else {
    runButton.disabled = false;
    runButton.textContent = "Start";
    timeLabel.innerHTML = "Run completed " + formatTime(timeStart, Date.now());
  }
}

function toggleRun() {
  running = !running;
  running ? setUpTimer() : teardownTimer();
  if (running) {
    if (importFiles > 0 || processingFiles > 0) {
      setUpProgressBar();
      if (processingFiles > 0) {
        ipc.send("start-processing");
      } else {
        ipc.send("start-import");
      }
    } else {
      running = false;
      teardownProgressBar();
      teardownTimer();
      showError(FILES_REQUIRED);
    }
  } else {
    teardownProgressBar();
    teardownTimer();
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
ipc.on("import-folder-error", (_, err) => showError(`An error occurred with the import folder ${err}`));
ipc.on("processing-folder-error", (_, err) => showError(`An error occurred with the processing folder ${err}`));
ipc.on("export-folder-error", (_, err) => showError(`An error occurred with the export folder ${err}`));