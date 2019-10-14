import { ipcRenderer as ipc, remote } from "electron";
import { one } from "@buckneri/js-lib-dom-selection";

(function ChooseImportFolder() {
  const browse = one("#btnImportSelection");
  const label = one("#lblImportFilePath");
  let folder;

  browse.addEventListener("click", () => {
    remote.dialog.showOpenDialog(null, {
      title: "Select a folder",
      buttonLabel: "Select folder",
      defaultPath: folder,
      properties: ["createDirectory", "openDirectory", "promptToCreate"],
    }, paths => {
      folder = (paths === undefined || paths[0] === undefined) 
        ? folder
        : paths[0];
      label.textContent = folder ? folder : "Not specified";
      if (folder) {
        ipc.send("set-import-folder", folder);
      }
    });
  });

  ipc.on("import-folder", (e, path) => {
    folder = path;
    label.textContent = folder ? folder : "Not specified";
  });

  ipc.send("get-import-folder");
})();

(function ChooseProcessingFolder() {
  const browse = one("#btnProcessingSelection");
  const label = one("#lblProcessingFilePath");
  let folder;

  browse.addEventListener("click", () => {
    remote.dialog.showOpenDialog(null, {
      title: "Select a folder",
      buttonLabel: "Select folder",
      defaultPath: folder,
      properties: ["createDirectory", "openDirectory", "promptToCreate"],
    }, paths => {
      folder = (paths === undefined || paths[0] === undefined) 
        ? folder
        : paths[0];
      label.textContent = folder ? folder : "Not specified";
      if (folder) {
        ipc.send("set-processing-folder", folder);
      }
    });
  });

  ipc.on("processing-folder", (e, path) => {
    folder = path;
    label.textContent = folder ? folder : "Not specified";
  });

  ipc.send("get-processing-folder");
})();

(function ChooseExportFolder() {
  const browse = one("#btnExportSelection");
  const label = one("#lblExportFilePath");
  let folder;

  browse.addEventListener("click", () => {
    remote.dialog.showOpenDialog(null, {
      title: "Select a folder",
      buttonLabel: "Select folder",
      defaultPath: folder,
      properties: ["createDirectory", "openDirectory", "promptToCreate"],
    }, paths => {
      folder = (paths === undefined || paths[0] === undefined) 
        ? folder
        : paths[0];
      label.textContent = folder ? folder : "Not specified";
      if (folder) {
        ipc.send("set-export-folder", folder);
      }
    });
  });

  ipc.on("export-folder", (e, path) => {
    folder = path;
    label.textContent = folder ? folder : "Not specified";
  });

  ipc.send("get-export-folder");
})();

(function ChooseTrainingDataFolder() {
  const browse = one("#btnTrainingDataSelection");
  const label = one("#lblTrainingFilePath");
  let folder;
  
  browse.addEventListener("click", () => {
    remote.dialog.showOpenDialog(null, {
      title: "Select a folder",
      buttonLabel: "Select folder",
      defaultPath: folder,
      properties: ["createDirectory", "openDirectory", "promptToCreate"],
    }, paths => {
      folder = (paths === undefined || paths[0] === undefined) 
        ? folder
        : paths[0];
      label.textContent = folder ? folder : "Not specified";
      if (folder) {
        ipc.send("set-training-folder", folder);
      }
    });
  });

  ipc.on("training-folder", (e, path) => {
    folder = path;
    label.textContent = folder ? folder : "Not specified";
  });

  ipc.send("get-training-folder");
})();