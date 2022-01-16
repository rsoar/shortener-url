import { IData } from "./IData";

type FindResponse = IData | null;

export interface IUrlService {
  insert(data: IData): Promise<any>;
  find(key: string, value: string): Promise<FindResponse>;
}
