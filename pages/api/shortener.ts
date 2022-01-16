import { NextApiRequest, NextApiResponse } from "next";
import shortid from "shortid";
import { Validation } from "../../business/UrlValidation";
import { URL } from "../../repositories/UrlRepository";
import { UrlService } from "../../services/base/UrlService";

export default async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<any> => {
  const { url } = req.body;

  if (req.method === "POST") {
    const isValid: Validation = new Validation(url);
    const url_code: string = shortid.generate();
    if (isValid.isValidHttpUrl()) {
      const instance_url: URL = new URL(url, url_code);
      const instance_service: UrlService = new UrlService();
      try {
        const url_data = await instance_service.find("url", url);
        if (url_data) {
          return res.status(200).json(url_data);
        } else {
          instance_service.insert(instance_url.mount());
          return res.status(200).json(instance_url.mount());
        }
      } catch (_) {
        throw new Error("Failed to connect to database");
      }
    } else {
      res.status(200).json({ url_shortened: "Invalid URL" });
    }
  }
};
