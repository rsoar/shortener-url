import { IData } from "./IData";

export interface IUrlRepository {
  insert(data: IData): Promise<void>;
  find(key: string, value: string): Promise<IData | null>;
}
