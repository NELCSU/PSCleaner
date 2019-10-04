import debounce from "lodash-es/debounce";
import he from "he";
import validFilename from "valid-filename";
import { ipcRenderer as ipc, remote } from "electron";
import {
  rangeContiguous, rangeEmpty, selectionTrim
} from "@buckneri/js-lib-selection";
import { one } from "@buckneri/js-lib-dom-selection";

const cancel = one("#btnEntityTagger");
const closeFile = one("#btnCloseFile");
const clearTags = one("#btnClearTags");
const count = one("#hintTrainingDataCount");
const dataEntry = one("#txtAddText");
const deleteFile = one("#btnDeleteTextFile");
const files = one("#pnlFileName");
const filename = one("#lblFilename");
const list = one("#lstEntityTagger");
const modal = one("#mvEntityTagger");
const open = one("#btnOpenText");
const renameFile = one("#lblRenameFile");
const renameFileCheck = one("#chkFileRename");
const renameFileSave = one("#btnFileRename");
const save = one("#btnAddText");
const auto = one("#btnAutodiscover");

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

function checkInput() {
  if (dataEntry.textContent.length > 0) {
    window.dispatchEvent(new CustomEvent("NewTrainingData"));
    const restore = insertionPoint();
    if (dataEntry.childNodes.length > 1) {
      Array.from(dataEntry.childNodes)
        .forEach(n => {
          n.textContent = n.textContent.replace(/&nbsp;/gm, " ");
        });
      dataEntry.normalize();
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

function createSelection(node, start, length) {
  const range = document.createRange();
  range.setStart(node, start);
  range.setEnd(node, start + length);
  const sel = window.getSelection();
  sel.removeAllRanges();
  sel.addRange(range);
  return sel;
}

function fileRenameClear() {
  renameFileCheck.checked = false;
  renameFile.classList.add("disabled");
  renameFile.value = "";
  renameFileSave.classList.add("disabled");
}

function fileRenameSuccess(file) {
  filename.textContent = file;
  fileRenameClear();
}

function insertionPoint() {
  let sel = window.getSelection();
  const node = sel.focusNode;
  const offset = sel.focusOffset;
  return function restore() {
    sel.collapse(node, offset);
  };
}

function updateCount(n) {
  count.textContent = (n === 0
    ? "No files"
    : n === 1
      ? `${n} file`
      : `${n} files`) + " found";
}

auto.addEventListener("click", () => {
  ipc.send("NLP-request", dataEntry.textContent);
  auto.classList.add("disabled");
  auto.textContent = "Searching"
  auto.classList.add("wait");
});

cancel.addEventListener("click", () => {
  window.dispatchEvent(new CustomEvent("CancelNewEntityCreation"));
  modal.removeAttribute("open");
});

clearTags.addEventListener("click", () => {
  dataEntry.innerHTML = dataEntry.textContent;
  clearTags.classList.add("disabled");
});

closeFile.addEventListener("click", () => {
  open.classList.remove("disabled");
  auto.classList.add("disabled");
  closeFile.classList.add("disabled");
  clearTags.classList.add("disabled");
  deleteFile.classList.add("disabled");
  save.classList.add("disabled");
  dataEntry.textContent = ""
  fileRenameClear();
  filename.textContent = "";
  files.hidden = true;
  ipc.send("clear-training-file");
});

dataEntry.addEventListener("click", () => {
  const re = />$/;
  const match = dataEntry.innerHTML.match(re);
  if (match) {
    const sel = window.getSelection();
    const nbsp = document.createTextNode("\u00A0");
    dataEntry.appendChild(nbsp);
    if (sel.focusNode === null) {
      sel.collapse(nbsp, 0);
    }
  }
});

dataEntry.addEventListener("input", debounce(checkInput, 700));

dataEntry.addEventListener("paste", e => {
  e.preventDefault();
  let paste = e.clipboardData.getData("text/plain");
  const sel = window.getSelection();
  if (!sel.rangeCount) {
    dataEntry.normalize();
    return false;
  }
  sel.deleteFromDocument();
  sel.getRangeAt(0).insertNode(document.createTextNode(paste));
  e.stopPropagation();
  checkInput();
});

deleteFile.addEventListener("click", () => {
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
});

ipc.on("entity-list", (e, response) => {
  list.innerHTML = "";
  entityMap.clear();
  response.forEach(d => {
    entityMap.set(d.id, d);
    const el = addEntity(list, d.name, d.color, {
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
  auto.textContent = "Autodiscover";
  auto.classList.remove("disabled");
  auto.classList.remove("wait");
  console.clear();
  console.table(response);
  dataEntry.innerHTML = dataEntry.textContent;
  if (response.length > 0) {
    clearTags.classList.remove("disabled");
  }
  while (response.length > 0) {
    var item = response.pop();
    item.len = item.len ? item.len : item.end - item.start;
    var entity = entityMap.get(item.entityId);
    if (entity) {
      const sel = createSelection(dataEntry.childNodes[0], item.start, item.length);
      addTag(sel, entity.name, entity.color);
    }
  }
});

ipc.on("temp-training-filename", (e, response) => {
  filename.textContent = response;
  files.hidden = false;
});

ipc.on("training-file", (e, file, dt) => {
  filename.textContent = file;
  files.hidden = false;
  const data = JSON.parse(dt);
  dataEntry.textContent = data.text;
  let entity;
  while (entity = data.entities.pop()) {
    const sel = createSelection(dataEntry.childNodes[0], entity.start, entity.length);
    addTag(sel, entity.label, entity.color);
  }
  window.dispatchEvent(new CustomEvent("NewTrainingData"));
});

ipc.on("training-file-count", (e, count) => updateCount(count));

ipc.on("training-file-deleted", () => closeFile.click());

ipc.on("training-file-saved", () => save.classList.add("disabled"));

ipc.on("training-file-rename-warning", (e, response) => {
  const choice = remote.dialog.showMessageBoxSync(null, {
    type: "warning",
    buttons: ["Overwrite", "Cancel"],
    title: "Warning, overwrite file operation detected",
    message: "Warning, a file with the same name already exists",
    defaultId: 1
  });
  if (choice !== 1) {
    ipc.send("training-file-rename", response, true);
  }
});

ipc.on("training-file-rename-complete", (e, resp) => fileRenameSuccess(resp));

ipc.on("training-folder", (e, folder) => {
  remote.dialog.showOpenDialog(null, {
    title: "Select a file",
    buttonLabel: "Select training data",
    defaultPath: folder,
    properties: ["openFile"],
  }, file => {
    if (file === undefined || file[0] === undefined) {
      open.classList.remove("disabled");
      return; 
    }
    ipc.send("get-training-file", file[0]);
  });
});

ipc.send("get-entities");
ipc.send("get-training-file-count");

open.addEventListener("click", () => {
  ipc.send("get-training-folder");
  open.classList.add("disabled");
});

renameFile.addEventListener("input", debounce(checkInputFileRename, 500));

renameFileCheck.addEventListener("change", e => {
  e.target.checked
    ? renameFile.classList.remove("disabled")
    : renameFile.classList.add("disabled");
  if (!e.target.checked) {
    renameFile.value = "";
    renameFileSave.classList.add("disabled");
  } else {
    renameFile.focus();
  }
});

renameFileSave.addEventListener("click", e => {
  let newFilename = renameFile.value.trim();
  newFilename = newFilename.replace(/\.json/, "");
  newFilename = `${newFilename}.json`;
  ipc.send("training-file-rename", newFilename);
});

save.addEventListener("click", () => {
  dataEntry.normalize();
  const data = {
    text: dataEntry.textContent,
    entities: []
  };
  let markUp = he.decode(dataEntry.innerHTML);
  const tags = Array.from(dataEntry.children);
  let start = 0;
  while (tags.length > 0) {
    let i = markUp.indexOf("<nel-text-tag", start);
    data.entities.push({
      start: i,
      length: tags[0].textContent.length,
      label: tags[0].label,
      color: tags[0].color
    });
    markUp = markUp.replace(/<nel-text-tag.+?<\/nel-text-tag>/m, tags[0].textContent);
    tags.splice(0, 1);
    start = i + 5;
  }
  ipc.send("save-training-file", filename.textContent, data);
});

window.addEventListener("CancelNewEntityCreation", () => {
  tag.delete();
});

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

window.addEventListener("NewTrainingData", () => {
  open.classList.add("disabled");
  auto.classList.remove("disabled");
  closeFile.classList.remove("disabled");
  clearTags.classList.remove("disabled");
  deleteFile.classList.remove("disabled");
  save.classList.remove("disabled");
  if (filename.textContent === "") {
    ipc.send("get-temp-training-filename");
  }
});

window.addEventListener("ShowModalEntityPicker", () => {
  modal.setAttribute("open", "open");
});

window.addEventListener("UpdateTag", e => {
  tag.color = e.detail.color;
  tag.label = e.detail.label;
});