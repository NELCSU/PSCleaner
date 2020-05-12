import { ipcRenderer as ipc, remote } from "electron";
import { showError } from "./util-esm";

let importFolder = "", processingFolder = "";
let exportFolder = "", templateFolder = "", trainingFolder = "";
const mv_settings = document.getElementById("modalView") as any;
const mm_settings = document.querySelector(".modal-message") as HTMLElement;
const dialogOptions = {
  title: "Select a folder",
  buttonLabel: "Select folder",
  defaultPath: null,
  properties: ["createDirectory", "openDirectory", "promptToCreate"],
};
const PATH_COLLISION = "Error changing folders. Please check that each folder has a unique name.";

(function ChooseImportFolder() {
  const browse = document.getElementById("btnImportSelection") as HTMLButtonElement;
  const label = document.getElementById("lblImportFilePath") as HTMLLabelElement;

  browse.addEventListener("click", _ => {
    dialogOptions.defaultPath = importFolder as any;
    remote.dialog.showOpenDialog(null as any, dialogOptions as any)
      .then((f: any) => {
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
      .catch((err: string) => showError(err));
  });

  ipc.on("import-folder", (_: any, path: string) => {
    importFolder = path;
    label.textContent = importFolder ? importFolder : "Not specified";
  });

  ipc.send("get-import-folder");
})();

(function ChooseProcessingFolder() {
  const browse = document.getElementById("btnProcessingSelection") as HTMLButtonElement;
  const label = document.getElementById("lblProcessingFilePath") as HTMLLabelElement;

  browse.addEventListener("click", _ => {
    dialogOptions.defaultPath = processingFolder as any;
    remote.dialog.showOpenDialog(null as any, dialogOptions as any)
      .then((f: any) => {
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
      .catch((err: string) => showError(err));
  });

  ipc.on("processing-folder", (_: any, path: string) => {
    processingFolder = path;
    label.textContent = processingFolder ? processingFolder : "Not specified";
  });

  ipc.send("get-processing-folder");
})();

(function ChooseExportFolder() {
  const browse = document.getElementById("btnExportSelection") as HTMLButtonElement;
  const label = document.getElementById("lblExportFilePath") as HTMLLabelElement;

  browse.addEventListener("click", _ => {
    dialogOptions.defaultPath = exportFolder as any;
    remote.dialog.showOpenDialog(null as any, dialogOptions as any)
      .then((f: any) => {
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
      .catch((err: string) => showError(err));
  });

  ipc.on("export-folder", (_: any, path: string) => {
    exportFolder = path;
    label.textContent = exportFolder ? exportFolder : "Not specified";
  });

  ipc.send("get-export-folder");
})();

(function ChooseTemplateFolder() {
  const browse = document.getElementById("btnTemplateSelection") as HTMLButtonElement;
  const label = document.getElementById("lblTemplateFilePath") as HTMLLabelElement;

  browse.addEventListener("click", _ => {
    dialogOptions.defaultPath = templateFolder as any;
    remote.dialog.showOpenDialog(null as any, dialogOptions as any)
      .then((f: any) => {
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
      .catch((err: string) => showError(err));
  });

  ipc.on("template-folder", (_: any, path: string) => {
    templateFolder = path;
    label.textContent = templateFolder ? templateFolder : "Not specified";
  });

  ipc.send("get-template-folder");
})();

(function ChooseTrainingDataFolder() {
  const browse = document.getElementById("btnTrainingDataSelection") as HTMLButtonElement;
  const label = document.getElementById("lblTrainingFilePath") as HTMLLabelElement;

  browse.addEventListener("click", _ => {
    dialogOptions.defaultPath = trainingFolder as any;
    remote.dialog.showOpenDialog(null as any, dialogOptions as any)
      .then((f: any) => {
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
      .catch((err: string) => showError(err));
  });

  ipc.on("training-folder", (_: any, path: string) => {
    trainingFolder = path;
    label.textContent = trainingFolder ? trainingFolder : "Not specified";
  });

  ipc.send("get-training-folder");
})();