import { ipcRenderer as ipc } from "electron";
import { showError } from "./util";

let importFolder = "", processingFolder = "";
let exportFolder = "", templateFolder = "";
const dialogOptions = {
  title: "Select a folder",
  buttonLabel: "Select folder",
  defaultPath: null as string | null,
  properties: ["createDirectory", "openDirectory", "promptToCreate"],
};
const PATH_COLLISION = "Error changing folders. Please check that each folder has a unique name.";

(function ChooseImportFolder() {
  const browse = document.getElementById("btnImportSelection") as HTMLButtonElement;
  const label = document.getElementById("lblImportFilePath") as HTMLLabelElement;

  browse.addEventListener("click", _ => {
    dialogOptions.defaultPath = importFolder as any;
    ipc.invoke("show-modal-open", dialogOptions as any)
      .then((f: any) => {
        if (f.filePaths.length > 0) {
          if (f.filePaths[0] !== processingFolder && f.filePaths[0] !== exportFolder) {
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
    ipc.invoke("show-modal-open", dialogOptions as any)
      .then((f: any) => {
        if (f.filePaths.length > 0) {
          if (f.filePaths[0] !== importFolder && f.filePaths[0] !== exportFolder) {
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
    ipc.invoke("show-modal-open", dialogOptions as any)
      .then((f: any) => {
        if (f.filePaths.length > 0) {
          if (f.filePaths[0] !== importFolder && f.filePaths[0] !== processingFolder) {
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
    ipc.invoke("show-modal-open", dialogOptions as any)
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