import { Collection, Document, MongoClient } from "mongodb";
import { IData } from "../interface/IData";
import { IDatabase } from "../interface/IDatabase";

const uri = process.env.NEXT_PUBLIC_MONGO_URI;

const client = new MongoClient(uri as string);
class Mongo implements IDatabase {
  public async connection(): Promise<Collection<IData>> {
    const db_connected = await client.connect();
    return db_connected.db("shortener").collection("urls");
  }
}

export default Mongo;
