import db from "debounce";
import he from "he";
import validFilename from "valid-filename";
import { ipcRenderer as ipc, remote } from "electron";
import {
  rangeContiguous, rangeEmpty, selectionTrim
} from "@buckneri/js-lib-selection";
import { one } from "@buckneri/js-lib-dom-selection";

const cancelEntityButton = one("#btnEntityTagger");
const closeButton = one("#btnCloseFile");
const clearButton = one("#btnClearTags");
const count = one("#hintTrainingDataCount");
const dataEntryText = one("#txtAddText");
const deleteButton = one("#btnDeleteTextFile");
const files = one("#pnlFileName");
const filename = one("#lblFilename");
const list = one("#lstEntityTagger");
const modal = one("#mvEntityTagger");
const openButton = one("#btnOpenText");
const renameFileText = one("#lblRenameFile");
const renameFileTickbox = one("#chkFileRename");
const renameFileSave = one("#btnFileRename");
const saveButton = one("#btnAddText");
const sensitivityButton = one("#btnSensitivity");
const autodiscoverButton = one("#btnAutodiscover");

let activeFile = null;
let tag = null;
let entityMap = new Map();

function addEntity(list, label, color, options) {
  const item = document.createElement("nel-list-item");
  item.setAttribute("color", color);
  item.selectable = options.selectable;
  item.deletable = options.deletable;
  item.textContent = label;
  list.appendChild(item);
  return item;
}

function addTag(selection, label, color) {
  const rng = selection.getRangeAt(0);
  const mark = document.createElement("nel-text-tag");
  mark.setAttribute("label", label ? label : "Not defined");
  mark.setAttribute("color", color ? color : "#cccccc");
  mark.selectable = true;
  mark.deletable = true;
  mark.addEventListener("deleting", ev => ev.detail.delete());
  mark.addEventListener("click", e => {
    if (e.button !== 0) {
      e.stopPropagation();
    }
    const sel = window.getSelection();
    sel.removeAllRanges();
  });
  rng.surroundContents(mark);
  selection.removeAllRanges();
  return mark;
}

function adjustSensitivity() {
  ipc.send("NLP-sensitivity", sensitivityButton.value);
}

function autoDiscover() {
  ipc.send("NLP-request", dataEntryText.textContent);
  autodiscoverButton.classList.add("disabled");
  autodiscoverButton.textContent = "Searching"
  autodiscoverButton.classList.add("wait");
}

function cancelEntityChoice() {
  window.dispatchEvent(new CustomEvent("CancelNewEntityCreation"));
  modal.removeAttribute("open");
}

function checkInput() {
  if (dataEntryText.textContent.length > 0) {
    window.dispatchEvent(new CustomEvent("NewTrainingData"));
    const restore = insertionPoint();
    if (dataEntryText.childNodes.length > 1) {
      Array.from(dataEntryText.childNodes)
        .forEach(n => {
          n.textContent = n.textContent.replace(/&nbsp;/gm, " ");
        });
      dataEntryText.normalize();
      restore();
    }
  }
}

function checkInputFileRename(e) {
  if (validFilename(e.target.value.trim())) {
    renameFileSave.classList.remove("disabled");
  } else {
    renameFileSave.classList.add("disabled");
  }
}

function clearTags() {
  dataEntryText.innerHTML = dataEntryText.textContent;
  clearButton.classList.add("disabled");
}

function closeFile() {
  openButton.classList.remove("disabled");
  autodiscoverButton.classList.add("disabled");
  closeButton.classList.add("disabled");
  clearButton.classList.add("disabled");
  deleteButton.classList.add("disabled");
  saveButton.classList.add("disabled");
  dataEntryText.textContent = ""
  fileRenameClear();
  filename.textContent = "";
  files.hidden = true;
  activeFile = null;
}

function createSelection(node, start, length) {
  const range = document.createRange();
  range.setStart(node, start);
  range.setEnd(node, start + length);
  const sel = window.getSelection();
  sel.removeAllRanges();
  sel.addRange(range);
  return sel;
}

function delete() {
  const choice = remote.dialog.showMessageBoxSync(null, {
    type: "warning",
    buttons: ["Delete", "Cancel"],
    title: "Warning, delete file operation detected",
    message: "Are you sure you wish to delete this file?",
    defaultId: 1
  });
  if (choice === 0) {
    ipc.send("delete-training-file", filename.textContent);
  }
}

