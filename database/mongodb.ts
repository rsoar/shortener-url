import { MongoClient } from "mongodb";
import { IDatabase, IResponse } from "../interface/IDatabase";

const uri = process.env.NEXT_PUBLIC_MONGO_URI;

const client = new MongoClient(uri as string);
class Mongo implements IDatabase {
  public async connection(): Promise<IResponse> {
    await client.connect();
    const name_collection = await client.db("shortener").collection("urls");
    return {
      client: client,
      collection: name_collection,
    };
  }
}

export default Mongo;
