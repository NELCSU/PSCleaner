import db from "debounce";
import he from "he";
import validFilename from "valid-filename";
import { clipboard, ipcRenderer as ipc, remote } from "electron";
import {
  rangeContiguous, rangeEmpty, selectionTrim
} from "@buckneri/js-lib-selection";

const cancelEntityButton = document.getElementById("btnEntityTagger");
const closeButton = document.getElementById("btnCloseFile");
const clearButton = document.getElementById("btnClearTags");
const dataEntryText = document.getElementById("txtAddText");
const deleteButton = document.getElementById("btnDeleteTextFile");
const files = document.getElementById("pnlFileName");
const filename = document.getElementById("lblFilename");
const list = document.getElementById("lstEntityTagger");
const modal = document.getElementById("mvEntityTagger");
const openButton = document.getElementById("btnOpenText");
const renameFileText = document.getElementById("lblRenameFile");
const renameFileTickbox = document.getElementById("chkFileRename");
const renameFileSave = document.getElementById("btnFileRename");
const saveButton = document.getElementById("btnAddText");
const traceButton = document.getElementById("btnTrace");
const autodiscoverButton = document.getElementById("btnAutodiscover");

let activeFile = null;
let tag = null;
let entityMap = new Map();

/**
 * Adds child element to list
 * @param {HTMLElement} list - list to append item to
 * @param {string} label - annotation label
 * @param {string} color - CSS color spec
 * @param {object} options - custom attributes for <nel-list-item>
 */
function addEntity(list, label, color, options) {
  const item = document.createElement("nel-list-item");
  item.setAttribute("color", color);
  item.selectable = options.selectable;
  item.deletable = options.deletable;
  item.textContent = label;
  list.appendChild(item);
  return item;
}

/**
 * Adds <nel-text-tag> to selected text in DOM
 * @param {Selection} selection - DOM text selection
 * @param {string} label - text annotation
 * @param {string} color - CSS color spec
 */
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

/**
 * Sends IPC request for current trace setting
 */
function adjustTrace() {
  ipc.send("NLP-trace", traceButton.on);
}

/**
 * Sends IPC request to identify entities
 */
function autoDiscover() {
  ipc.send("NLP-request", dataEntryText.textContent);
  autodiscoverButton.classList.add("disabled");
  autodiscoverButton.textContent = "Searching"
  autodiscoverButton.classList.add("wait");
}

/**
 * Cancels entity modal selection window
 */
function cancelEntityChoice() {
  window.dispatchEvent(new CustomEvent("CancelNewEntityCreation"));
  modal.removeAttribute("open");
}

/**
 * Checks new text entered into text window
 */
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

/**
 * If filename is valid, enable the save button
 * @param {Event} e 
 */
function checkInputFileRename(e) {
  if (validFilename(e.target.value.trim())) {
    renameFileSave.classList.remove("disabled");
  } else {
    renameFileSave.classList.add("disabled");
  }
}

/**
 * Removes artificats from text that will impede recognition
 * @param {string} text
 */
function cleanText(text) {
  text = text.replace(/(?:\r\n|\r|\n)/g, "<br>");
  text = text.replace(/\s+/g, " ");
  text = text.replace(/\s?[\-]\s?/g, "-");
  text = text.replace(/\s?[\/]\s?/g, "/");
  text = text.replace(/\s?[\\]\s?/g, "\\");
  text = text.replace(/<br>/g, "  ");
  return text;
}

/**
 * Removes entity tags from the text editor
 */
function clearTags() {
  dataEntryText.innerHTML = dataEntryText.textContent;
  clearButton.classList.add("disabled");
}

/**
 * Close current file and clear out text
 */
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

/**
 * Returns a DOM text selection
 * @param {Node} node 
 * @param {number} start 
 * @param {number} length 
 */
function createSelection(node, start, length) {
  const range = document.createRange();
  range.setStart(node, start);
  range.setEnd(node, start + length);
  const sel = window.getSelection();
  sel.removeAllRanges();
  sel.addRange(range);
  return sel;
}

/**
 * Displays a confirmation window prompting to delete file
 * If yes, sends IPC request to delete file
 */
function deleteFile() {
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

/**
 * Clears out the file rename panel
 */
function fileRenameClear() {
  renameFileTickbox.checked = false;
  renameFileText.classList.add("disabled");
  renameFileText.value = "";
  renameFileSave.classList.add("disabled");
}

/**
 * Reposition cursor insertion point back point of text entry
 */
function insertionPoint() {
  let sel = window.getSelection();
  const node = sel.focusNode;
  const offset = sel.focusOffset;
  return function restore() {
    sel.collapse(node, offset);
  };
}

/**
 * Send IPC request to get folder path
 */
function openFile() {
  ipc.send("get-training-folder");
  openButton.classList.add("disabled");
}

/**
 * Pastes text from clipboard into text editor
 * @param {Event} e 
 */
function pasteText(e) {
  if (e) {
    e.preventDefault();
    e.stopPropagation();
  }
  let paste = clipboard.readText();
  paste = cleanText(paste);
  const sel = window.getSelection();
  if (!sel.rangeCount) {
    dataEntryText.normalize();
    return false;
  }
  sel.deleteFromDocument();
  sel.getRangeAt(0).insertNode(document.createTextNode(paste));
  clearTags();
  checkInput();
}

/**
 * Hack to resolve trailing whitespace in text editor
 */
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

/**
 * Parses entities in text editor, creates and saves object as file
 */
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

/**
 * Saves file as new filename
 * @param {Event} e 
 */
function saveNewFileName(e) {
  let newFilename = renameFileText.value.trim();
  newFilename = newFilename.replace(/\.json/, "");
  newFilename = `${newFilename}.json`;
  ipc.send("rename-training-file", activeFile, newFilename);
}

/**
 * Enables/disables file rename panel
 * @param {Event} e 
 */
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

ipc.on("entity-list", (e, response) => {
  list.innerHTML = "";
  entityMap.clear();
  response.forEach(d => {
    entityMap.set(d.id, d);
    const el = addEntity(list, d.domain, d.color, {
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
  dataEntryText.innerHTML = he.encode(dataEntryText.textContent);
  if (response.length > 0) {
    window.dispatchEvent(new CustomEvent("NewTrainingData"));
  }
  while (response.length > 0) {
    var item = response.pop();
    item.len = item.len ? item.len : item.end - item.start;
    const sel = createSelection(dataEntryText.childNodes[0], item.start, item.length);
    addTag(sel, item.entity.label, item.entity.color);
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

ipc.on("NLP-trace", (_, n) => traceButton.on = n);

ipc.send("get-entities");
ipc.send("NLP-trace");

window.addEventListener("CancelNewEntityCreation", _ => tag.delete());

window.addEventListener("contextmenu", e => {
  const contextMenu = new remote.Menu();
  const sel = window.getSelection();
  selectionTrim(sel);
  const rng = sel.rangeCount > 0 ? sel.getRangeAt(0) : null;
  const el = e.target;
  let displayMenu = false;

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
    displayMenu = true;
  } else if (el.id === "txtAddText") {
    if (rng && rangeContiguous(rng) && !rangeEmpty(rng)) {
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
      displayMenu = true;
    } else if (typeof clipboard.readText() === "string") {
      e.stopPropagation();
      contextMenu.append(
        new remote.MenuItem({
          label: "Paste",
          click() {
            pasteText();
          }
        })
      );
      displayMenu = true;
    }
  }

  if (displayMenu) {
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