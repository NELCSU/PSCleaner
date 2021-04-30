import * as db from "debounce";
import { clipboard, ipcRenderer as ipc } from "electron";
import { normalize, selectionTrim } from "@buckneri/string";

(function DebugConsole() {
  const txt = document.getElementById("txtDebug") as HTMLElement;
  const reset = () => txt.innerHTML = "debug<br>-----<br>";
  window.addEventListener("search-text", reset);
  window.addEventListener("clear-tags", reset);
  window.addEventListener("clear-all", reset);
  window.addEventListener("result-text", (e: CustomEvent) => {
    txt.innerHTML += `<div>${e.detail}</div>`;
  });
})();

(function AutoDiscover() {
  const btn = document.getElementById("btnAutodiscover") as HTMLButtonElement;
  btn.addEventListener("click", () => {
    enable();
    window.dispatchEvent(new CustomEvent("search-text"));
  });
  window.addEventListener("clear-tags", reset);
  window.addEventListener("clear-all", resetAll);
  window.addEventListener("result-text", reset);
  window.addEventListener("new-data", reset);
  function enable() {
    btn.classList.add("disabled", "wait");
    btn.innerText = "Searching";
  }
  function reset() {
    btn.innerText = "Autodiscover";
    btn.classList.remove("disabled", "wait");
  }
  function resetAll() {
    reset();
    btn.classList.add("disabled");
  }
})();

(function ClearAll() {
  const btn = document.getElementById("btnClearAll") as HTMLButtonElement;
  const enable = () => btn.classList.remove("disabled");
  const reset = () => btn.classList.add("disabled");
  btn.addEventListener("click", () => {
    reset();
    window.dispatchEvent(new CustomEvent("clear-all"));
  });
  window.addEventListener("new-data", enable);
})();

(function ClearTags() {
  const btn = document.getElementById("btnClearTags") as HTMLButtonElement;
  const enable = () => btn.classList.remove("disabled");
  const reset = () => btn.classList.add("disabled");
  btn.addEventListener("click", clearTags);
  window.addEventListener("new-data", enable);
  window.addEventListener("clear-all", reset);
  window.addEventListener("please-clear-tags", clearTags);
  function clearTags() {
    reset();
    window.dispatchEvent(new CustomEvent("clear-tags"));
  }
})();

(function TextEntry() {
  const txt = document.getElementById("txtAddText") as HTMLElement;
  let strings: string[] = [];
  let cursor = 0;

  function reset(): void {
    const arr = Array.from(txt.childNodes);
    for (let i = arr.length - 1; i >= 0; i--) {
      if (arr[i].nodeType === Node.ELEMENT_NODE) {
        if (arr[i].nodeName !== "BR") {
          txt.replaceChild(document.createTextNode(arr[i].textContent), arr[i]);
        }
      } else if (arr[i].nodeType === Node.TEXT_NODE) {
        arr[i].textContent = arr[i].textContent.replace(/&nbsp;/gm, " ");
      }
    }
    txt.normalize();
  }
  const erase = () => txt.innerText = "";
  txt.addEventListener("click", () => {
    const re = />$/;
    const match = txt.innerHTML.match(re);
    if (match) {
      const sel = window.getSelection() as Selection;
      const nbsp = document.createTextNode("\u00A0");
      txt.appendChild(nbsp);
      if (sel.focusNode === null) {
        sel.collapse(nbsp, 0);
      }
    }
  });
  txt.addEventListener("input", db(() => {
    if (txt.innerText?.length > 0) {
      window.dispatchEvent(new CustomEvent("new-data"));
    }
  }, 700));
  window.addEventListener("paste", pasteText);
  window.addEventListener("new-data-paste", pasteText);
  window.addEventListener("clear-tags", reset);
  window.addEventListener("clear-all", erase);
  window.addEventListener("search-text", () => {   
    reset();
    cursor = 0;
    txt.childNodes.forEach(n => {
      if (n.nodeType === Node.TEXT_NODE) {
        strings.push(n.textContent);
      }
    });
    ipc.send("NLP-request", strings[cursor]);
  });

  ipc.on("NLP-response", (_: Event, response: any) => {
    while (response.length > 0) {
      let item = response.pop();
      let before = item.match.start === 0 ? "" : strings[cursor].substr(0, item.match.start);
      let after = item.match.start + item.match.length + 1 > strings[cursor].length ? "" : strings[cursor].substr(item.match.start + item.match.length);
      let segment = strings[cursor].substr(item.match.start, item.match.length);
      segment = `<nel-text-tag color="${item.entity.color}" label="${item.entity.label}" selectable deletable>${segment}</nel-text-tag>`;
      strings[cursor] = before + segment + after;
      if (item.debug) {
        window.dispatchEvent(new CustomEvent("result-text", { detail: item.debug }));
      }
    }
    ++cursor;
    if (strings.length === cursor) {
      txt.innerHTML = "";
      while (strings.length) {
        txt.innerHTML += strings.shift() + "<br>";
      }
      window.dispatchEvent(new CustomEvent("new-data"));
    } else {
      ipc.send("NLP-request", strings[cursor]);
    }
  });

  function createLineBreaks(n: Node, parent: Node): void {
    if (n.nodeType === Node.TEXT_NODE) {
      let pos = (n as Text).textContent.search(/<br>/);
      if (pos > -1) {
        const br = document.createElement("br");
        const last = (n as Text).splitText(pos);
        last.textContent = last.textContent.replace(/^<br>/,"");
        parent.insertBefore(br, last);
        createLineBreaks(last, parent);
      } else if (n.nextSibling) {
        createLineBreaks(n.nextSibling, parent);
      }
    }
  }

  function pasteText(e?: Event) {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    const sel = window.getSelection() as Selection;
    let paste = clipboard.readText();
    paste = normalize(paste);
    paste = paste.replace(/[\r\n]/gm, "<br>");
    sel.deleteFromDocument();
    sel.getRangeAt(0).insertNode(document.createTextNode(paste));
    createLineBreaks(txt.firstChild, txt);
    window.dispatchEvent(new CustomEvent("please-clear-tags"));
    window.dispatchEvent(new CustomEvent("new-data"));
  }

  /*
   * Saves the cursor's position and returns a function
   * that when run, sets the cursor to the saved position
   */
  /*
  function insertionPoint(): Function {
    let sel = window.getSelection() as Selection;
    const node = sel.focusNode;
    const offset = sel.focusOffset;
    return function restore() {
      sel.collapse(node, offset);
    };
  }*/
/*
  function createSelection(node: Node, start: number, length: number): Selection {
    const range = document.createRange();
    range.setStart(node, start);
    range.setEnd(node, start + length);
    const sel = window.getSelection() as Selection;
    sel.removeAllRanges();
    sel.addRange(range);
    return sel;
  }*/
})();

(function ContextMenu() {
  let tag: any = null;

  ipc.on("context-menu-action", (_: any, action: string) => {
    if (action === "Delete") {
      tag.delete();
      window.dispatchEvent(new CustomEvent("new-data"));
    } else if (action === "Paste") {
      window.dispatchEvent(new CustomEvent("new-data-paste"));
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
})();
