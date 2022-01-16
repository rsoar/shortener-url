import { IData } from "../../interface/IData";
import { IUrlService } from "../../interface/IUrlService";
import Mongo from "../../database/mongodb";
import { IResponse } from "../../interface/IDatabase";

type FindResponse = IData | null;

export class UrlService implements IUrlService {
  public async insert(data: IData): Promise<void> {
    const database: Mongo = new Mongo();
    const db: IResponse = await database.connection();
    await db.collection.insertOne(data);
    return;
  }

  public async find(key: string, value: string): Promise<FindResponse> {
    const database: Mongo = new Mongo();
    const db: IResponse = await database.connection();
    return db.collection.findOne({
      [key]: value,
    });
  }
}
