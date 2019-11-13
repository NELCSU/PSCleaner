import db from "debounce";
import { ipcRenderer as ipc } from "electron";

const entityList = document.getElementById("lstManageEntities");
const entityId = document.getElementById("txtEntityId");
const entityColor = document.getElementById("txtEntityColor");
const entityLabel = document.getElementById("txtEntityLabel");
const entityDomain = document.getElementById("txtEntityDomain");
const entityMask = document.getElementById("txtEntityMask");
const entityJoinable = document.getElementById("txtEntityJoinable");
const entityDiscard = document.getElementById("txtEntityDiscard");
const entityType = document.getElementById("lblEntityType");
const entityRegEx = document.getElementById("txtEntityRegex");

const saveButton = document.getElementById("btnEntitySave");
const clearButton = document.getElementById("btnEntityCancel");
const deleteButton = document.getElementById("btnEntityDelete");

let dirty = false;

const entityMap = new Map();

/**
 * Adds an entity to the list and internal data map
 * @param {Entity} data 
 */
function addEntity(data) {
  const option = document.createElement("option");
  option.id = `entity_${data.id}`;
  option.value = parseInt(data.id);
  option.text = data.label;
  const list = Array.from(entityList.options);
  if (list.length === 1) {
    entityList.appendChild(option);
  } else {
    for (let i = 1; i < list.length; i++) {
      if (list[i].text > option.text) {
        list[i].insertAdjacentElement("beforebegin", option);
        break;
      } else if (i + 1 === list.length) {
        entityList.appendChild(option);
        break;
      }
    }
  }
  entityMap.set(data.id, data);
}

function clearForm() {
  entityColor.value = "#cccccc";
  entityLabel.value = "";
  entityJoinable.on = false;
  entityDiscard.on = false;
  entityDomain.value = "";
  entityMask.value = "";
  entityId.value = "";
  entityRegEx.value = "";
  entityLabel.disabled = false;
  entityMask.disabled = false;
  entityJoinable.disabled = false;
  entityDiscard.disabled = false;
  entityDomain.disabled = false;
  deleteButton.classList.add("disabled");
  deleteButton.dataset.id = null;
  entityType.selectedIndex = 0;
  entityType.dispatchEvent(new Event("change"));
  entityType.disabled = false;
  dirty = false;
  toggleSaveEntity();
  entityLabel.focus();
}

/**
 * Deletes a lsit item if it is selected and valid to delete
 */
function deleteSelection(id) {
  let tag = document.getElementById(`entity_${id}`);
  if (tag) {
    entityList.removeChild(tag);
    entityList.selectedIndex = 0;
  }
}

function selectEntity(data) {
  const id = `entity_${data.id}`;
  const list = Array.from(entityList.options);
  for (let i = 0; i < list.length; i++) {
    if (list[i].id === id) {
      entityList.selectedIndex = i;
      break;
    }
  }
}

/**
 * Enable/disable save button if form has changed
 */
function toggleSaveEntity() {
  dirty
    ? saveButton.classList.remove("disabled")
    : saveButton.classList.add("disabled");
}

/**
 * Clear current entry in form
 */
clearButton.addEventListener("click", _ => {
  clearForm();
  entityList.selectedIndex = 0;
});

/**
 * Send IPC request to delete entity
 */
deleteButton.addEventListener("click", _ => ipc.send("delete-entity", entityId.value));

/**
 * Action to perform if delete request succeeds
 */
ipc.on("entity-deleted", (_) => {
  deleteSelection(entityId.value);
  clearButton.click();
});

/**
 * Actions performed with list item selected
 */
entityList.addEventListener("change", e => {
  setTimeout(_ => {
    const i = entityList.selectedIndex;
    clearForm();
    if (i > 0) {
      const id = parseInt(entityList.options[i].value);
      const data = entityMap.get(id);
      entityColor.value = data.color;
      entityLabel.value = data.label;
      entityDomain.value = data.domain;
      entityJoinable.on = data.joinable;
      entityDiscard.on = data.discard;
      entityMask.value = data.mask;
      entityRegEx.value = data.reg_ex;
      entityId.value = data.id;
      entityType.value = data.type;
      entityType.dispatchEvent(new Event("change"));
      entityLabel.disabled = false;
      entityJoinable.disabled = false;
      entityDiscard.disabled = false;
      entityMask.disabled = false;
      entityType.disabled = false;
      deleteButton.classList.remove("disabled");
      toggleSaveEntity();
    }
  }, 50);
});

/**
 * Enable/disable save if form elements change
 */
entityColor.addEventListener("change", () => { dirty = true; toggleSaveEntity(); });
entityLabel.addEventListener("input", db(_ => { dirty = true; toggleSaveEntity(); }, 500));
entityJoinable.addEventListener("input", db(_ => { dirty = true; toggleSaveEntity(); }, 500));
entityDiscard.addEventListener("input", db(_ => { dirty = true; toggleSaveEntity(); }, 500));
entityMask.addEventListener("input", db(_ => { dirty = true; toggleSaveEntity(); }, 500));
entityRegEx.addEventListener("input", db(_ => { dirty = true; toggleSaveEntity(); }, 500));

entityType.addEventListener("change", _ => {
  entityRegEx.disabled = entityType.options[entityType.selectedIndex].value === "Regular expression"
    ? false
    : true;
  dirty = true;
  toggleSaveEntity();
});

ipc.on("entity-list", (_, entities) => {
  setTimeout(_ => {
    Array.from(entityList.options)
      .forEach((option, i) => {
        if (i > 0) {
          entityList.removeChild(option);
        }
      });
    entityMap.clear();

    entities.forEach(entity => addEntity(entity));
  }, 250);
});

ipc.on("entity-saved", async (_, entity) => {
  entityMap.set(entity.id, entity);
  deleteSelection(entity.id);
  addEntity(entity);
  selectEntity(entity);
});

ipc.send("get-entities");

saveButton.addEventListener("click", _ => {
  dirty = false;
  const dataset = {
    id: entityId.value ? entityId.value : -1,
    label: entityLabel.value,
    color: entityColor.value,
    domain: entityDomain.value,
    joinable: entityJoinable.on ? "1" : "0",
    discard: entityDiscard.on ? "1" : "0",
    type: entityType.options[entityType.selectedIndex].value,
    mask: entityMask.value,
    reg_ex: entityRegEx.value
  };
  ipc.send("save-entity", dataset);
});
