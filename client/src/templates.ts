import validFilename from "valid-filename";
import { ipcRenderer as ipc } from "electron";
import * as db from "debounce";
import { right } from "@buckneri/string";
import { CSVField, CSVTemplate, Entity } from "../../backend/types/PSCleaner";

let currentTemplate = "";

const listTemplate = document.getElementById("listTemplate") as HTMLSelectElement;
const btnAddField1 = document.getElementById("btnAddField1") as HTMLButtonElement;
const btnAddField2 = document.getElementById("btnAddField2") as HTMLButtonElement;
const btnClear = document.getElementById("btnClear") as HTMLButtonElement;
const btnDelete = document.getElementById("btnDelete") as HTMLButtonElement;
const btnSave = document.getElementById("btnSave") as HTMLButtonElement;
const expAdvanced = document.getElementById("expand-advanced") as any;
const expFields = document.getElementById("expand-fields") as any;
const panel = document.getElementById("pnlAddTemplate") as HTMLElement;
const panelEntities = document.getElementById("entities") as HTMLDivElement;
const insertHere = document.getElementById("insertionPoint") as HTMLElement;
const togHeader = document.getElementById("btnHeader") as any;
const togTrace = document.getElementById("btnTrace") as any;
const txtFilename = document.getElementById("txtFilename") as HTMLInputElement;

function addField(field?: CSVField) {
  const count = document.querySelectorAll("div.clone").length;
  const clone = document.getElementById("clone-field") as HTMLDivElement;
  const newField = clone.cloneNode(true) as HTMLElement;
  const txt = newField.querySelector("nel-text-input") as HTMLInputElement;
  const onoff = newField.querySelector("nel-on-off") as any;
  const del = newField.querySelector("img.delete") as HTMLButtonElement;
  const up = newField.querySelector("img.move-up") as HTMLButtonElement;
  const down = newField.querySelector("img.move-down") as HTMLButtonElement;
  newField.id = `field_${count}`;
  newField.dataset.position = `${count}`;
  txt.value = field?.label || "";
  onoff.on = field?.enabled;
  insertHere.appendChild(newField);
  newField.classList.remove("hidden");
  del.addEventListener("click", deleteField);
  up.addEventListener("click", moveFieldUp);
  down.addEventListener("click", moveFieldDown);
  txt.addEventListener("input", db(() => checkForm(), 750));
  recalcUpDownControls();
  checkForm();
  return newField;
}

function deleteField(event: Event) {
  event.stopImmediatePropagation();
  const row = (event.target as HTMLElement).parentNode as HTMLElement;
  if (row) {
    row.parentNode?.removeChild(row);
  }
  recalcUpDownControls();
  checkForm();
}

function moveFieldDown() {
  const row = (window.event?.target as HTMLElement).parentNode as HTMLElement;
  if (row && row.parentNode && row.nextSibling) {
    row.parentNode.insertBefore(row.nextSibling, row);
    recalcUpDownControls();
    checkForm();
  }
}

function moveFieldUp() {
  const row = (window.event?.target as HTMLElement).parentNode as HTMLElement;
  if (row && row.parentNode && row.previousSibling) {
    row.parentNode.insertBefore(row, row.previousSibling);
    recalcUpDownControls();
    checkForm();
  }
}

function recalcUpDownControls() {
  Array.from(insertHere.children).forEach((e: HTMLElement, i: number) => {
    e.dataset.position = `${i}`;
    if (i === 0) {
      e.querySelector(".move-up")?.classList.add("disabled");
      e.querySelector(".move-down")?.classList.remove("disabled");
    } else if (e.nextSibling === null) {
      e.querySelector(".move-up")?.classList.remove("disabled");
      e.querySelector(".move-down")?.classList.add("disabled");
    } else {
      e.querySelector(".move-up")?.classList.remove("disabled");
      e.querySelector(".move-down")?.classList.remove("disabled");
    }
  });
}

function checkForm() {
  let ok = true;
  let errors = new Set<string>();
  btnSave.classList.add("disabled");
  const fields: HTMLInputElement[] = Array.from(panel.querySelectorAll("nel-text-input.clone"));
  panel.title = "";

  if (fields.length === 0) {
    errors.add("• This template requires at least one field");
    ok = false;
  } else {
    for (let i = 0; i < fields.length; i++) {
      if (fields[i].value === "") {
        errors.add("• One or more columns require a label");
        fields[i].classList.add("error");
        ok = false;
      } else {
        fields[i].classList.remove("error");
      }
    }

    let fn = "";
    txtFilename.classList.remove("error");
    if (txtFilename.value === undefined) {
      ok = false;
      txtFilename.classList.add("error");
      errors.add("• Please enter a valid filename");
    } else {
      fn = txtFilename.value?.trim();
      fn = fn.replace(/\.json/, "");
      if (!validFilename(fn)) {
        ok = false;
        txtFilename.classList.add("error");
        errors.add("• Please enter a valid filename");
      }
      fn = `${fn}.json`;
    }
  }

  if (!ok) {
    for (const e of errors.values()) {
      panel.title += `${e}\n`;
    }
    btnSave.classList.add("disabled");
    return;
  }

  btnSave.classList.remove("disabled");
}

function clearFormAll() {
  listTemplate.selectedIndex = 0;
  currentTemplate = "";
  clearForm();
}

