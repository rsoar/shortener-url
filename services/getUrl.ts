import axios, { AxiosResponse } from "axios";
import { IData } from "../interface/IData";

export const getUrl = async (
  key: string,
  query: string,
  path: string
): Promise<AxiosResponse<IData>> =>
  axios.post(path, {
    [key]: query,
  });
