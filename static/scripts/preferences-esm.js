import fs from "fs-extra";
import { ipcRenderer as ipc, remote } from "electron";
import { one } from "@buckneri/js-lib-dom-selection";

(function ChooseImportFolder() {
  const browse = one("#btnImportSelection");
  const clear = one("#btnClearImportSelection");
  const label = one("#lblImportFilePath");
  let folder, base;

  browse.addEventListener("click", () => {
    remote.dialog.showOpenDialog(null, {
      title: "Select a folder",
      buttonLabel: "Select folder",
      defaultPath: folder || base,
      properties: ["createDirectory", "openDirectory", "promptToCreate"],
    }, paths => {
      folder = (paths === undefined || paths[0] === undefined) 
        ? folder
        : paths[0];
      updatePathLabel();  
      saveSelection();
    });
  });
  
  clear.addEventListener("click", () => {
    folder = null;
    ipc.send("delete-folder", "import");
    updatePathLabel();
  });
  
  function saveSelection() {
    if (folder) {
      ipc.send("save-folder", { key: "import", value: folder });
    }
  }

  function updatePathLabel() {
    if (folder) {
      label.textContent = folder;
      clear.classList.remove("disabled");
    } else {
      label.textContent = "Not specified";
      clear.classList.add("disabled");
    }
  }

  ipc.on("response-folders", (e, resp) => {
    folder = fs.pathExistsSync(resp["import"]) ? resp["import"] : null;
    base = resp.default;
    updatePathLabel();
  });
})();

(function ChooseExportFolder() {
  const browse = one("#btnExportSelection");
  const clear = one("#btnClearExportSelection");
  const label = one("#lblExportFilePath");
  let folder, base;

  browse.addEventListener("click", () => {
    remote.dialog.showOpenDialog(null, {
      title: "Select a folder",
      buttonLabel: "Select folder",
      defaultPath: folder || base,
      properties: ["createDirectory", "openDirectory", "promptToCreate"],
    }, paths => {
      folder = (paths === undefined || paths[0] === undefined) 
        ? folder
        : paths[0];
      updatePathLabel();  
      saveSelection();
    });
  });
  
  clear.addEventListener("click", () => {
    folder = null;
    ipc.send("delete-folder", "export");
    updatePathLabel();
  });
  
  function saveSelection() {
    if (folder) {
      ipc.send("save-folder", { key: "export", value: folder });
    }
  }

  function updatePathLabel() {
    if (folder) {
      label.textContent = folder;
      clear.classList.remove("disabled");
    } else {
      label.textContent = "Not specified";
      clear.classList.add("disabled");
    }
  }

  ipc.on("response-folders", (e, resp) => {
    folder = fs.pathExistsSync(resp["export"]) ? resp["export"] : null;
    base = resp.default;
    updatePathLabel();
  });
})();

(function ChooseTrainingDataFolder() {
  const browse = one("#btnTrainingDataSelection");
  const clear = one("#btnClearTrainingDataSelection");
  const label = one("#lblTrainingFilePath");
  let folder, base;
  
  browse.addEventListener("click", () => {
    remote.dialog.showOpenDialog(null, {
      title: "Select a folder",
      buttonLabel: "Select folder",
      defaultPath: folder || base,
      properties: ["createDirectory", "openDirectory", "promptToCreate"],
    }, paths => {
      folder = (paths === undefined || paths[0] === undefined) 
        ? folder
        : paths[0];
      updatePathLabel();      
      saveSelection();
    });
  });  

  clear.addEventListener("click", () => {
    folder = null;
    ipc.send("delete-folder", "data");
    updatePathLabel();
  });

  function saveSelection() {
    if (folder) {
      ipc.send("save-folder", { key: "data", value: folder });
    }
  }

  function updatePathLabel() {
    if (folder) {
      label.textContent = folder;
      clear.classList.remove("disabled");
    } else {
      label.textContent = "Not specified";
      clear.classList.add("disabled");
    }
  }

  ipc.on("response-folders", (e, resp) => {
    folder = fs.pathExistsSync(resp["data"]) ? resp["data"] : null;
    base = resp.default;
    updatePathLabel();
  });
})();

ipc.send("get-folders");