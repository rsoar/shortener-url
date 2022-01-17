import { NextApiRequest, NextApiResponse } from "next";
import shortid from "shortid";
import URL from "../../business/MountUrl";
import { Validation } from "../../business/UrlValidation";
import { UrlRepository } from "../../repositories/UrlRepository";
import { IData } from "../../interface/IData";

export default async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<any> => {
  const { url } = req.body;

  if (req.method === "POST") {
    const isValid: Validation = new Validation(url);
    const url_code: string = shortid.generate();
    if (isValid.isValidHttpUrl()) {
      const new_url: URL = new URL(url, url_code);
      const urlRepository: UrlRepository = new UrlRepository();
      try {
        const url_data: IData | null = await urlRepository.find("url", url);
        if (url_data) {
          return res.status(200).json(url_data);
        } else {
          urlRepository.insert(new_url.mount());
          return res.status(200).json(new_url.mount());
        }
      } catch (_) {
        throw new Error("Failed to connect to database");
      }
    } else {
      res.status(200).json({ url_shortened: "Invalid URL" });
    }
  }
};
