import * as db from "debounce";
import * as he from "he";
import validFilename from "valid-filename";
import { clipboard, ipcRenderer as ipc, remote } from "electron";
import {
  rangeContiguous, rangeEmpty, selectionTrim
} from "@buckneri/js-lib-selection";

const cancelEntityButton = document.getElementById("btnEntityTagger") as HTMLButtonElement;
const closeButton = document.getElementById("btnCloseFile") as HTMLButtonElement;
const clearButton = document.getElementById("btnClearTags") as HTMLButtonElement;
const dataEntryText = document.getElementById("txtAddText") as HTMLElement;
const deleteButton = document.getElementById("btnDeleteTextFile") as HTMLButtonElement;
const files = document.getElementById("pnlFileName") as HTMLElement;
const filename = document.getElementById("lblFilename") as HTMLLabelElement;
const list = document.getElementById("lstEntityTagger") as HTMLSelectElement;
const modal = document.getElementById("mvEntityTagger") as any;
const openButton = document.getElementById("btnOpenText") as HTMLButtonElement;
const renameFileText = document.getElementById("lblRenameFile") as HTMLInputElement;
const renameFileTickbox = document.getElementById("chkFileRename") as HTMLInputElement;
const renameFileSave = document.getElementById("btnFileRename") as HTMLButtonElement;
const saveButton = document.getElementById("btnAddText") as HTMLButtonElement;
const traceButton = document.getElementById("btnTrace") as any;
const autodiscoverButton = document.getElementById("btnAutodiscover") as HTMLButtonElement;

let activeFile: string | null = null;
let tag: any = null;
let entityMap = new Map();

/**
 * Adds child element to list
 * @param list - list to append item to
 * @param label - annotation label
 * @param color - CSS color spec
 * @param options - custom attributes for <nel-list-item>
 */
function addEntity(list: HTMLElement, label: string, color: string, options: any) {
  const item = document.createElement("nel-list-item") as any;
  item.setAttribute("color", color);
  item.selectable = options.selectable;
  item.deletable = options.deletable;
  item.textContent = label;
  list.appendChild(item);
  return item;
}

/**
 * Adds <nel-text-tag> to selected text in DOM
 * @param selection - DOM text selection
 * @param label - text annotation
 * @param color - CSS color spec
 */
