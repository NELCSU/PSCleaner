import validFilename from "valid-filename";
import { ipcRenderer as ipc, remote } from "electron";
import { one } from "@buckneri/js-lib-dom-selection";
import db from "debounce";

const clearButton = one("#btnClear");
const deleteButton = one("#btnDelete");
const saveButton = one("#btnSave");
const addFieldButton = one("#btnAddField");
const fileName = one("#txtFilename");
const templateList = one("#listTemplate");
const headerButton = one("#btnHeader");
const panel = one("#pnlAddTemplate");
const insertHere = one("#insertionPoint");
const modalView = one("#modalView");
const modalMessage = one(".modal-message");

/**
 * Adds another column to the document
 */
function addField(fieldName, selected) {
  const count = document.querySelectorAll("div.clone").length;
  const clone = document.getElementById("clone");
  const newField = clone.cloneNode(true);
  const txt = newField.querySelector("nel-text-input");
  const btn = newField.querySelector("nel-on-off");
  const del = newField.querySelector("#btnDelField");
  newField.id = `field_${count}`;
  txt.value = fieldName || "";
  btn.on = selected;
  insertHere.insertAdjacentElement("beforebegin", newField);
  newField.classList.remove("hidden");
  txt.addEventListener("input", db(checkForm, 750));
  del.addEventListener("click", deleteField);
  btn.addEventListener("click", checkForm);
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
  const fields = Array.from(panel.querySelectorAll("nel-text-input.clone"));
  if (fields.length === 0) {
    return;
  }
  let valid = true;
  fields.forEach((el) => {
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
  deleteButton.classList.add("disabled");
  saveButton.classList.add("disabled");
  fileName.value = "";
  templateList.selectedIndex = 0;
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
function deleteField(e) {
  const row = event.target.parentNode;
  row.parentNode.removeChild(row);
  checkForm();
}

/**
 * Displays screen prompt to confirm file deletion
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
    ipc.send("delete-template-file", templateList.options[templateList.selectedIndex].value);
  }
}

/**
 * Load form from template data
 */
function loadForm(file, data) {
  deleteButton.classList.remove("disabled");
  fileName.value = file;
  headerButton.on = data.header;
  data.fields.forEach(field => {
    addField(field[0], field[1]);
  });
}

/**
 * Saves template
 */
function saveFile() {
  const data = {
    header: headerButton.on ? true : false,
    fields: []
  }
  const rows = Array.from(panel.querySelectorAll("div.clone"));
  rows.forEach((r) => {
    const txt = r.querySelector("nel-text-input");
    const sen = r.querySelector("nel-on-off");
    data.fields.push([ txt.value, sen.on ? true : false ]);
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
  if (templateList.selectedIndex > 0) {
    ipc.send("get-template-file", templateList.options[templateList.selectedIndex].value);
  } else {
    clear();
  }
}

/**
 * Displays error message to user
 * @param {string} msg - message to display
 */
function showError(msg) {
  console.log(msg);
  modalMessage.innerHTML = msg;
  modalView.open = true;
  setTimeout(() => modalView.open = false, messageDelay);
}

addFieldButton.addEventListener("click", () => addField());
clearButton.addEventListener("click", clear);
deleteButton.addEventListener("click", deleteFile);
fileName.addEventListener("input", db(checkForm, 750));
saveButton.addEventListener("click", saveFile);
templateList.addEventListener("change", selectFile);

ipc.on("template-file", (e, file, data) => {
  removeFields();
  loadForm(file, data);
});

ipc.on("template-files", (e, files) => {
  Array.from(templateList.options)
    .forEach((option, i) => {
      if (i > 0){
        templateList.removeChild(option);
      }
    });
  let value = "";
  files.forEach((file, i) => {
    const option = document.createElement("option");
    option.value = file;
    option.text = file.replace(/\.json/, "");
    if (option.text === fileName.value) {
      value = option.text;
    }
    templateList.appendChild(option);
  });
  if (value) {
    templateList.value = value;
  }
});

ipc.on("template-file-deleted", _ => {
  clear();
  ipc.send("get-template-files");
});

ipc.on("template-file-saved", _ => {
  saveButton.classList.add("disabled");
  ipc.send("get-template-files");
});

ipc.send("get-template-files");
