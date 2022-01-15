import { IData } from "./IData";

export interface IUrlService {
  insert(data: IData): Promise<any>;
  find(url: string): Promise<any>;
}
