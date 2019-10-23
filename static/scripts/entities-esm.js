import db from "debounce";
import { ipcRenderer as ipc } from "electron";
import { one } from "@buckneri/js-lib-dom-selection";
import uuidv1 from "uuid/v1";

const entityList = one("#lstManageEntities");
const title = one("#title");
const entityCount = one("#hintEntityCount");

const entityId = one("#txtEntityId");
const entityColor = one("#txtEntityColor");
const entityLabel = one("#txtEntityLabel");
const entityDomain = one("#txtEntityDomain");
const entityMask = one("#txtEntityMask");
const entityJoinable = one("#txtEntityJoinable");
const entityType = one("#lblEntityType");
const entityRegEx = one("#txtEntityRegex");

const saveButton = one("#btnEntitySave");
const clearButton = one("#btnEntityCancel");
const deleteButton = one("#btnEntityDelete");
let dataset = {};

function addEntity(list, data) {
  const item = document.createElement("nel-list-item");
  item.setAttribute("color", data.color);
  item.selectable = true;
  item.deletable = false;
  item.id = "id_" + uuidv1();
  item.dataset.id = data.id;
  item.dataset.domain = data.domain;
  item.dataset.joinable = data.joinable;
  item.dataset.mask = data.mask;
  item.dataset.type = data.type;
  item.dataset.reg_ex = data.reg_ex;
  item.textContent = data.label;
  list.appendChild(item);
  return item;
}

function deleteSelection() {
  let tag = one(`#${deleteButton.dataset.id}`);
  if (tag) {
    tag.delete();
    tag = null;    
  }
  return tag;
}

function toggleSaveEntity() {
  if (entityLabel.value === "" || !entityJoinable.on ||
      entityMask.value === "" || entityType.selectedIndex === 0 ||
     (!entityRegEx.disabled && entityRegEx.value === "")) {
    saveButton.classList.add("disabled");
  } else {
    saveButton.classList.remove("disabled");
  }
}

async function updateCount() {
  const n = entityList.children.length;
  entityCount.textContent = (n === 0
    ? "No entities"
    : n === 1
      ? `${n} entity`
      : `${n} entities`) + " found";  
}

clearButton.addEventListener("click", () => {
  title.textContent = "Add an entity";
  entityColor.value = "#cccccc";
  entityLabel.value = "";
  entityJoinable.on = false;
  entityDomain.value = "";
  entityMask.value = "";
  entityId.value = "";
  entityRegEx.value = "";
  entityLabel.disabled = false;
  entityMask.disabled = false;
  entityJoinable.disabled = false;
  entityDomain.disabled = false;
  entityRegEx.disabled = false;
  deleteButton.classList.add("disabled");
  deleteButton.dataset.id = null;
  entityType.selectedIndex = 0;
  entityType.dispatchEvent(new Event("change"));
  entityType.disabled = false;
  toggleSaveEntity();
  entityLabel.focus();
});

entityColor.addEventListener("change", toggleSaveEntity);

deleteButton.addEventListener("click", () => {
  let tag = one(`#${deleteButton.dataset.id}`);
  ipc.send("delete-entity", tag.dataset.id);
});

entityList.addEventListener("selected", e => {
  setTimeout(() => {
    const regex = 
    entityColor.value = e.detail.color;
    title.textContent = `Editing ${e.detail.textContent}`;
    entityLabel.value = e.detail.textContent;
    entityDomain.value = e.detail.dataset.domain;
    entityJoinable.on = e.detail.dataset.joinable === "1" ? true : false;
    entityMask.value = e.detail.dataset.mask;
    entityRegEx.value = e.detail.dataset.reg_ex;
    entityId.value = e.detail.dataset.id;
    entityType.value = e.detail.dataset.type;
    entityType.dispatchEvent(new Event("change"));
    entityLabel.disabled = false;
    entityJoinable.disabled = false;
    entityMask.disabled = false;
    entityRegEx.disabled = false;
    entityType.disabled = false;
    deleteButton.classList.remove("disabled");    
    deleteButton.dataset.id = e.detail.id;
    toggleSaveEntity();
  }, 50);
});

entityLabel.addEventListener("input", db(() => toggleSaveEntity(), 500));
entityJoinable.addEventListener("input", db(() => toggleSaveEntity(), 500));
entityMask.addEventListener("input", db(() => toggleSaveEntity(), 500));
entityRegEx.addEventListener("input", db(() => toggleSaveEntity(), 500));

entityType.addEventListener("change", () => {
  entityRegEx.disabled = entityType.options[entityType.selectedIndex].value === "Regular expression"
    ? false
    : true;
  toggleSaveEntity();
});

ipc.on("entity-deleted", () => {
  deleteSelection();
  clearButton.click();
  updateCount();  
});

ipc.on("entity-list", async (e, response) => {
  setTimeout(async () => {
    await entityList.clear();
    response.forEach(d => {
      addEntity(entityList, d);
    });
    updateCount();
    await entityList.sort();
  }, 250);
});

ipc.on("entity-saved", async (e, response) => {
  deleteSelection();
  addEntity(entityList, response);
  entityList.sort();
  clearButton.click();
  updateCount();
});

ipc.send("get-entities");

entityRegEx.addEventListener("input", db(() => toggleSaveEntity(), 500));

saveButton.addEventListener("click", () => {   
  dataset = {
    id: entityId.value ? entityId.value : -1,
    label: entityLabel.value,    
    color: entityColor.value,
    domain: entityDomain.value,
    joinable: entityJoinable.on ? "1" : "0",
    type: entityType.options[entityType.selectedIndex].value,
    mask: entityMask.value,
    reg_ex: entityRegEx.value
  };
  ipc.send("save-entity", dataset);
});
