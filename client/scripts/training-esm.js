"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var db = require("debounce");
var he = require("he");
var valid_filename_1 = require("valid-filename");
var electron_1 = require("electron");
var js_lib_selection_1 = require("@buckneri/js-lib-selection");
var cancelEntityButton = document.getElementById("btnEntityTagger");
var closeButton = document.getElementById("btnCloseFile");
var clearButton = document.getElementById("btnClearTags");
var dataEntryText = document.getElementById("txtAddText");
var deleteButton = document.getElementById("btnDeleteTextFile");
var files = document.getElementById("pnlFileName");
var filename = document.getElementById("lblFilename");
var list = document.getElementById("lstEntityTagger");
var modal = document.getElementById("mvEntityTagger");
var openButton = document.getElementById("btnOpenText");
var renameFileText = document.getElementById("lblRenameFile");
var renameFileTickbox = document.getElementById("chkFileRename");
var renameFileSave = document.getElementById("btnFileRename");
var saveButton = document.getElementById("btnAddText");
var traceButton = document.getElementById("btnTrace");
var autodiscoverButton = document.getElementById("btnAutodiscover");
var activeFile = null;
var tag = null;
var entityMap = new Map();
function addEntity(list, label, color, options) {
    var item = document.createElement("nel-list-item");
    item.setAttribute("color", color);
    item.selectable = options.selectable;
    item.deletable = options.deletable;
    item.textContent = label;
    list.appendChild(item);
    return item;
}
function addTag(selection, label, color) {
    var rng = selection.getRangeAt(0);
    var mark = document.createElement("nel-text-tag");
    mark.setAttribute("label", label ? label : "Not defined");
    mark.setAttribute("color", color ? color : "#cccccc");
    mark.selectable = true;
    mark.deletable = true;
    mark.addEventListener("deleting", function (ev) { return ev.detail.delete(); });
    mark.addEventListener("click", function (e) {
        if (e.button !== 0) {
            e.stopPropagation();
        }
        var sel = window.getSelection();
        if (sel) {
            sel.removeAllRanges();
        }
    });
    rng.surroundContents(mark);
    selection.removeAllRanges();
    return mark;
}
function adjustTrace() {
    electron_1.ipcRenderer.send("NLP-trace", traceButton.on);
}
function autoDiscover() {
    electron_1.ipcRenderer.send("NLP-request", dataEntryText.textContent);
    autodiscoverButton.classList.add("disabled");
    autodiscoverButton.textContent = "Searching";
    autodiscoverButton.classList.add("wait");
}
function cancelEntityChoice() {
    window.dispatchEvent(new CustomEvent("CancelNewEntityCreation"));
    modal.removeAttribute("open");
}
function checkInput() {
    if (dataEntryText.textContent && dataEntryText.textContent.length > 0) {
        window.dispatchEvent(new CustomEvent("NewTrainingData"));
        var restore = insertionPoint();
        if (dataEntryText.childNodes.length > 1) {
            Array.from(dataEntryText.childNodes)
                .forEach(function (n) {
                var txt = n.textContent || "";
                n.textContent = txt.replace(/&nbsp;/gm, " ");
            });
            dataEntryText.normalize();
            restore();
        }
    }
}
function checkInputFileRename(e) {
    if (valid_filename_1.default(e.target.value.trim())) {
        renameFileSave.classList.remove("disabled");
    }
    else {
        renameFileSave.classList.add("disabled");
    }
}
function cleanText(text) {
    text = text.replace(/(?:\r\n|\r|\n)/g, "<br>");
    text = text.replace(/\s+/g, " ");
    text = text.replace(/\s?[\-]\s?/g, "-");
    text = text.replace(/\s?[\/]\s?/g, "/");
    text = text.replace(/\s?[\\]\s?/g, "\\");
    text = text.replace(/<br>/g, "  ");
    return text;
}
function clearTags() {
    if (dataEntryText) {
        dataEntryText.innerHTML = dataEntryText.textContent;
    }
    clearButton.classList.add("disabled");
}
function closeFile() {
    openButton.classList.remove("disabled");
    autodiscoverButton.classList.add("disabled");
    closeButton.classList.add("disabled");
    clearButton.classList.add("disabled");
    deleteButton.classList.add("disabled");
    saveButton.classList.add("disabled");
    dataEntryText.textContent = "";
    fileRenameClear();
    filename.textContent = "";
    files.hidden = true;
    activeFile = null;
}
function createSelection(node, start, length) {
    var range = document.createRange();
    range.setStart(node, start);
    range.setEnd(node, start + length);
    var sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
    return sel;
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
        electron_1.ipcRenderer.send("delete-training-file", filename.textContent);
    }
}
function fileRenameClear() {
    renameFileTickbox.checked = false;
    renameFileText.classList.add("disabled");
    renameFileText.value = "";
    renameFileSave.classList.add("disabled");
}
function insertionPoint() {
    var sel = window.getSelection();
    var node = sel.focusNode;
    var offset = sel.focusOffset;
    return function restore() {
        sel.collapse(node, offset);
    };
}
function openFile() {
    electron_1.ipcRenderer.send("get-training-folder");
    openButton.classList.add("disabled");
}
function pasteText(e) {
    if (e) {
        e.preventDefault();
        e.stopPropagation();
    }
    var paste = electron_1.clipboard.readText();
    paste = cleanText(paste);
    var sel = window.getSelection();
    if (!sel.rangeCount) {
        dataEntryText.normalize();
        return false;
    }
    sel.deleteFromDocument();
    sel.getRangeAt(0).insertNode(document.createTextNode(paste));
    clearTags();
    checkInput();
}
function resetTextSelection() {
    var re = />$/;
    var match = dataEntryText.innerHTML.match(re);
    if (match) {
        var sel = window.getSelection();
        var nbsp = document.createTextNode("\u00A0");
        dataEntryText.appendChild(nbsp);
        if (sel.focusNode === null) {
            sel.collapse(nbsp, 0);
        }
    }
}
function saveFile() {
    dataEntryText.normalize();
    var ent = [];
    var data = {
        text: dataEntryText.textContent,
        entities: ent
    };
    var markUp = he.decode(dataEntryText.innerHTML);
    var tags = Array.from(dataEntryText.children);
    while (tags.length > 0) {
        var i = markUp.indexOf("<nel-text-tag");
        var item = tags[0];
        data.entities.push({
            start: i,
            length: item.textContent ? item.textContent.length : 0,
            label: item.label,
            color: item.color
        });
        markUp = markUp.replace(/<nel-text-tag.+?<\/nel-text-tag>/m, item.textContent || "");
        tags.splice(0, 1);
    }
    electron_1.ipcRenderer.send("save-training-file", filename.textContent, data);
}
function saveNewFileName(e) {
    var newFilename = renameFileText.value.trim();
    newFilename = newFilename.replace(/\.json/, "");
    newFilename = newFilename + ".json";
    electron_1.ipcRenderer.send("rename-training-file", activeFile, newFilename);
}
function toggleRenameFile(e) {
    var el = e.target;
    el.checked
        ? renameFileText.classList.remove("disabled")
        : renameFileText.classList.add("disabled");
    if (!el.checked) {
        renameFileText.value = "";
        renameFileSave.classList.add("disabled");
    }
    else {
        renameFileText.focus();
    }
}
autodiscoverButton.addEventListener("click", autoDiscover);
cancelEntityButton.addEventListener("click", cancelEntityChoice);
clearButton.addEventListener("click", clearTags);
closeButton.addEventListener("click", closeFile);
dataEntryText.addEventListener("click", resetTextSelection);
dataEntryText.addEventListener("input", db(checkInput, 700));
dataEntryText.addEventListener("paste", pasteText);
deleteButton.addEventListener("click", deleteFile);
openButton.addEventListener("click", openFile);
renameFileText.addEventListener("input", db(checkInputFileRename, 500));
renameFileTickbox.addEventListener("change", toggleRenameFile);
renameFileSave.addEventListener("click", saveNewFileName);
saveButton.addEventListener("click", saveFile);
traceButton.addEventListener("input", adjustTrace);
electron_1.ipcRenderer.on("entity-list", function (e, response) {
    list.innerHTML = "";
    entityMap.clear();
    response.forEach(function (d) {
        entityMap.set(d.id, d);
        var el = addEntity(list, d.label, d.color, {
            deletable: false,
            selectable: true
        });
        el.addEventListener("click", function (e) {
            var item = e.target;
            window.dispatchEvent(new CustomEvent("UpdateTag", {
                detail: {
                    color: item.color,
                    label: item.textContent
                }
            }));
            modal.removeAttribute("open");
            window.dispatchEvent(new CustomEvent("NewTrainingData"));
        });
    });
});
electron_1.ipcRenderer.on("NLP-response", function (e, response) {
    autodiscoverButton.textContent = "Autodiscover";
    autodiscoverButton.classList.remove("disabled");
    autodiscoverButton.classList.remove("wait");
    dataEntryText.innerHTML = he.encode(dataEntryText.textContent || "");
    if (response.length > 0) {
        window.dispatchEvent(new CustomEvent("NewTrainingData"));
    }
    while (response.length > 0) {
        var item = response.pop();
        var sel = createSelection(dataEntryText.childNodes[0], item.match.start, item.match.length);
        addTag(sel, item.entity.label, item.entity.color);
    }
});
electron_1.ipcRenderer.on("temp-training-filename", function (_, response) {
    activeFile = response;
    filename.textContent = response;
    files.hidden = false;
});
electron_1.ipcRenderer.on("training-file", function (_, file, dt) {
    activeFile = file;
    filename.textContent = file;
    files.hidden = false;
    var data = JSON.parse(dt);
    dataEntryText.textContent = data.text;
    var entity;
    try {
        while (entity = data.entities.pop()) {
            var sel = createSelection(dataEntryText.childNodes[0], entity.start, entity.length);
            addTag(sel, entity.label, entity.color);
        }
    }
    catch (err) {
        dataEntryText.textContent = data.text;
        console.log("Error found. Entities could not be loaded. Please refresh document via Autodiscover");
    }
    window.dispatchEvent(new CustomEvent("NewTrainingData"));
});
electron_1.ipcRenderer.on("training-file-deleted", function (_) { return closeButton.click(); });
electron_1.ipcRenderer.on("training-file-saved", function (_) { return saveButton.classList.add("disabled"); });
electron_1.ipcRenderer.on("training-file-rename-warning", function (_, response) {
    var choice = electron_1.remote.dialog.showMessageBoxSync(null, {
        type: "warning",
        buttons: ["Overwrite", "Cancel"],
        title: "Warning, overwrite file operation detected",
        message: "Warning, a file with the same name already exists",
        defaultId: 1
    });
    if (choice !== 1) {
        electron_1.ipcRenderer.send("rename-training-file", activeFile, response, true);
    }
});
electron_1.ipcRenderer.on("training-file-renamed", function (_, file) {
    activeFile = file;
    filename.textContent = file;
    fileRenameClear();
});
electron_1.ipcRenderer.on("training-folder", function (_, folder) {
    electron_1.remote.dialog.showOpenDialog(null, {
        title: "Select a file",
        buttonLabel: "Select training data",
        defaultPath: folder,
        properties: ["openFile"],
    }).then(function (f) {
        if (f.filePaths === undefined || f.filePaths[0] === undefined) {
            openButton.classList.remove("disabled");
            return;
        }
        electron_1.ipcRenderer.send("get-training-file", f.filePaths[0]);
    }).catch(function (err) { return console.log(err); });
});
electron_1.ipcRenderer.on("NLP-trace", function (_, n) { return traceButton.on = n; });
electron_1.ipcRenderer.send("get-entities");
electron_1.ipcRenderer.send("NLP-trace");
window.addEventListener("CancelNewEntityCreation", function (_) { return tag.delete(); });
window.addEventListener("contextmenu", function (e) {
    var contextMenu = new electron_1.remote.Menu();
    var sel = window.getSelection();
    js_lib_selection_1.selectionTrim(sel);
    var rng = sel.rangeCount > 0 ? sel.getRangeAt(0) : null;
    var el = e.target;
    var displayMenu = false;
    if (el.tagName === "NEL-TEXT-TAG") {
        e.stopPropagation();
        tag = el;
        contextMenu.append(new electron_1.remote.MenuItem({
            label: "Delete",
            click: function () {
                tag.delete();
                window.dispatchEvent(new CustomEvent("NewTrainingData"));
            }
        }));
        displayMenu = true;
    }
    else if (el.id === "txtAddText") {
        if (rng && js_lib_selection_1.rangeContiguous(rng) && !js_lib_selection_1.rangeEmpty(rng)) {
            e.stopPropagation();
            contextMenu.append(new electron_1.remote.MenuItem({
                label: "Define entity",
                click: function () {
                    tag = addTag(sel);
                    window.dispatchEvent(new CustomEvent("ShowModalEntityPicker"));
                }
            }));
            displayMenu = true;
        }
        else if (typeof electron_1.clipboard.readText() === "string") {
            e.stopPropagation();
            contextMenu.append(new electron_1.remote.MenuItem({
                label: "Paste",
                click: function () {
                    pasteText();
                }
            }));
            displayMenu = true;
        }
    }
    if (displayMenu) {
        contextMenu.popup({ window: electron_1.remote.getCurrentWindow() });
    }
}, false);
window.addEventListener("NewTrainingData", function (_) {
    openButton.classList.add("disabled");
    autodiscoverButton.classList.remove("disabled");
    closeButton.classList.remove("disabled");
    clearButton.classList.remove("disabled");
    deleteButton.classList.remove("disabled");
    saveButton.classList.remove("disabled");
    if (filename.textContent === "") {
        electron_1.ipcRenderer.send("get-temp-training-file");
    }
});
window.addEventListener("ShowModalEntityPicker", function (_) {
    modal.setAttribute("open", "open");
});
window.addEventListener("UpdateTag", function (e) {
    tag.color = e.detail.color;
    tag.label = e.detail.label;
});
