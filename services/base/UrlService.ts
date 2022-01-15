import { IData } from "../../interface/IData";
import { IUrlService } from "../../interface/IUrlService";
import Mongo from "../../database/mongodb";

export class UrlService implements IUrlService {
  public async insert(data: IData) {
    const database = new Mongo();
    const db = await database.connection();
    await db.collection.insertOne(data);
  }

  public async find(url: string): Promise<any> {
    throw new Error("Method not implemented");
  }
}
