import db from "debounce";
import { ipcRenderer as ipc } from "electron";
import { one } from "@buckneri/js-lib-dom-selection";
import uuidv1 from "uuid/v1";

const entityList = one("#lstManageEntities");
const entityName = one("#txtEntityLabel");
const entityId = one("#txtEntityId");
const entityDomain = one("#txtEntityDomain");
const title = one("#title");
const colorSelector = one("#txtEntityColor");
const saveEntity = one("#btnEntitySave");
const entityCount = one("#hintEntityCount");
const clearUI = one("#btnEntityCancel");
const deleteEntity = one("#btnEntityDelete");
const entityType = one("#lblEntityType");
const regExpression = one("#txtEntityRegex");
let dataset = {};

function addEntity(list, data) {
  const item = document.createElement("nel-list-item");
  item.setAttribute("color", data.color);
  item.selectable = true;
  item.deletable = false;
  item.id = "id_" + uuidv1();
  item.dataset.id = data.id;
  item.dataset.domain = data.domain;
  item.dataset.type = data.type;
  item.dataset.reg_ex = data.reg_ex;
  item.textContent = data.name;
  list.appendChild(item);
  return item;
}

function deleteSelection() {
  let tag = one(`#${deleteEntity.dataset.id}`);
  if (tag) {
    tag.delete();
    tag = null;    
  }
  return tag;
}

function toggleSaveEntity() {
  if (entityName.value === "" || 
      entityDomain.value === "" ||
      entityType.selectedIndex === 0 ||
     (!regExpression.hidden && regExpression.value === "")) {
    saveEntity.classList.add("disabled");
  } else {
    saveEntity.classList.remove("disabled");
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

clearUI.addEventListener("click", () => {
  title.textContent = "Add an entity";
  colorSelector.value = "#cccccc";
  entityName.value = "";
  entityDomain.value = "";
  entityId.value = "";
  entityName.disabled = false;
  entityDomain.disabled = false;
  deleteEntity.classList.add("disabled");
  deleteEntity.dataset.id = null;
  entityType.selectedIndex = 0;
  entityType.dispatchEvent(new Event("change"));
  entityType.disabled = false;
  toggleSaveEntity();
  entityName.focus();
});

colorSelector.addEventListener("change", toggleSaveEntity);

deleteEntity.addEventListener("click", () => {
  let tag = one(`#${deleteEntity.dataset.id}`);
  ipc.send("delete-entity", tag.dataset.id);
});

entityList.addEventListener("selected", e => {
  setTimeout(() => {
    const regex = e.detail.dataset.reg_ex;
    colorSelector.value = e.detail.color;
    title.textContent = `Editing ${e.detail.textContent}`;
    entityName.value = e.detail.textContent;
    entityDomain.value = e.detail.dataset.domain;
    entityId.value = e.detail.dataset.id;
    entityType.value = e.detail.dataset.type;
    entityType.dispatchEvent(new Event("change"));
    regExpression.value = regex ? regex : "";
    entityName.disabled = false;
    entityDomain.disabled = false;
    entityType.disabled = false;
    deleteEntity.classList.remove("disabled");    
    deleteEntity.dataset.id = e.detail.id;
    toggleSaveEntity();
  }, 50);
});

entityName.addEventListener("input", db(() => toggleSaveEntity(), 500));

entityDomain.addEventListener("input", db(() => toggleSaveEntity(), 500));

entityType.addEventListener("change", () => {
  regExpression.hidden = entityType.options[entityType.selectedIndex].value === "Regular expression"
    ? false
    : true;
  toggleSaveEntity();
});

ipc.on("entity-deleted", () => {
  deleteSelection();
  clearUI.click();
  updateCount();  
});

ipc.on("entity-list", async (e, response) => {
  setTimeout(async () => {
    await entityList.clear();
    response.forEach(d => addEntity(entityList, d));
    updateCount();
    await entityList.sort();
  }, 250);
});

ipc.on("entity-saved", async (e, response) => {
  deleteSelection();
  addEntity(entityList, response);
  entityList.sort();
  clearUI.click();
  updateCount();
});

ipc.send("get-entities");

regExpression.addEventListener("input", db(() => toggleSaveEntity(), 500));

saveEntity.addEventListener("click", () => {   
  dataset = {
    id: entityId.value ? entityId.value : -1,
    name: entityName.value,    
    color: colorSelector.value,
    domain: entityDomain.value,
    type: entityType.options[entityType.selectedIndex].value,
    reg_ex: regExpression.value === "null" ? null : regExpression.value
  };
  ipc.send("save-entity", dataset);
});
