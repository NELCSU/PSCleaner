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
const templateList = one("#listTemplate");
const messageDelay = 3000;
const FILES_REQUIRED = "Click on QUEUED to view the import folder. CSV files are required.";
let importFiles = 0;
let processingFiles = 0;
let exportFiles = 0;
let running = false;
let timeStart, timeEnd = new Date(null), timer;

/**
 * Displays timestamp as hh:mm:ss
 * @param {number?} start - milliseconds
 * @param {number?} end - milliseconds
 */
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

/**
 * Starts progress bar
 */
function setUpProgressBar() {
  progressBar.value = 0;
  progressBar.max = importFiles + processingFiles + exportFiles;
  progressBar.hidden = false;
}

/**
 * Starts timer
 */
function setUpTimer() {
  runButton.textContent = "Stop";
  templateList.classList.add("disabled");
  timeStart = Date.now();
  timeEnd = new Date(null);
  timeLabel.innerHTML = "starting " + formatTime(timeStart, Date.now());
  timer = setInterval(() => {
    timeLabel.innerHTML = "in progress " + formatTime(timeStart, Date.now());
  }, 1000);
}

/**
 * Displays error message to user
 * @param {string} msg - message to display
 */
function showError(msg) {
  console.log(msg);
  modalMessage.innerHTML = msg;
  modalView.open = true;
  setTimeout(() => modalView.open = false, messageDelay);
}

/**
 * Shuts down progress bar
 */
function teardownProgressBar() {
  progressBar.max = 0;
  progressBar.hidden = true;
}

/**
 * Shuts down timer
 * @param {boolean} halt - stop timer immediately if true
 */
function teardownTimer(halt) {
  clearInterval(timer);
  if (processingFiles > 0 && !halt) {
    runButton.classList.add("disabled");
    runButton.textContent = "Stopping";
    timer = setInterval(() => {
      timeLabel.innerHTML = "Stopping " + formatTime(timeStart, Date.now());
      teardownTimer(halt);
    }, 1000);
  } else {
    runButton.classList.remove("disabled");
    templateList.classList.remove("disabled");
    runButton.textContent = "Start";
    timeLabel.innerHTML = "Run completed " + formatTime(timeStart, Date.now());
  }
}

/**
 * Starts/stops processing
 * @param {boolean} halt - stop timer and processing immediately if true
 */
function toggleRun(halt = false) {
  running = !running;
  running ? setUpTimer() : teardownTimer(halt);
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
      teardownTimer(halt);
      showError(FILES_REQUIRED);
    }
  } else {
    teardownProgressBar();
    teardownTimer(halt);
  }
}

/**
 * Checks file counts and resumes import
 */
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

function selectTemplate() {
  if (templateList.selectedIndex > 0) {
    ipc.send("get-template-file", templateList.options[templateList.selectedIndex].text);
    runButton.classList.remove("disabled");
  } else {
    ipc.send("clear-template-file");
    runButton.classList.add("disabled");
  }
}

runButton.addEventListener("click", _ => toggleRun());
templateList.addEventListener("change", selectTemplate);

//** opens explorer view for each folder via badge click
importBadge.addEventListener("click", _ => ipc.send("get-import-folder"));
processingBadge.addEventListener("click", _ => ipc.send("get-processing-folder"));
exportBadge.addEventListener("click", _ => ipc.send("get-export-folder"));
ipc.on("import-folder", (_, path) => shell.openItem(path));
ipc.on("processing-folder", (_, path) => shell.openItem(path));
ipc.on("export-folder", (_, path) => shell.openItem(path));

//** initialisation of badge counts
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

ipc.send("get-template-files");
ipc.on("template-files", (e, files) => {
  Array.from(templateList.options)
    .forEach((option, i) => {
      if (i > 0){
        templateList.removeChild(option);
      }
    });
  files.forEach((file, i) => {
    const option = document.createElement("option");
    option.value = file;
    option.text = file.replace(/\.json/, "");
    templateList.appendChild(option);
  });
});

//** Error handling
ipc.on("import-folder-error", (_, err) => showError(`An error occurred with the import folder ${err}`));
ipc.on("processing-folder-error", (_, err) => {
  showError(err);
  if (running) {
    toggleRun(true);
  }
});
ipc.on("export-folder-error", (_, err) => showError(`An error occurred with the export folder: ${err}`));