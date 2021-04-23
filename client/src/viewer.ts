import * as db from "debounce";
import * as he from "he";
import { clipboard, ipcRenderer as ipc } from "electron";
import { normalize, selectionTrim } from "@buckneri/string";

const clearAllButton = document.getElementById("btnClearAll") as HTMLButtonElement;
const clearTagsButton = document.getElementById("btnClearTags") as HTMLButtonElement;
const dataEntryText = document.getElementById("txtAddText") as HTMLElement;
const autodiscoverButton = document.getElementById("btnAutodiscover") as HTMLButtonElement;
const debugText = document.getElementById("txtDebug") as HTMLElement;

let tag: any = null;

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
 * Sends IPC request to identify entities
 */
function autoDiscover() {
  ipc.send("NLP-request", dataEntryText.textContent);
  autodiscoverButton.classList.add("disabled");
  autodiscoverButton.textContent = "Searching";
  autodiscoverButton.classList.add("wait");
  debugText.innerHTML = "debug<br>-----<br>";
}

/**
 * Checks new text entered into text window
 */
function checkInput() {
  if (dataEntryText.textContent && dataEntryText.textContent.length > 0) {
    window.dispatchEvent(new CustomEvent("NewData"));
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
 * Removes entity tags from the text editor
 */
function clearTags() {
  if (dataEntryText) {
    dataEntryText.innerHTML = dataEntryText.textContent as string;
  }
  debugText.innerHTML = "debug<br>-----<br>";
  clearTagsButton.classList.add("disabled");
}

/**
 * Close current file and clear out text
 */
function clearAll() {
  autodiscoverButton.classList.add("disabled");
  clearAllButton.classList.add("disabled");
  clearTagsButton.classList.add("disabled");
  dataEntryText.textContent = "";
  debugText.innerHTML = "debug<br>-----<br>";
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
 * Pastes text from clipboard into text editor
 * @param e 
 */
function pasteText(e?: Event) {
  if (e) {
    e.preventDefault();
    e.stopPropagation();
  }
  let paste = clipboard.readText();
  paste = normalize(paste);
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

autodiscoverButton.addEventListener("click", autoDiscover);
clearTagsButton.addEventListener("click", clearTags);
clearAllButton.addEventListener("click", clearAll);
dataEntryText.addEventListener("click", resetTextSelection);
dataEntryText.addEventListener("input", db(checkInput, 700));
dataEntryText.addEventListener("paste", pasteText);

ipc.on("NLP-response", (_: Event, response: any) => {
  autodiscoverButton.textContent = "Autodiscover";
  autodiscoverButton.classList.remove("disabled");
  autodiscoverButton.classList.remove("wait");
  dataEntryText.innerHTML = he.encode(dataEntryText.textContent || "");
  if (response.length > 0) {
    window.dispatchEvent(new CustomEvent("NewData"));
  }
  while (response.length > 0) {
    let item = response.pop();
    const sel = createSelection(dataEntryText.childNodes[0], item.match.start, item.match.length);
    addTag(sel, item.entity.label, item.entity.color);

    if (item.debug) {
      debugText.innerHTML += `<div>${item.debug}</div>`;
    }
  }
});

ipc.send("get-entities");

ipc.on("context-menu-action", (_: any, action: string) => {
  if (action === "Delete") {
    tag.delete();
    window.dispatchEvent(new CustomEvent("NewData"));
  } else if (action === "Paste") {
    pasteText();
  }
});

window.addEventListener("contextmenu", e => {
  e.preventDefault();

  const sel = window.getSelection() as Selection;
  selectionTrim(sel);
  const el = e.target as HTMLElement;

  if (el.tagName === "NEL-TEXT-TAG") {
    e.stopPropagation();
    tag = el;
    ipc.send("show-context-menu", "delete-element");
  } else if (el.id === "txtAddText") {
    if (typeof clipboard.readText() === "string") {
      e.stopPropagation();
      ipc.send("show-context-menu", "paste-text");
    }
  }
});

window.addEventListener("NewData", _ => {
  autodiscoverButton.classList.remove("disabled");
  clearAllButton.classList.remove("disabled");
  clearTagsButton.classList.remove("disabled");
});

window.addEventListener("UpdateTag", (e: any) => {
  tag.color = e.detail.color;
  tag.label = e.detail.label;
});