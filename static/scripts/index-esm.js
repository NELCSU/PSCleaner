import { ipcRenderer as ipc, shell } from "electron";
import { one } from "@buckneri/js-lib-dom-selection";

const importing = one("#statPending");
const processing = one("#statProcessing");
const exporting = one("#statComplete");
const btnProcessing = one("#btnProcessFiles")

function updateCounts(data) {
  importing.textContent = data.import;
  importing.dataset.count = data.import;
  processing.textContent = data.processing;
  processing.dataset.count = data.processing;
  exporting.textContent = data.export;
  exporting.dataset.count = data.export;  
}

function setProcessingButtonLabel() {
  btnProcessing.disabled = importing.dataset.count === "0"
    ? true
    : btnProcessing.dataset.status === "cancelling"
      ? true
      : false; 
  btnProcessing.textContent = btnProcessing.dataset.status === "active"
    ? "Cancel"
    : "Start processing";
}

ipc.on("file-counts", (e, data) => {
  updateCounts(data);
  if (data.processing === 0 && data.import === 0 ) {
    btnProcessing.dataset.status = "inactive";
  } else if (btnProcessing.dataset.status === "active" && data.import > 0) {
    ipc.send("get-import-file");
  }   
  setProcessingButtonLabel();
});

ipc.send("get-file-counts");

importing.addEventListener("click", () => ipc.send("get-import-folder"));
processing.addEventListener("click", () => ipc.send("get-processing-folder"));
exporting.addEventListener("click", () => ipc.send("get-export-folder"));

btnProcessing.addEventListener("click", () => {
  if (btnProcessing.dataset.status === "active") {
    btnProcessing.dataset.status = "cancelling";
  } else if (btnProcessing.dataset.status === "inactive") {
    btnProcessing.dataset.status = "active";
  }
  setProcessingButtonLabel();
  if (btnProcessing.dataset.status === "active") {
    ipc.send("get-import-file");
  }
});

ipc.on("import-folder", (e, path) => shell.openItem(path));
ipc.on("processing-folder", (e, path) => shell.openItem(path));
ipc.on("export-folder", (e, path) => shell.openItem(path));