function clearForm() {
  btnDelete.classList.add("disabled");
  btnSave.classList.add("disabled");
  togHeader.on = false;
  togTrace.on = false;
  txtFilename.value = "";
  while (insertHere.children.length > 0) {
    insertHere.removeChild(insertHere.children[0]);
  }
  expFields.open = false;
  const entities = Array.from(panelEntities.querySelectorAll(".entity"));
  entities.forEach((el: any) => el.on = true);
  expAdvanced.open = false;
  const errors = Array.from(panel.querySelectorAll(".error"));
  while (errors.length > 0) {
    const error = errors.pop();
    error?.classList.remove("error");
  }
}

async function onDeleteTemplate() {
  const choice = await ipc.invoke("show-modal-input", {
    type: "warning",
    buttons: ["Delete", "Cancel"],
    title: "Warning, delete file operation detected",
    message: "Are you sure you wish to delete this file?",
    defaultId: 1
  });

  if (choice === 0) {
    ipc.send("delete-template-file", listTemplate.options[listTemplate.selectedIndex].value);
  }
}

function onDocumentDrop(e: DragEvent) {
  e.preventDefault(); 
  e.stopPropagation(); 
  for (const f of (e.dataTransfer as any).files) {
    if (right(f.path, 3) === "csv") {
      ipc.send("define-template", f.path);
    }
  }
}

function onDocumentOver(e: DragEvent) { e.preventDefault(); }

function onDocumentParse(_: any, cols: string[]) {
  clearForm();
  togHeader.on = true;
  cols.forEach((c, i) => {
    let csv: CSVField = { label: c, enabled: false, seq: i };
    addField(csv);
  });
  expFields.open = true;
}

function onLoadEntities(_: any, data: Entity[]) {
  data.forEach((entity: Entity) => {
    panelEntities.innerHTML += `<div class="flex-r pad3 vcenter wide push-apart">
      <nel-list-item color="${entity.color}">${entity.description}</nel-list-item>
      <nel-on-off class="entity" id="${entity.id}" size="3" on></nel-on-off>
    </div>`;
  });
}

function onLoadForm(file: string, data: CSVTemplate) {
  txtFilename.value = file;

  togTrace.on = data.trace;
  togHeader.on = data.header;

  data.fields.forEach((f: CSVField) => addField(f));
  expFields.open = true;

  const entities = Array.from(panelEntities.querySelectorAll(".entity"));
  entities.forEach((el: any) => el.on = true);
  if (data.exclusions) {
    data.exclusions.forEach((id: string) => {
      const entity = document.getElementById(id) as any;
      entity.on = false;
    });
  }
}

function onLoadTemplates (_: any, files: string[]) {
  let selected = "";
  Array.from(listTemplate.options).forEach((opt, i) => { if (i > 0) { listTemplate.removeChild(opt); } });
  files.forEach((file: string) => {
    const option = document.createElement("option");
    option.value = file;
    option.text = file.replace(/\.json/, "");
    listTemplate.appendChild(option);
    if (file === currentTemplate) {
      selected = currentTemplate.replace(/\.json/, "");
    }
  });
  if (selected) {
    listTemplate.value = selected;
  }
}

function onTemplateChanged (_: any, file: string, data: any){
  onLoadForm(file, data);
}

function onTemplateSave() {
  let fn: string = txtFilename.value;
  let data: CSVTemplate | undefined = {
    exclusions: [],
    fields: [],
    header: togHeader.on ? true : false,
    trace: togTrace.on ? true : false
  };

  const rows = Array.from(panel.querySelectorAll("div.clone"));
  rows.forEach((r: any, n: number) => {
    const txt = r.querySelector("nel-text-input") as HTMLInputElement;
    const sen = r.querySelector("nel-on-off") as any;
    data?.fields.push({
      enabled: sen.on ? true : false,
      label: txt.value,
      seq: n
    });
  });

  const entities = Array.from(panelEntities.querySelectorAll(".entity"));
  entities.forEach((el: any) => {
    if (el.on === false) {
      data?.exclusions?.push(el.id);
    }
  });

  ipc.send("save-template-file", fn, data);
}

function onTemplateSaved(_: any) {
  btnSave.classList.add("disabled");
  currentTemplate = txtFilename.value;
  ipc.send("get-template-files");
}

function onTemplateSelect() {
  clearForm();
  if (listTemplate.selectedIndex > 0) {
    btnDelete.classList.remove("disabled");
    ipc.send("get-template-file", listTemplate.options[listTemplate.selectedIndex].value);
  }
}

function onTemplateDeleted(_: any) {
  clearForm();
  ipc.send("get-template-files");
}

btnAddField1.addEventListener("click", () => addField());
btnAddField2.addEventListener("click", () => addField());
btnClear.addEventListener("click", clearFormAll);
btnDelete.addEventListener("click", onDeleteTemplate);
btnSave.addEventListener("click", onTemplateSave);
listTemplate.addEventListener("change", onTemplateSelect);
txtFilename.addEventListener("input", db(() => checkForm(), 750));

document.addEventListener("dragover", onDocumentOver);
document.addEventListener("drop", onDocumentDrop);

window.addEventListener("changed", checkForm);
window.addEventListener("input", db(() => checkForm(), 750));

ipc.on("define-template", onDocumentParse);
ipc.on("template-file-deleted", onTemplateDeleted);
ipc.on("template-file-saved", onTemplateSaved);
ipc.on("entity-list", onLoadEntities);
ipc.on("template-file", onTemplateChanged);
ipc.on("template-files", onLoadTemplates);

ipc.send("get-entities");
ipc.send("get-template-files");
