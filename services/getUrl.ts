import axios, { AxiosResponse } from "axios";
import { IData } from "../interface/IData";

export default async (query: string): Promise<AxiosResponse<IData>> => {
  const response: AxiosResponse<IData> = await axios.post("/api/shortener", {
    url: query,
  });
  return response;
};
