import { Collection, MongoClient } from "mongodb";
import { IData } from "./IData";

export interface IResponse {
  client: MongoClient;
  collection: Collection<any>;
}

export interface IDatabase {
  connection(): Promise<Collection<IData>>;
}
