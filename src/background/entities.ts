import { ipcMain as ipc } from "electron";
import DB from "sqlite3-helper";
import { DataObject } from "sqlite3-helper";
import { Entity, EntityResponse, EntityType } from "../typings/PSCleaner";

/**
 * Manages entities
 * ----------------------------------
 * API  (ipc request -> response)
 * ----------------------------------
 * delete-entity -> entity-deleted - deletes entity
 * delete-entity -> entity-deletion-error
 * get-entities  -> entity-list - returns list of entities
 * get-entities  -> entity-list-error
 * save-entity   -> entity-saved - saves changes to entity
 * save-entity   -> entity-save-error
 */
export class Entities {
  constructor() {
    ipc.on("save-entity", (e, data) => {
      Entities.save(data)
        .then(
          success => e.reply("entity-saved", success),
          failure => e.reply(failure, null)
        );
    });

    ipc.on("delete-entity", (e, key: number) => {
      Entities.delete(key)
        .then(
          success => e.reply(success, key),
          failure => e.reply(failure, key)
        );      
    });

    ipc.on("get-entities", e => {
      Entities.getList()
        .then(
          success => e.reply("entity-list", success),
          failure => e.reply(failure, [])
        );  
    });
  }

  /**
   * deletes entity from data store
   * @param {number} id - entity id to delete
   * @return {Promise<EntityResponse>}
   */
  public static delete(id: number): Promise<EntityResponse> {
    return DB().run("DELETE FROM Entity WHERE id = ?", id)
      .then(
        success => success.changes !== 0 ? "entity-deleted" : "entity-deletion-error"
      )
      .catch(() => "entity-deletion-error");
  }

  /**
   * returns list of entities
   * @param {EntityType} filterByType - (optional) filters list by entity type
   * @return {Promise<Entity[]>}
   */
  public static getList(filterByType?: EntityType): Promise<Entity[]> {
    const qry: string = "SELECT id, name, color, domain, type, reg_ex FROM Entity";
    return filterByType
      ? DB().query(`${qry} WHERE type = ?`, filterByType)
          .then(
            entities => Promise.resolve(Entities.toList(entities)), 
            () => Promise.reject("entity-list-error")
          )
      : DB().query(qry)
          .then(
            entities => Promise.resolve(Entities.toList(entities)),
            () => Promise.reject("entity-list-error")
          );
  }

  /**
   * Saves new/existing entity changes
   * @param {Entity} data - entity to upsert into data store
   * @return {Promise<Entity>}
   */
  public static async save(data: Entity): Promise<Entity> {
    const item: any = {
      name: data.name,
      color: data.color,
      domain: data.domain,
      type: data.type,
      reg_ex: data.reg_ex
    };
    return await DB()
      .queryFirstRow("SELECT * FROM Entity WHERE id = ?", data.id)
      .then(async row => {
        if (row) {
          return await DB().update("entity", item, { id: data.id })
            .then(
              () => Promise.resolve(data),
              () => Promise.reject("entity-save-error")
            );
        } else {
          return await DB()
            .insert("entity", item)
            .then(async id => 
              await DB()
                .queryFirstRow("SELECT * FROM Entity WHERE id = ?", id)
                .then(
                  (row: any) => {
                    data.id = row.id;
                    return Promise.resolve(data);
                  },
                  () => Promise.reject("entity-save-error")
                )
            );
        }
      });
  }

  /**
   * Converts list of DataObjects to sorted (by name) list of Entities
   * @param {DataObject[]} entities - list of objects returned from data store
   * @return {Entity[]}
   */
  public static toList(entities: DataObject[]): Entity[] {
    const r: Entity[] = [];
    entities.forEach(ent => {
      r.push({
        id: ent.id,
        name: ent.name,
        color: ent.color,
        domain: ent.domain,
        type: ent.type,
        reg_ex: ent.reg_ex
      });
    });
    return r.sort((a, b) => a.name > b.name ? 1 : -1);
  }
}