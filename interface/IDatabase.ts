import { Collection, MongoClient } from "mongodb";

export interface IResponse {
  client: MongoClient;
  collection: Collection<any>;
}

export interface IDatabase {
  connection(): Promise<IResponse>;
}
