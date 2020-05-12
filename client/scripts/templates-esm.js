"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var valid_filename_1 = require("valid-filename");
var electron_1 = require("electron");
var db = require("debounce");
var clearButton = document.getElementById("btnClear");
var deleteButton = document.getElementById("btnDelete");
var saveButton = document.getElementById("btnSave");
var addFieldButton = document.getElementById("btnAddField");
var fileName = document.getElementById("txtFilename");
var headerButton = document.getElementById("btnHeader");
var panel = document.getElementById("pnlAddTemplate");
var insertHere = document.getElementById("insertionPoint");
function addField(fieldName, selected) {
    var count = document.querySelectorAll("div.clone").length;
    var clone = document.getElementById("clone");
    var newField = clone.cloneNode(true);
    var txt = newField.querySelector("nel-text-input");
    var btn = newField.querySelector("nel-on-off");
    var del = document.getElementById("btnDelField");
    newField.id = "field_" + count;
    txt.value = fieldName || "";
    btn.on = selected;
    insertHere.insertAdjacentElement("beforebegin", newField);
    newField.classList.remove("hidden");
    txt.addEventListener("input", db(checkForm, 750));
    del.addEventListener("click", deleteField);
    btn.addEventListener("click", checkForm);
    return newField;
}
function checkForm() {
    saveButton.classList.add("disabled");
    if (!valid_filename_1.default(fileName.value)) {
        return;
    }
    var fields = Array.from(panel.querySelectorAll("nel-text-input.clone"));
    if (fields.length === 0) {
        return;
    }
    var valid = true;
    fields.forEach(function (el) {
        if (el.value === "") {
            valid = false;
        }
    });
    if (valid) {
        saveButton.classList.remove("disabled");
    }
}
function clear() {
    var tl = document.getElementById("listTemplate");
    deleteButton.classList.add("disabled");
    saveButton.classList.add("disabled");
    fileName.value = "";
    tl.selectedIndex = 0;
    removeFields();
}
function removeFields() {
    headerButton.on = true;
    var remove = Array.from(panel.querySelectorAll("div.clone"));
    for (var i = remove.length - 1; i > -1; i--) {
        panel.removeChild(remove[i]);
    }
}
function deleteField() {
    var _a, _b;
    var row = ((_a = window.event) === null || _a === void 0 ? void 0 : _a.target).parentNode;
    if (row) {
        (_b = row.parentNode) === null || _b === void 0 ? void 0 : _b.removeChild(row);
    }
    checkForm();
}
function deleteFile() {
    var choice = electron_1.remote.dialog.showMessageBoxSync(null, {
        type: "warning",
        buttons: ["Delete", "Cancel"],
        title: "Warning, delete file operation detected",
        message: "Are you sure you wish to delete this file?",
        defaultId: 1
    });
    if (choice === 0) {
        var tl = document.getElementById("listTemplate");
        electron_1.ipcRenderer.send("delete-template-file", tl.options[tl.selectedIndex].value);
    }
}
function loadForm(file, data) {
    deleteButton.classList.remove("disabled");
    fileName.value = file;
    headerButton.on = data.header;
    data.fields.forEach(function (field) {
        addField(field[0], field[1]);
    });
}
function saveFile() {
    var flds = [];
    var data = {
        header: headerButton.on ? true : false,
        fields: flds
    };
    var rows = Array.from(panel.querySelectorAll("div.clone"));
    rows.forEach(function (r) {
        var txt = r.querySelector("nel-text-input");
        var sen = r.querySelector("nel-on-off");
        data.fields.push([txt.value, sen.on ? true : false]);
    });
    var newFilename = fileName.value.trim();
    newFilename = newFilename.replace(/\.json/, "");
    newFilename = newFilename + ".json";
    electron_1.ipcRenderer.send("save-template-file", fileName.value, data);
}
function selectFile() {
    var tl = document.getElementById("listTemplate");
    if (tl.selectedIndex > 0) {
        electron_1.ipcRenderer.send("get-template-file", tl.options[tl.selectedIndex].value);
    }
    else {
        clear();
    }
}
addFieldButton.addEventListener("click", function () { return addField(); });
clearButton.addEventListener("click", clear);
deleteButton.addEventListener("click", deleteFile);
fileName.addEventListener("input", db(checkForm, 750));
saveButton.addEventListener("click", saveFile);
document.getElementById("listTemplate").addEventListener("change", selectFile);
electron_1.ipcRenderer.on("template-file", function (e, file, data) {
    removeFields();
    loadForm(file, data);
});
electron_1.ipcRenderer.on("template-files", function (e, files) {
    var tl = document.getElementById("listTemplate");
    Array.from(tl.options)
        .forEach(function (option, i) {
        if (i > 0) {
            tl.removeChild(option);
        }
    });
    var value = "";
    files.forEach(function (file) {
        var option = document.createElement("option");
        option.value = file;
        option.text = file.replace(/\.json/, "");
        if (option.text === fileName.value) {
            value = option.text;
        }
        tl.appendChild(option);
    });
    if (value) {
        tl.value = value;
    }
});
electron_1.ipcRenderer.on("template-file-deleted", function (_) {
    clear();
    electron_1.ipcRenderer.send("get-template-files");
});
electron_1.ipcRenderer.on("template-file-saved", function (_) {
    saveButton.classList.add("disabled");
    electron_1.ipcRenderer.send("get-template-files");
});
electron_1.ipcRenderer.send("get-template-files");
