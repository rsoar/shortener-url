import { IData } from "../../interface/IData";
import { IUrlService } from "../../interface/IUrlService";
import Mongo from "../../database/mongodb";

type FindResponse = IData | null;

export class UrlService implements IUrlService {
  public async insert(data: IData) {
    const database = new Mongo();
    const db = await database.connection();
    await db.collection.insertOne(data);
  }

  public async find(url: string): Promise<FindResponse> {
    const database = new Mongo();
    const db = await database.connection();
    const teste: IData | null = await db.collection.findOne({
      url: url,
    });
    return teste;
  }
}