function fileRenameClear() {
  renameFileTickbox.checked = false;
  renameFileText.classList.add("disabled");
  renameFileText.value = "";
  renameFileSave.classList.add("disabled");
}

function insertionPoint() {
  let sel = window.getSelection();
  const node = sel.focusNode;
  const offset = sel.focusOffset;
  return function restore() {
    sel.collapse(node, offset);
  };
}

function openFile() {
  ipc.send("get-training-folder");
  openButton.classList.add("disabled");
}

function pasteText(e) {
  e.preventDefault();
  let paste = e.clipboardData.getData("text/plain");
  paste = paste.replace(/(?:\r\n|\r|\n)/g, " ");
  paste = paste.replace(/\s+/g, " ");
  const sel = window.getSelection();
  if (!sel.rangeCount) {
    dataEntryText.normalize();
    return false;
  }
  sel.deleteFromDocument();
  sel.getRangeAt(0).insertNode(document.createTextNode(paste));
  e.stopPropagation();
  clearTags();
  checkInput();
}

function resetTextSelection() {
  const re = />$/;
  const match = dataEntryText.innerHTML.match(re);
  if (match) {
    const sel = window.getSelection();
    const nbsp = document.createTextNode("\u00A0");
    dataEntryText.appendChild(nbsp);
    if (sel.focusNode === null) {
      sel.collapse(nbsp, 0);
    }
  }
}

function saveFile() {
  dataEntryText.normalize();
  const data = {
    text: dataEntryText.textContent,
    entities: []
  };
  let markUp = he.decode(dataEntryText.innerHTML);
  const tags = Array.from(dataEntryText.children);
  while (tags.length > 0) {
    let i = markUp.indexOf("<nel-text-tag");
    data.entities.push({
      start: i,
      length: tags[0].textContent.length,
      label: tags[0].label,
      color: tags[0].color
    });
    markUp = markUp.replace(/<nel-text-tag.+?<\/nel-text-tag>/m, tags[0].textContent);
    tags.splice(0, 1);
  }
  ipc.send("save-training-file", filename.textContent, data);
}

function saveNewFileName(e) {
  let newFilename = renameFileText.value.trim();
  newFilename = newFilename.replace(/\.json/, "");
  newFilename = `${newFilename}.json`;
  ipc.send("rename-training-file", activeFile, newFilename);
}

function toggleRenameFile(e) {
  e.target.checked
    ? renameFileText.classList.remove("disabled")
    : renameFileText.classList.add("disabled");
  if (!e.target.checked) {
    renameFileText.value = "";
    renameFileSave.classList.add("disabled");
  } else {
    renameFileText.focus();
  }
}

