import { IData } from "../interface/IData";

export const mountUrl = (long: string, newUrl: string, status: number): IData =>
  status === 200
    ? { long_url: long, shortened_url: newUrl }
    : { long_url: long, shortened_url: "URL Inválida" };
