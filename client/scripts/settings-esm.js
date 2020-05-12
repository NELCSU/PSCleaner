"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var electron_1 = require("electron");
var util_esm_1 = require("./util-esm");
var importFolder = "", processingFolder = "";
var exportFolder = "", templateFolder = "", trainingFolder = "";
var mv_settings = document.getElementById("modalView");
var mm_settings = document.querySelector(".modal-message");
var dialogOptions = {
    title: "Select a folder",
    buttonLabel: "Select folder",
    defaultPath: null,
    properties: ["createDirectory", "openDirectory", "promptToCreate"],
};
var PATH_COLLISION = "Error changing folders. Please check that each folder has a unique name.";
(function ChooseImportFolder() {
    var browse = document.getElementById("btnImportSelection");
    var label = document.getElementById("lblImportFilePath");
    browse.addEventListener("click", function (_) {
        dialogOptions.defaultPath = importFolder;
        electron_1.remote.dialog.showOpenDialog(null, dialogOptions)
            .then(function (f) {
            if (f.filePaths.length > 0) {
                if (f.filePaths[0] !== processingFolder && f.filePaths[0] !== exportFolder && f.filePaths[0] !== trainingFolder) {
                    importFolder = f.filePaths[0];
                    label.textContent = importFolder ? importFolder : "Not specified";
                    if (importFolder) {
                        electron_1.ipcRenderer.send("set-import-folder", importFolder);
                    }
                }
                else {
                    util_esm_1.showError(PATH_COLLISION);
                }
            }
        })
            .catch(function (err) { return util_esm_1.showError(err); });
    });
    electron_1.ipcRenderer.on("import-folder", function (_, path) {
        importFolder = path;
        label.textContent = importFolder ? importFolder : "Not specified";
    });
    electron_1.ipcRenderer.send("get-import-folder");
})();
(function ChooseProcessingFolder() {
    var browse = document.getElementById("btnProcessingSelection");
    var label = document.getElementById("lblProcessingFilePath");
    browse.addEventListener("click", function (_) {
        dialogOptions.defaultPath = processingFolder;
        electron_1.remote.dialog.showOpenDialog(null, dialogOptions)
            .then(function (f) {
            if (f.filePaths.length > 0) {
                if (f.filePaths[0] !== importFolder && f.filePaths[0] !== exportFolder && f.filePaths[0] !== trainingFolder) {
                    processingFolder = f.filePaths[0];
                    label.textContent = processingFolder ? processingFolder : "Not specified";
                    if (processingFolder) {
                        electron_1.ipcRenderer.send("set-processing-folder", processingFolder);
                    }
                }
                else {
                    util_esm_1.showError(PATH_COLLISION);
                }
            }
        })
            .catch(function (err) { return util_esm_1.showError(err); });
    });
    electron_1.ipcRenderer.on("processing-folder", function (_, path) {
        processingFolder = path;
        label.textContent = processingFolder ? processingFolder : "Not specified";
    });
    electron_1.ipcRenderer.send("get-processing-folder");
})();
(function ChooseExportFolder() {
    var browse = document.getElementById("btnExportSelection");
    var label = document.getElementById("lblExportFilePath");
    browse.addEventListener("click", function (_) {
        dialogOptions.defaultPath = exportFolder;
        electron_1.remote.dialog.showOpenDialog(null, dialogOptions)
            .then(function (f) {
            if (f.filePaths.length > 0) {
                if (f.filePaths[0] !== importFolder && f.filePaths[0] !== processingFolder && f.filePaths[0] !== trainingFolder) {
                    exportFolder = f.filePaths[0];
                    label.textContent = exportFolder ? exportFolder : "Not specified";
                    if (exportFolder) {
                        electron_1.ipcRenderer.send("set-export-folder", exportFolder);
                    }
                }
                else {
                    util_esm_1.showError(PATH_COLLISION);
                }
            }
        })
            .catch(function (err) { return util_esm_1.showError(err); });
    });
    electron_1.ipcRenderer.on("export-folder", function (_, path) {
        exportFolder = path;
        label.textContent = exportFolder ? exportFolder : "Not specified";
    });
    electron_1.ipcRenderer.send("get-export-folder");
})();
(function ChooseTemplateFolder() {
    var browse = document.getElementById("btnTemplateSelection");
    var label = document.getElementById("lblTemplateFilePath");
    browse.addEventListener("click", function (_) {
        dialogOptions.defaultPath = templateFolder;
        electron_1.remote.dialog.showOpenDialog(null, dialogOptions)
            .then(function (f) {
            if (f.filePaths.length > 0) {
                if (f.filePaths[0] !== importFolder && f.filePaths[0] !== processingFolder && f.filePaths[0] !== exportFolder) {
                    templateFolder = f.filePaths[0];
                    label.textContent = templateFolder ? templateFolder : "Not specified";
                    if (templateFolder) {
                        electron_1.ipcRenderer.send("set-template-folder", templateFolder);
                    }
                }
                else {
                    util_esm_1.showError(PATH_COLLISION);
                }
            }
        })
            .catch(function (err) { return util_esm_1.showError(err); });
    });
    electron_1.ipcRenderer.on("template-folder", function (_, path) {
        templateFolder = path;
        label.textContent = templateFolder ? templateFolder : "Not specified";
    });
    electron_1.ipcRenderer.send("get-template-folder");
})();
(function ChooseTrainingDataFolder() {
    var browse = document.getElementById("btnTrainingDataSelection");
    var label = document.getElementById("lblTrainingFilePath");
    browse.addEventListener("click", function (_) {
        dialogOptions.defaultPath = trainingFolder;
        electron_1.remote.dialog.showOpenDialog(null, dialogOptions)
            .then(function (f) {
            if (f.filePaths.length > 0) {
                if (f.filePaths[0] !== importFolder && f.filePaths[0] !== processingFolder && f.filePaths[0] !== exportFolder) {
                    trainingFolder = f.filePaths[0];
                    label.textContent = trainingFolder ? trainingFolder : "Not specified";
                    if (trainingFolder) {
                        electron_1.ipcRenderer.send("set-training-folder", trainingFolder);
                    }
                }
                else {
                    util_esm_1.showError(PATH_COLLISION);
                }
            }
        })
            .catch(function (err) { return util_esm_1.showError(err); });
    });
    electron_1.ipcRenderer.on("training-folder", function (_, path) {
        trainingFolder = path;
        label.textContent = trainingFolder ? trainingFolder : "Not specified";
    });
    electron_1.ipcRenderer.send("get-training-folder");
})();
