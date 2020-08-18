import validFilename from "valid-filename";
import { ipcRenderer as ipc } from "electron";
import * as db from "debounce";
import { CSVField, CSVTemplate } from "../../backend/types/PSCleaner";

const clearButton = document.getElementById("btnClear") as HTMLButtonElement;
const deleteButton = document.getElementById("btnDelete") as HTMLButtonElement;
const saveButton = document.getElementById("btnSave") as HTMLButtonElement;
const addFieldButton = document.getElementById("btnAddField") as HTMLButtonElement;
const fileName = document.getElementById("txtFilename") as HTMLInputElement;
const headerButton = document.getElementById("btnHeader") as any;
const panel = document.getElementById("pnlAddTemplate") as HTMLElement;
const insertHere = document.getElementById("insertionPoint") as HTMLElement;
const traceButton = document.getElementById("btnTrace") as any;

/**
 * Adds another column to the document
 */
function addField(fieldName?: string, selected?: boolean) {
  const count = document.querySelectorAll("div.clone").length;
  const clone = document.getElementById("clone") as HTMLDivElement;
  const newField = clone.cloneNode(true) as HTMLElement;
  const txt = newField.querySelector("nel-text-input") as HTMLInputElement;
  const onoff = newField.querySelector("nel-on-off") as any;
  const del = newField.querySelector("img.delete") as HTMLButtonElement;
  const up = newField.querySelector("img.move-up") as HTMLButtonElement;
  const down = newField.querySelector("img.move-down") as HTMLButtonElement;
  newField.id = `field_${count}`;
  txt.value = fieldName || "";
  onoff.on = selected;
  insertHere.insertAdjacentElement("beforebegin", newField);
  newField.classList.remove("hidden");
  txt.addEventListener("input", db(checkForm, 750));
  del.addEventListener("click", deleteField);
  up.addEventListener("click", moveFieldUp);
  down.addEventListener("click", moveFieldDown);
  onoff.addEventListener("click", checkForm);
  return newField;
}

/**
 * Checks all form elements to ensure fields conform
 */
function checkForm() {
  saveButton.classList.add("disabled");
  if (!validFilename(fileName.value)) {
    return;
  }
  const fields: HTMLInputElement[] = Array.from(panel.querySelectorAll("nel-text-input.clone"));
  if (fields.length === 0) {
    return;
  }
  let valid = true;
  fields.forEach((el: HTMLInputElement) => {
    if (el.value === "") {
      valid = false;
    }
  });
  if (valid) {
    saveButton.classList.remove("disabled");
  }
}

/**
 * Clear the form
 */
function clear() {
  const tl = document.getElementById("listTemplate") as HTMLSelectElement;
  deleteButton.classList.add("disabled");
  saveButton.classList.add("disabled");
  traceButton.on = false;
  headerButton.on = false;
  fileName.value = "";
  tl.selectedIndex = 0;
  removeFields();
}

/**
 * Removes columns from form
 */
function removeFields() {
  headerButton.on = true;
  const remove = Array.from(panel.querySelectorAll("div.clone"));
  for (let i = remove.length - 1; i > -1; i--) {
    panel.removeChild(remove[i]);
  }
}

/**
 * Deletes row in form
 */
function deleteField() {
  const row = (window.event?.target as HTMLElement).parentNode as Node;
  if (row) {
    row.parentNode?.removeChild(row);
  }
  checkForm();
}

/**
 * Moves row up in form
 */
function moveFieldUp() {
  const row = (window.event?.target as HTMLElement).parentNode as HTMLElement;
  const up = row.querySelector(".move-up") as HTMLElement;
  const down = row.querySelector(".move-down") as HTMLElement;
  up.classList.remove("disabled");
  down.classList.remove("disabled");
  if (row && row.parentNode && row.previousSibling) {
    let prev = row.previousSibling as HTMLElement;
    const prev_up = prev.querySelector(".move-up") as HTMLElement;
    const prev_down = prev.querySelector(".move-down") as HTMLElement;
    prev_up.classList.remove("disabled");
    prev_down.classList.remove("disabled");
    if (prev.classList.contains("clone")) {
      row.parentNode.insertBefore(row.previousSibling, row);
      prev = row.previousSibling as HTMLElement;
      if (prev && !prev.classList.contains("clone")) {
        down.classList.add("disabled");
      }
    }
    checkForm();
  }
}

