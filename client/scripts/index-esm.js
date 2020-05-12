"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var electron_1 = require("electron");
var util_esm_1 = require("./util-esm");
var importBadge = document.getElementById("statPending");
var processingBadge = document.getElementById("statProcessing");
var exportBadge = document.getElementById("statComplete");
var runButton = document.getElementById("btnProcessFiles");
var progressBar = document.getElementById("stProcessFiles");
var timeLabel = document.getElementById("lblTime");
var FILES_REQUIRED = "Click on QUEUED to view the import folder. CSV files are required.";
var importFiles = 0;
var processingFiles = 0;
var exportFiles = 0;
var running = false;
var timeStart = 0;
var timer;
function formatTime(start, end) {
    if (start === undefined) {
        start = Date.now();
    }
    if (end === undefined) {
        end = Date.now();
    }
    var raw = (end - start) / 1000;
    var ss = "0" + Math.floor(raw % 60);
    var mm = "0" + Math.floor(raw / 60);
    var hh = "0" + Math.floor(raw / 3600);
    return hh.slice(-2) + ":" + mm.slice(-2) + ":" + ss.slice(-2);
}
function setUpProgressBar() {
    progressBar.value = 0;
    progressBar.max = importFiles + processingFiles + exportFiles;
    progressBar.hidden = false;
}
function setUpTimer() {
    var tl = document.getElementById("listTemplate");
    runButton.textContent = "Stop";
    tl.classList.add("disabled");
    timeStart = Date.now();
    timeLabel.innerHTML = "starting " + formatTime(timeStart, Date.now());
    timer = setInterval(function () {
        timeLabel.innerHTML = "in progress " + formatTime(timeStart, Date.now());
    }, 1000);
}
function teardownProgressBar() {
    progressBar.max = 0;
    progressBar.hidden = true;
}
function teardownTimer(halt) {
    var tl = document.getElementById("listTemplate");
    clearInterval(timer);
    if (processingFiles > 0 && !halt) {
        runButton.classList.add("disabled");
        runButton.textContent = "Stopping";
        timer = setInterval(function () {
            timeLabel.innerHTML = "Stopping " + formatTime(timeStart, Date.now());
            teardownTimer(halt);
        }, 1000);
    }
    else {
        runButton.classList.remove("disabled");
        tl.classList.remove("disabled");
        runButton.textContent = "Start";
        timeLabel.innerHTML = "Run completed " + formatTime(timeStart, Date.now());
    }
}
function toggleRun(halt) {
    if (halt === void 0) { halt = false; }
    running = !running;
    running ? setUpTimer() : teardownTimer(halt);
    if (running) {
        if (importFiles > 0 || processingFiles > 0) {
            setUpProgressBar();
            if (processingFiles > 0) {
                electron_1.ipcRenderer.send("start-processing");
            }
            else {
                electron_1.ipcRenderer.send("start-import");
            }
        }
        else {
            running = false;
            teardownProgressBar();
            teardownTimer(halt);
            util_esm_1.showError(FILES_REQUIRED);
        }
    }
    else {
        teardownProgressBar();
        teardownTimer(halt);
    }
}
function startImport() {
    if (processingFiles === 0) {
        if (importFiles === 0) {
            toggleRun();
        }
        else {
            electron_1.ipcRenderer.send("start-import");
        }
    }
    else if (processingFiles > 0) {
        setTimeout(startImport, 500);
    }
    else {
        toggleRun();
    }
}
function selectTemplate() {
    var tl = document.getElementById("listTemplate");
    if (tl.selectedIndex > 0) {
        electron_1.ipcRenderer.send("get-template-file", tl.options[tl.selectedIndex].text);
        runButton.classList.remove("disabled");
    }
    else {
        electron_1.ipcRenderer.send("clear-template-file");
        runButton.classList.add("disabled");
    }
}
runButton.addEventListener("click", function (_) { return toggleRun(); });
document.getElementById("listTemplate").addEventListener("change", selectTemplate);
importBadge.addEventListener("click", function (_) { return electron_1.ipcRenderer.send("get-import-folder"); });
processingBadge.addEventListener("click", function (_) { return electron_1.ipcRenderer.send("get-processing-folder"); });
exportBadge.addEventListener("click", function (_) { return electron_1.ipcRenderer.send("get-export-folder"); });
electron_1.ipcRenderer.on("import-folder", function (_, path) { return electron_1.shell.openItem(path); });
electron_1.ipcRenderer.on("processing-folder", function (_, path) { return electron_1.shell.openItem(path); });
electron_1.ipcRenderer.on("export-folder", function (_, path) { return electron_1.shell.openItem(path); });
electron_1.ipcRenderer.send("import-file-count");
electron_1.ipcRenderer.on("import-file-count", function (_, data) {
    importFiles = data;
    importBadge.textContent = importFiles + "";
});
electron_1.ipcRenderer.send("processing-file-count");
electron_1.ipcRenderer.on("processing-file-count", function (_, data) {
    processingFiles = data;
    processingBadge.textContent = processingFiles + "";
    if (running && processingFiles > 0) {
        electron_1.ipcRenderer.send("start-processing");
    }
});
electron_1.ipcRenderer.send("export-file-count");
electron_1.ipcRenderer.on("export-file-count", function (_, data) {
    exportFiles = data;
    exportBadge.textContent = exportFiles + "";
    if (running) {
        progressBar.value = exportFiles;
        startImport();
    }
});
electron_1.ipcRenderer.send("get-template-files");
electron_1.ipcRenderer.on("template-files", function (e, files) {
    var tl = document.getElementById("listTemplate");
    Array.from(tl.options)
        .forEach(function (option, i) {
        if (i > 0) {
            tl.removeChild(option);
        }
    });
    files.forEach(function (file, i) {
        var option = document.createElement("option");
        option.value = file;
        option.text = file.replace(/\.json/, "");
        tl.appendChild(option);
    });
});
electron_1.ipcRenderer.on("import-folder-error", function (_, err) { return util_esm_1.showError("An error occurred with the import folder " + err); });
electron_1.ipcRenderer.on("processing-folder-error", function (_, err) {
    util_esm_1.showError(err);
    if (running) {
        toggleRun(true);
    }
});
electron_1.ipcRenderer.on("export-folder-error", function (_, err) { return util_esm_1.showError("An error occurred with the export folder: " + err); });