function addTag(selection: Selection, label?: string, color?: string) {
  const rng = selection.getRangeAt(0);
  const mark = document.createElement("nel-text-tag") as any;
  mark.setAttribute("label", label ? label : "Not defined");
  mark.setAttribute("color", color ? color : "#cccccc");
  mark.selectable = true;
  mark.deletable = true;
  mark.addEventListener("deleting", (ev: CustomEvent) => ev.detail.delete());
  mark.addEventListener("click", (e: MouseEvent) => {
    if (e.button !== 0) {
      e.stopPropagation();
    }
    const sel = window.getSelection();
    if (sel) {
      sel.removeAllRanges();
    }
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
  autodiscoverButton.textContent = "Searching";
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
  if (dataEntryText.textContent && dataEntryText.textContent.length > 0) {
    window.dispatchEvent(new CustomEvent("NewTrainingData"));
    const restore = insertionPoint();
    if (dataEntryText.childNodes.length > 1) {
      Array.from(dataEntryText.childNodes)
        .forEach((n: Node) => {
          let txt = n.textContent || "";
          n.textContent = txt.replace(/&nbsp;/gm, " ");
        });
      dataEntryText.normalize();
      restore();
    }
  }
}

/**
 * If filename is valid, enable the save button
 * @param e 
 */
function checkInputFileRename(e: Event) {
  if (validFilename((e.target as HTMLInputElement).value.trim())) {
    renameFileSave.classList.remove("disabled");
  } else {
    renameFileSave.classList.add("disabled");
  }
}

/**
 * Removes artificats from text that will impede recognition
 * @param text
 */
function cleanText(text: string): string {
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
  if (dataEntryText) {
    dataEntryText.innerHTML = dataEntryText.textContent as string;
  }
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
  dataEntryText.textContent = "";
  fileRenameClear();
  filename.textContent = "";
  files.hidden = true;
  activeFile = null;
}

/**
 * Returns a DOM text selection
 * @param node 
 * @param start 
 * @param length 
 */
function createSelection(node: Node, start: number, length: number): Selection {
  const range = document.createRange();
  range.setStart(node, start);
  range.setEnd(node, start + length);
  const sel = window.getSelection() as Selection;
  sel.removeAllRanges();
  sel.addRange(range);
  return sel;
}

/**
 * Displays a confirmation window prompting to delete file
 * If yes, sends IPC request to delete file
 */
function deleteFile() {
  const choice = remote.dialog.showMessageBoxSync(null as any, {
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
function insertionPoint(): Function {
  let sel = window.getSelection() as Selection;
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
 * @param e 
 */
function pasteText(e?: Event) {
  if (e) {
    e.preventDefault();
    e.stopPropagation();
  }
  let paste = clipboard.readText();
  paste = cleanText(paste);
  const sel = window.getSelection() as Selection;
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
    const sel = window.getSelection() as Selection;
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
  const ent: any[] = [];
  const data = {
    text: dataEntryText.textContent,
    entities: ent
  };
  let markUp = he.decode(dataEntryText.innerHTML);
  const tags: Element[] = Array.from(dataEntryText.children);
  while (tags.length > 0) {
    let i = markUp.indexOf("<nel-text-tag");
    const item = tags[0] as any;
    data.entities.push({
      start: i,
      length: item.textContent ? item.textContent.length : 0,
      label: item.label,
      color: item.color
    });
    markUp = markUp.replace(/<nel-text-tag.+?<\/nel-text-tag>/m, item.textContent || "");
    tags.splice(0, 1);
  }
  ipc.send("save-training-file", filename.textContent, data);
}

/**
 * Saves file as new filename
 * @param e 
 */
function saveNewFileName(e: Event) {
  let newFilename = renameFileText.value.trim();
  newFilename = newFilename.replace(/\.json/, "");
  newFilename = `${newFilename}.json`;
  ipc.send("rename-training-file", activeFile, newFilename);
}

/**
 * Enables/disables file rename panel
 * @param e 
 */
function toggleRenameFile(e: Event) {
  const el: HTMLInputElement = e.target as HTMLInputElement;
  el.checked
    ? renameFileText.classList.remove("disabled")
    : renameFileText.classList.add("disabled");
  if (!el.checked) {
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

ipc.on("entity-list", (e: Event, response: any[]) => {
  list.innerHTML = "";
  entityMap.clear();
  response.forEach(d => {
    entityMap.set(d.id, d);
    const el = addEntity(list, d.label, d.color, {
      deletable: false,
      selectable: true
    });
    el.addEventListener("click", (e: Event) => {
      const item = e.target as any;
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

ipc.on("NLP-response", (e: Event, response: any) => {
  autodiscoverButton.textContent = "Autodiscover";
  autodiscoverButton.classList.remove("disabled");
  autodiscoverButton.classList.remove("wait");
  dataEntryText.innerHTML = he.encode(dataEntryText.textContent || "");
  if (response.length > 0) {
    window.dispatchEvent(new CustomEvent("NewTrainingData"));
  }
  while (response.length > 0) {
    let item = response.pop();
    const sel = createSelection(dataEntryText.childNodes[0], item.match.start, item.match.length);
    addTag(sel, item.entity.label, item.entity.color);
  }
});

ipc.on("temp-training-filename", (_: any, response: any) => {
  activeFile = response;
  filename.textContent = response;
  files.hidden = false;
});

ipc.on("training-file", (_: any, file: string, dt: any) => {
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

ipc.on("training-file-deleted", (_: any) => closeButton.click());
ipc.on("training-file-saved", (_: any) => saveButton.classList.add("disabled"));

ipc.on("training-file-rename-warning", (_: any, response: any) => {
  const choice = remote.dialog.showMessageBoxSync(null as any, {
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

ipc.on("training-file-renamed", (_: any, file: string) => {
  activeFile = file;
  filename.textContent = file;
  fileRenameClear();
});

ipc.on("training-folder", (_: any, folder: string) => {
  remote.dialog.showOpenDialog(null as any, {
    title: "Select a file",
    buttonLabel: "Select training data",
    defaultPath: folder,
    properties: ["openFile"],
  }).then((f: any) => {
    if (f.filePaths === undefined || f.filePaths[0] === undefined) {
      openButton.classList.remove("disabled");
      return;
    }
    ipc.send("get-training-file", f.filePaths[0]);
  }).catch((err: string) => console.log(err));
});

ipc.on("NLP-trace", (_: any, n: boolean) => traceButton.on = n);

ipc.send("get-entities");
ipc.send("NLP-trace");

window.addEventListener("CancelNewEntityCreation", _ => tag.delete());

window.addEventListener("contextmenu", e => {
  const contextMenu = new remote.Menu();
  const sel = window.getSelection() as Selection;
  selectionTrim(sel);
  const rng = sel.rangeCount > 0 ? sel.getRangeAt(0) : null;
  const el = e.target as HTMLElement;
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

window.addEventListener("UpdateTag", (e: any) => {
  tag.color = e.detail.color;
  tag.label = e.detail.label;
});