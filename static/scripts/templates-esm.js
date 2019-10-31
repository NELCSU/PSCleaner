import validFilename from "valid-filename";
import { ipcRenderer as ipc, remote } from "electron";
import { one } from "@buckneri/js-lib-dom-selection";
import db from "debounce";

const closeButton = one("#btnCloseFile");
const deleteButton = one("#btnDeleteTextFile");
const saveButton = one("#btnAddText");
const addFieldButton = one("#btnAddField");
const fileName = one("#txtFilename");
const templateList = one("#listTemplate");

/**
 * Adds another column to the document
 */
function addField() {
  const count = document.querySelectorAll("div.clone").length;
  const clone = document.getElementById("clone");
  const newField = clone.cloneNode(true);
  newField.id = `field_${count}`;
  clone.insertAdjacentElement("afterend", newField);
  newField.classList.remove("hidden");
  const txt = newField.querySelector("nel-text-input");
  txt.addEventListener("input", db(checkForm, 750));
}

/***
 * Checks all form elements to ensure fields conform
 */
function checkForm() {
  saveButton.disabled = true;
  if (!validFilename(fileName.textContent)) {
    return;
  }
  Array.from(document.querySelectorAll(".clone"))
    .forEach((el) => {
      if (el.textContent === "") {
        return;
      }
    });
  saveButton.disabled = false;
}

/***
 * Clear the form
 */
function closeFile() {
  closeButton.classList.add("disabled");
  deleteButton.classList.add("disabled");
  saveButton.classList.add("disabled");  
  fileName.textContent = "";
  templateList.selectedIndex = 0;
}

/***
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
    ipc.send("delete-template-file", filename.textContent);
  }
}

/***
 * Saves template
 */
function saveFile() {
  if (!validFilename(fileName.textContent)) {
    showError("Please enter a valid file name");
    fileName.focus();
    return;
  }
  ipc.send("save-template-file", fileName.textContent, data);
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

addFieldButton.addEventListener("click", addField);
closeButton.addEventListener("click", closeFile);
deleteButton.addEventListener("click", deleteFile);
openButton.addEventListener("click", openFile);
fileName.addEventListener("input", db(checkForm, 500));
saveButton.addEventListener("click", saveFile);

ipc.on("template-file-deleted", _ => closeButton.click());
ipc.on("template-file-saved", _ => saveButton.classList.add("disabled"));
