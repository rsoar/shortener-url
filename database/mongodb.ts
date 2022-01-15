import { Collection, MongoClient } from "mongodb";
import { IDatabase, IResponse } from "../interface/IDatabase";

const uri: string = process.env.MONGO_URI;
const client = new MongoClient(uri);

class Mongo implements IDatabase {
  public async connection(): Promise<IResponse> {
    await client.connect();
    const database = await client.db("shortener");
    const name_collection = await database.collection("urls");
    return {
      client: client,
      collection: name_collection,
    };
  }
}

export default Mongo;
