import { IData } from "../interface/IData";
import { IUrlRepository } from "../interface/IUrlRepository";

export class URL implements IUrlRepository {
  private _base_url: string = "https://localhost:3000";
  private _url: string;
  private _url_code: string;

  constructor(url: string, code: string) {
    (this._url = url), (this._url_code = code);
  }

  public mount(): IData {
    return {
      url: this._url,
      url_shortened: this._base_url + "/" + this._url_code,
      url_code: this._url_code,
    };
  }
}