function updateCount(n) {
  count.textContent = (n === 0
    ? "No files"
    : n === 1
      ? `${n} file`
      : `${n} files`) + " found";
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
sensitivityButton.addEventListener("change", adjustSensitivity);

ipc.on("entity-list", (e, response) => {
  list.innerHTML = "";
  entityMap.clear();
  response.forEach(d => {
    entityMap.set(d.id, d);
    const el = addEntity(list, d.label, d.color, {
      deletable: false,
      selectable: true
    });
    el.addEventListener("click", e => {
      window.dispatchEvent(new CustomEvent("UpdateTag", {
        detail: {
          color: e.target.color,
          label: e.target.textContent
        }
      }));
      modal.removeAttribute("open");
      window.dispatchEvent(new CustomEvent("NewTrainingData"));
    });
  });
});

ipc.on("NLP-response", (e, response) => {
  autodiscoverButton.textContent = "Autodiscover";
  autodiscoverButton.classList.remove("disabled");
  autodiscoverButton.classList.remove("wait");
  console.clear();
  console.table(response);
  dataEntryText.innerHTML = he.encode(dataEntryText.textContent);
  if (response.length > 0) {
    window.dispatchEvent(new CustomEvent("NewTrainingData"));
  }
  while (response.length > 0) {
    var item = response.pop();
    item.len = item.len ? item.len : item.end - item.start;
    var entity = entityMap.get(item.entity.id);
    if (entity) {
      const sel = createSelection(dataEntryText.childNodes[0], item.start, item.length);
      addTag(sel, entity.label, entity.color);
    }
  }
});

ipc.on("temp-training-filename", (_, response) => {
  activeFile = response;
  filename.textContent = response;
  files.hidden = false;
});

ipc.on("training-file", (_, file, dt) => {
  activeFile = file;
  filename.textContent = file;
  files.hidden = false;
  const data = JSON.parse(dt);
  dataEntryText.textContent = data.text;
  let entity;
  try {
    while (entity = data.entities.pop()) {
      const sel = createSelection(dataEntryText.childNodes[0], entity.start, entity.length);
      addTag(sel, entity.label, entity.color);
    }
  } catch (err) {
    dataEntryText.textContent = data.text;
    console.log("Error found. Entities could not be loaded. Please refresh document via Autodiscover");
  }
  window.dispatchEvent(new CustomEvent("NewTrainingData"));
});

ipc.on("training-file-count", (_, count) => updateCount(count));
ipc.on("training-file-deleted", _ => closeButton.click());
ipc.on("training-file-saved", _ => saveButton.classList.add("disabled"));

ipc.on("training-file-rename-warning", (_, response) => {
  const choice = remote.dialog.showMessageBoxSync(null, {
    type: "warning",
    buttons: ["Overwrite", "Cancel"],
    title: "Warning, overwrite file operation detected",
    message: "Warning, a file with the same name already exists",
    defaultId: 1
  });
  if (choice !== 1) {
    ipc.send("rename-training-file", activeFile, response, true);
  }
});

ipc.on("training-file-renamed", (_, file) => {
  activeFile = file;
  filename.textContent = file;
  fileRenameClear();
});

ipc.on("training-folder", (_, folder) => {
  remote.dialog.showOpenDialog(null, {
    title: "Select a file",
    buttonLabel: "Select training data",
    defaultPath: folder,
    properties: ["openFile"],
  }).then(f => {
    if (f.filePaths === undefined || f.filePaths[0] === undefined) {
      openButton.classList.remove("disabled");
      return;
    }
    ipc.send("get-training-file", f.filePaths[0]);
  }).catch(err => console.log(err));
});

ipc.on("NLP-sensitivity", (_, n) => sensitivityButton.value = n);

ipc.send("get-entities");
ipc.send("get-training-file-count");
ipc.send("NLP-sensitivity");

window.addEventListener("CancelNewEntityCreation", _ => tag.delete());

window.addEventListener("contextmenu", e => {
  const contextMenu = new remote.Menu();
  const sel = window.getSelection();
  selectionTrim(sel);
  const rng = sel.rangeCount > 0 ? sel.getRangeAt(0) : null;
  const el = e.target;

  if (el.tagName === "NEL-TEXT-TAG") {
    e.stopPropagation();
    tag = el;
    contextMenu.append(
      new remote.MenuItem({
        label: "Delete",
        click() {
          tag.delete();
          window.dispatchEvent(new CustomEvent("NewTrainingData"));
        }
      })
    );
    contextMenu.popup({ window: remote.getCurrentWindow() });
  } else if (el.id === "txtAddText" && rng && rangeContiguous(rng) && !rangeEmpty(rng)) {
    e.stopPropagation();
    contextMenu.append(
      new remote.MenuItem({
        label: "Define entity",
        click() {
          tag = addTag(sel);
          window.dispatchEvent(new CustomEvent("ShowModalEntityPicker"));
        }
      })
    );
    contextMenu.popup({ window: remote.getCurrentWindow() });
  }
}, false);

window.addEventListener("NewTrainingData", _ => {
  openButton.classList.add("disabled");
  autodiscoverButton.classList.remove("disabled");
  closeButton.classList.remove("disabled");
  clearButton.classList.remove("disabled");
  deleteButton.classList.remove("disabled");
  saveButton.classList.remove("disabled");
  if (filename.textContent === "") {
    ipc.send("get-temp-training-file");
  }
});

window.addEventListener("ShowModalEntityPicker", _ => {
  modal.setAttribute("open", "open");
});

window.addEventListener("UpdateTag", e => {
  tag.color = e.detail.color;
  tag.label = e.detail.label;
});