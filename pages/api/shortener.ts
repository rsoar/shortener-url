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
    const isValid = new Validation(url);
    const url_code = shortid.generate();
    if (isValid.isValidHttpUrl()) {
      const instance_service = new UrlService();
      if (await instance_service.find(url)) {
        // logic
        // return the url saved in the database
      } else {
        const instance_url = new URL(url, url_code);
        instance_service.insert(instance_url.Mount());
        res.status(200).json({ url_shortened: instance_url.Mount() });
      }
    } else {
      res.status(200).json({ url_shortened: "Invalid URL" });
    }
  }
};
