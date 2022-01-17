import { Collection } from "mongodb";
import Mongo from "../database/mongodb";
import { IData } from "../interface/IData";
import { IUrlRepository } from "../interface/IUrlRepository";

export class UrlRepository implements IUrlRepository {
  private _db = new Mongo();

  public async insert(data: IData): Promise<void> {
    const db: Collection<IData> = await this._db.connection();
    await db.insertOne(data);
    return;
  }

  public async find(key: string, value: string): Promise<IData | null> {
    const db: Collection<IData> = await this._db.connection();
    return db.findOne({
      [key]: value,
    });
  }
}
