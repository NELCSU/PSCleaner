import * as db from "debounce";
import * as he from "he";
import { clipboard, ipcRenderer as ipc, remote } from "electron";
import { selectionTrim } from "@buckneri/js-lib-selection";
import { normalize } from "@buckneri/string";

const clearAllButton = document.getElementById("btnClearAll") as HTMLButtonElement;
const clearTagsButton = document.getElementById("btnClearTags") as HTMLButtonElement;
const dataEntryText = document.getElementById("txtAddText") as HTMLElement;
const traceButton = document.getElementById("btnTrace") as any;
const autodiscoverButton = document.getElementById("btnAutodiscover") as HTMLButtonElement;

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
traceButton.addEventListener("input", adjustTrace);

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
  }
});

ipc.on("NLP-trace", (_: any, n: boolean) => traceButton.on = n);

ipc.send("get-entities");
ipc.send("NLP-trace");

window.addEventListener("contextmenu", e => {
  const contextMenu = new remote.Menu();
  const sel = window.getSelection() as Selection;
  selectionTrim(sel);
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
          window.dispatchEvent(new CustomEvent("NewData"));
        }
      })
    );
    displayMenu = true;
  } else if (el.id === "txtAddText") {
    if (typeof clipboard.readText() === "string") {
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

window.addEventListener("NewData", _ => {
  autodiscoverButton.classList.remove("disabled");
  clearAllButton.classList.remove("disabled");
  clearTagsButton.classList.remove("disabled");
});

window.addEventListener("UpdateTag", (e: any) => {
  tag.color = e.detail.color;
  tag.label = e.detail.label;
});