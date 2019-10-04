import { ipcMain as ipc } from "electron";
import DB from "sqlite3-helper";
import { DataObject } from "sqlite3-helper";
import { Entity, EntityType } from "../typings/PSCleaner";

export class Entities {
  constructor() {
    ipc.on("save-entity", async (e, data) => {
     await Entities.save(data)
      .then(ent => e.reply("entity-saved", ent));
    });

    ipc.on("delete-entity", async (e, key: number) => {
      await Entities.delete(key)
        .then(n => {
          if (n !== 0) {
            e.reply("entity-deleted", key);
          }
        });      
    });

    ipc.on("get-entities", async e => {
      await Entities.getList()
        .then(result => e.reply("entity-list", result));  
    });
  }

  /**
   * deletes entity from data store
   * @param {number} id - entity id to delete
   */
  public static async delete(id: number): Promise<number> {
    const result: any = await DB().run("DELETE FROM Entity WHERE id = ?", id);
    return result.changes;
  }

  /**
   * returns list of entities
   * @param {EntityType} filterByType - (optional) filters list by entity type
   */
  public static async getList(filterByType?: EntityType): Promise<Entity[]> {
    const qry: string = "SELECT id, name, color, domain, type, reg_ex FROM Entity";
    return filterByType
      ? await DB().query(`${qry} WHERE type = ?`, filterByType)
          .then(entities => Entities.toList(entities))
      : await DB().query(qry)
          .then(entities => Entities.toList(entities));
  }

  /**
   * Saves new/existing entity changes
   * @param {Entity} data - entity to upsert into data store
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
            .then(() => Promise.resolve(data));
        } else {
          return await DB()
            .insert("entity", item)
            .then(async id => 
              await DB()
                .queryFirstRow("SELECT * FROM Entity WHERE id = ?", id)
                .then((row: any) => {
                  data.id = row.id;
                  return Promise.resolve(data);
                })
            );
        }
      });
  }

  /**
   * Converts list of DataObjects to sorted (by name) list of Entities
   * @param {DataObject[]} entities - list of objects returned from data store
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