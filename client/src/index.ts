import { ipcRenderer as ipc, shell } from "electron";
import { showError } from "./util";

const importBadge = document.getElementById("statPending") as HTMLElement;
const processingBadge = document.getElementById("statProcessing") as HTMLElement;
const exportBadge = document.getElementById("statComplete") as HTMLElement;
const runButton = document.getElementById("btnProcessFiles") as HTMLButtonElement;
const progressBar = document.getElementById("stProcessFiles") as HTMLProgressElement;
const timeLabel = document.getElementById("lblTime") as HTMLLabelElement;
const FILES_REQUIRED = "Click on QUEUED to view the import folder. CSV files are required.";
let importFiles = 0;
let processingFiles = 0;
let exportFiles = 0;
let running = false;
let timeStart = 0;
let timer: any;

/**
 * Displays timestamp as hh:mm:ss
 * @param start - milliseconds
 * @param end - milliseconds
 */
function formatTime(start?: number, end?: number) {
  if (start === undefined) {
    start = Date.now();
  }
  if (end === undefined) {
    end = Date.now();
  }
  const raw = (end - start) / 1000;
  const ss = `0${Math.floor(raw % 60)}`;
  const mm = `0${Math.floor(raw / 60)}`;
  const hh = `0${Math.floor(raw / 3600)}`;
  return `${hh.slice(-2)}:${mm.slice(-2)}:${ss.slice(-2)}`;
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
  const tl = document.getElementById("listTemplate") as HTMLSelectElement;
  runButton.textContent = "Stop";
  tl.classList.add("disabled");
  timeStart = Date.now();
  timeLabel.innerHTML = "starting " + formatTime(timeStart, Date.now());
  timer = setInterval(() => {
    timeLabel.innerHTML = "in progress " + formatTime(timeStart, Date.now());
  }, 1000);
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
 * @param halt - stop timer immediately if true
 */
function teardownTimer(halt: boolean): void {
  const tl = document.getElementById("listTemplate") as HTMLSelectElement;
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
    tl.classList.remove("disabled");
    runButton.textContent = "Start";
    timeLabel.innerHTML = "Run completed " + formatTime(timeStart, Date.now());
  }
}

/**
 * Starts/stops processing
 * @param halt - stop timer and processing immediately if true
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
  const tl = document.getElementById("listTemplate") as HTMLSelectElement;
  if (tl.selectedIndex > 0) {
    ipc.send("get-template-file", tl.options[tl.selectedIndex].text);
    runButton.classList.remove("disabled");
  } else {
    ipc.send("clear-template-file");
    runButton.classList.add("disabled");
  }
}

runButton.addEventListener("click", _ => toggleRun());
(document.getElementById("listTemplate") as HTMLSelectElement).addEventListener("change", selectTemplate);

//** opens explorer view for each folder via badge click
importBadge.addEventListener("click", _ => ipc.send("get-import-folder"));
processingBadge.addEventListener("click", _ => ipc.send("get-processing-folder"));
exportBadge.addEventListener("click", _ => ipc.send("get-export-folder"));
ipc.on("import-folder", (_: any, path: string) => shell.openPath(path));
ipc.on("processing-folder", (_: any, path: string) => shell.openPath(path));
ipc.on("export-folder", (_: any, path: string) => shell.openPath(path));

//** initialisation of badge counts
ipc.send("import-file-count");
ipc.on("import-file-count", (_: any, data: number) => {
  importFiles = data;
  importBadge.textContent = importFiles + "";
});
ipc.send("processing-file-count");
ipc.on("processing-file-count", (_: any, data: number) => {
  processingFiles = data;
  processingBadge.textContent = processingFiles + "";
  if (running && processingFiles > 0) {
    ipc.send("start-processing");
  }
});
ipc.send("export-file-count");
ipc.on("export-file-count", (_: any, data: number) => {
  exportFiles = data;
  exportBadge.textContent = exportFiles + "";
  if (running) {
    progressBar.value = exportFiles;
    startImport();
  }
});

ipc.send("get-template-files");
ipc.on("template-files", (_: any, files: string[]) => {
  const tl = document.getElementById("listTemplate") as HTMLSelectElement;
  Array.from(tl.options as HTMLOptionsCollection)
    .forEach((option, i) => {
      if (i > 0) {
        tl.removeChild(option);
      }
    });
  files.forEach((file: string) => {
    const option = document.createElement("option");
    option.value = file;
    option.text = file.replace(/\.json/, "");
    tl.appendChild(option);
  });
});

//** Error handling
ipc.on("import-folder-error", (_: any, err: string) => showError(`An error occurred with the import folder ${err}`));
ipc.on("processing-folder-error", (_: any, err: string) => {
  showError(err);
  if (running) {
    toggleRun(true);
  }
});
ipc.on("export-folder-error", (_: any, err: string) => showError(`An error occurred with the export folder: ${err}`));