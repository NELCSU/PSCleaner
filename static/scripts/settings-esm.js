import { ipcRenderer as ipc, remote } from "electron";
import { one } from "@buckneri/js-lib-dom-selection";

(function ChooseImportFolder() {
  const browse = one("#btnImportSelection");
  const label = one("#lblImportFilePath");
  let folder;

  browse.addEventListener("click", _ => {
    remote.dialog.showOpenDialog(null, {
      title: "Select a folder",
      buttonLabel: "Select folder",
      defaultPath: folder,
      properties: ["createDirectory", "openDirectory", "promptToCreate"],
    }).then(f => {
      folder = (f.filePaths === undefined || f.filePaths[0] === undefined)
        ? folder
        : f.filePaths[0];
      label.textContent = folder ? folder : "Not specified";
      if (folder) {
        ipc.send("set-import-folder", folder);
      }
    }).catch(err => console.log(err));;
  });

  ipc.on("import-folder", (_, path) => {
    folder = path;
    label.textContent = folder ? folder : "Not specified";
  });

  ipc.send("get-import-folder");
})();

(function ChooseProcessingFolder() {
  const browse = one("#btnProcessingSelection");
  const label = one("#lblProcessingFilePath");
  let folder;

  browse.addEventListener("click", _ => {
    remote.dialog.showOpenDialog(null, {
      title: "Select a folder",
      buttonLabel: "Select folder",
      defaultPath: folder,
      properties: ["createDirectory", "openDirectory", "promptToCreate"],
    }).then(f => {
      folder = (f.filePaths === undefined || f.filePaths[0] === undefined)
        ? folder
        : f.filePaths[0];
      label.textContent = folder ? folder : "Not specified";
      if (folder) {
        ipc.send("set-processing-folder", folder);
      }
    }).catch(err => console.log(err));
  });

  ipc.on("processing-folder", (_, path) => {
    folder = path;
    label.textContent = folder ? folder : "Not specified";
  });

  ipc.send("get-processing-folder");
})();

(function ChooseExportFolder() {
  const browse = one("#btnExportSelection");
  const label = one("#lblExportFilePath");
  let folder;

  browse.addEventListener("click", _ => {
    remote.dialog.showOpenDialog(null, {
      title: "Select a folder",
      buttonLabel: "Select folder",
      defaultPath: folder,
      properties: ["createDirectory", "openDirectory", "promptToCreate"],
    }).then(f => {
      folder = (f.filePaths === undefined || f.filePaths[0] === undefined)
        ? folder
        : f.filePaths[0];
      label.textContent = folder ? folder : "Not specified";
      if (folder) {
        ipc.send("set-export-folder", folder);
      }
    }).catch(err => console.log(err));
  });

  ipc.on("export-folder", (_, path) => {
    folder = path;
    label.textContent = folder ? folder : "Not specified";
  });

  ipc.send("get-export-folder");
})();

(function ChooseTrainingDataFolder() {
  const browse = one("#btnTrainingDataSelection");
  const label = one("#lblTrainingFilePath");
  let folder;

  browse.addEventListener("click", _ => {
    remote.dialog.showOpenDialog(null, {
      title: "Select a folder",
      buttonLabel: "Select folder",
      defaultPath: folder,
      properties: ["createDirectory", "openDirectory", "promptToCreate"],
    }).then(f => {
      folder = (f.filePaths === undefined || f.filePaths[0] === undefined)
        ? folder
        : f.filePaths[0];
      label.textContent = folder ? folder : "Not specified";
      if (folder) {
        ipc.send("set-training-folder", folder);
      }
    }).catch(err => console.log(err));
  });

  ipc.on("training-folder", (_, path) => {
    folder = path;
    label.textContent = folder ? folder : "Not specified";
  });

  ipc.send("get-training-folder");
})();