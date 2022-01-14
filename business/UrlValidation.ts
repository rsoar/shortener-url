export class Validation {
  private url: string;

  constructor(url: string) {
    this.url = url;
  }

  public isValidHttpUrl(): boolean {
    let url: URL;
    try {
      url = new URL(this.url);
    } catch (_) {
      return false;
    }

    return url.protocol === "http:" || url.protocol === "https:";
  }
}
