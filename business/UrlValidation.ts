export class Validation {
  private _url: string;

  constructor(url: string) {
    this._url = url;
  }

  public isValidHttpUrl(): boolean {
    let url: URL;
    try {
      url = new URL(this._url);
    } catch (_) {
      return false;
    }
    return url.protocol === "http:" || url.protocol === "https:";
  }
}