/**
 * Moves row down in form
 */
function moveFieldDown() {
  const row = (window.event?.target as HTMLElement).parentNode as HTMLElement;
  const up = row.querySelector(".move-up") as HTMLElement;
  const down = row.querySelector(".move-down") as HTMLElement;
  up.classList.remove("disabled");
  down.classList.remove("disabled");
  if (row && row.parentNode && row.nextSibling) {
    let next = row.nextSibling as HTMLElement;
    const next_up = next.querySelector(".move-up") as HTMLElement;
    const next_down = next.querySelector(".move-down") as HTMLElement;
    next_up.classList.remove("disabled");
    next_down.classList.remove("disabled");
    if (next.classList.contains("clone")) {
      row.parentNode.insertBefore(row.nextSibling, row);
      next = row.nextSibling as HTMLElement;
      if (next && !next.classList.contains("clone")) {
        down.classList.add("disabled");
      }
    }
    checkForm();
  }
}

/**
 * Displays screen prompt to confirm file deletion
 */
async function deleteFile() {
  const choice = await ipc.invoke("show-modal-input", {
    type: "warning",
    buttons: ["Delete", "Cancel"],
    title: "Warning, delete file operation detected",
    message: "Are you sure you wish to delete this file?",
    defaultId: 1
  });

  if (choice === 0) {
    const tl = document.getElementById("listTemplate") as HTMLSelectElement;
    ipc.send("delete-template-file", tl.options[tl.selectedIndex].value);
  }
}

/**
 * Load form from template data
 */
function loadForm(file: string, data: CSVTemplate) {
  deleteButton.classList.remove("disabled");
  fileName.value = file;
  headerButton.on = data.header;
  traceButton.on = data.trace;
  data.fields.forEach((field: CSVField) => {
    addField(field.label, field.enabled);
  });
}

/**
 * Saves template
 */
function saveFile() {
  const flds: any[] = [];
  const data: CSVTemplate = {
    fields: flds,
    header: headerButton.on ? true : false,
    trace: traceButton.on ? true : false
  };
  const rows = Array.from(panel.querySelectorAll("div.clone"));
  rows.forEach((r: any, n: number) => {
    const txt = r.querySelector("nel-text-input") as HTMLInputElement;
    const sen = r.querySelector("nel-on-off") as any;
    data.fields.push({
      enabled: sen.on ? true : false,
      label: txt.value,
      rules: undefined,
      seq: n
    });
  });
  let newFilename = fileName.value.trim();
  newFilename = newFilename.replace(/\.json/, "");
  newFilename = `${newFilename}.json`;
  ipc.send("save-template-file", fileName.value, data);
}

/**
 * Send request for file to be loaded
 */
function selectFile() {
  const tl = document.getElementById("listTemplate") as HTMLSelectElement;
  if (tl.selectedIndex > 0) {
    ipc.send("get-template-file", tl.options[tl.selectedIndex].value);
  } else {
    clear();
  }
}

addFieldButton.addEventListener("click", () => addField());
clearButton.addEventListener("click", clear);
deleteButton.addEventListener("click", deleteFile);
fileName.addEventListener("input", db(checkForm, 750));
headerButton.addEventListener("click", checkForm);
saveButton.addEventListener("click", saveFile);
traceButton.addEventListener("input", checkForm);
(document.getElementById("listTemplate") as HTMLElement).addEventListener("change", selectFile);

ipc.on("template-file", (_: any, file: string, data: any) => {
  removeFields();
  loadForm(file, data);
});

ipc.on("template-files", (_: any, files: string[]) => {
  const tl = document.getElementById("listTemplate") as HTMLSelectElement;
  Array.from(tl.options)
    .forEach((option, i) => {
      if (i > 0) {
        tl.removeChild(option);
      }
    });
  let value = "";
  files.forEach((file: string) => {
    const option = document.createElement("option");
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

ipc.on("template-file-deleted", (_: any) => {
  clear();
  ipc.send("get-template-files");
});

ipc.on("template-file-saved", (_: any) => {
  saveButton.classList.add("disabled");
  ipc.send("get-template-files");
});

ipc.send("get-template-files");
