import { ipcRenderer as ipc, remote } from "electron";
import { one } from "@buckneri/js-lib-dom-selection";

let importFolder = "", processingFolder = "";
let exportFolder = "", templateFolder = "", trainingFolder = "";
const modalView = one("#modalView");
const modalMessage = one(".modal-message");
const dialogOptions = {
  title: "Select a folder",
  buttonLabel: "Select folder",
  defaultPath: null,
  properties: ["createDirectory", "openDirectory", "promptToCreate"],
}
const messageDelay = 3000;
const PATH_COLLISION = "Error changing folders. Please check that each folder has a unique name.";

function showError(msg) {
  console.log(msg);
  modalMessage.innerHTML = msg;
  modalView.open = true;
  setTimeout(() => modalView.open = false, messageDelay);
}

(function ChooseImportFolder() {
  const browse = one("#btnImportSelection");
  const label = one("#lblImportFilePath");

  browse.addEventListener("click", _ => {
    dialogOptions.defaultPath = importFolder;
    remote.dialog.showOpenDialog(null, dialogOptions)
      .then(f => {
        if (f.filePaths.length > 0) {
          if (f.filePaths[0] !== processingFolder && f.filePaths[0] !== exportFolder && f.filePaths[0] !== trainingFolder) {
            importFolder = f.filePaths[0];
            label.textContent = importFolder ? importFolder : "Not specified";
            if (importFolder) {
              ipc.send("set-import-folder", importFolder);
            }
          } else {
            showError(PATH_COLLISION);
          }
        }
      })
      .catch(err => showError(err));
  });

  ipc.on("import-folder", (_, path) => {
    importFolder = path;
    label.textContent = importFolder ? importFolder : "Not specified";
  });

  ipc.send("get-import-folder");
})();

(function ChooseProcessingFolder() {
  const browse = one("#btnProcessingSelection");
  const label = one("#lblProcessingFilePath");

  browse.addEventListener("click", _ => {
    dialogOptions.defaultPath = processingFolder;
    remote.dialog.showOpenDialog(null, dialogOptions)
      .then(f => {
        if (f.filePaths.length > 0) {
          if (f.filePaths[0] !== importFolder && f.filePaths[0] !== exportFolder && f.filePaths[0] !== trainingFolder) {
            processingFolder = f.filePaths[0];
            label.textContent = processingFolder ? processingFolder : "Not specified";
            if (processingFolder) {
              ipc.send("set-processing-folder", processingFolder);
            }
          } else {
            showError(PATH_COLLISION);
          }
        }
      })
      .catch(err => showError(err));
  });

  ipc.on("processing-folder", (_, path) => {
    processingFolder = path;
    label.textContent = processingFolder ? processingFolder : "Not specified";
  });

  ipc.send("get-processing-folder");
})();

(function ChooseExportFolder() {
  const browse = one("#btnExportSelection");
  const label = one("#lblExportFilePath");

  browse.addEventListener("click", _ => {
    dialogOptions.defaultPath = exportFolder;
    remote.dialog.showOpenDialog(null, dialogOptions)
      .then(f => {
        if (f.filePaths.length > 0) {
          if (f.filePaths[0] !== importFolder && f.filePaths[0] !== processingFolder && f.filePaths[0] !== trainingFolder) {
            exportFolder = f.filePaths[0];
            label.textContent = exportFolder ? exportFolder : "Not specified";
            if (exportFolder) {
              ipc.send("set-export-folder", exportFolder);
            }
          } else {
            showError(PATH_COLLISION);
          }
        }
      })
      .catch(err => showError(err));
  });

  ipc.on("export-folder", (_, path) => {
    exportFolder = path;
    label.textContent = exportFolder ? exportFolder : "Not specified";
  });

  ipc.send("get-export-folder");
})();

(function ChooseTemplateFolder() {
  const browse = one("#btnTemplateSelection");
  const label = one("#lblTemplateFilePath");

  browse.addEventListener("click", _ => {
    dialogOptions.defaultPath = templateFolder;
    remote.dialog.showOpenDialog(null, dialogOptions)
      .then(f => {
        if (f.filePaths.length > 0) {
          if (f.filePaths[0] !== importFolder && f.filePaths[0] !== processingFolder && f.filePaths[0] !== exportFolder) {
            templateFolder = f.filePaths[0];
            label.textContent = templateFolder ? templateFolder : "Not specified";
            if (templateFolder) {
              ipc.send("set-template-folder", templateFolder);
            }
          } else {
            showError(PATH_COLLISION);
          }
        }
      })
      .catch(err => showError(err));
  });

  ipc.on("template-folder", (_, path) => {
    templateFolder = path;
    label.textContent = templateFolder ? templateFolder : "Not specified";
  });

  ipc.send("get-template-folder");
})();

(function ChooseTrainingDataFolder() {
  const browse = one("#btnTrainingDataSelection");
  const label = one("#lblTrainingFilePath");

  browse.addEventListener("click", _ => {
    dialogOptions.defaultPath = trainingFolder;
    remote.dialog.showOpenDialog(null, dialogOptions)
      .then(f => {
        if (f.filePaths.length > 0) {
          if (f.filePaths[0] !== importFolder && f.filePaths[0] !== processingFolder && f.filePaths[0] !== exportFolder) {
            trainingFolder = f.filePaths[0];
            label.textContent = trainingFolder ? trainingFolder : "Not specified";
            if (trainingFolder) {
              ipc.send("set-training-folder", trainingFolder);
            }
          } else {
            showError(PATH_COLLISION);
          }
        }
      })
      .catch(err => showError(err));
  });

  ipc.on("training-folder", (_, path) => {
    trainingFolder = path;
    label.textContent = trainingFolder ? trainingFolder : "Not specified";
  });

  ipc.send("get-training-folder");
})();