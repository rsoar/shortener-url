import { NextApiRequest, NextApiResponse } from "next";
import shortid from "shortid";
import { Validation } from "../../business/UrlValidation";
import { mountUrl } from "../../repositories/UrlRepository";

const base_url = "https://localhost:3000";

export default async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<any> => {
  const { url } = req.body;

  if (req.method === "POST") {
    const isValid = new Validation(url);
    const newUrl = base_url + "/" + shortid.generate();
    isValid.isValidHttpUrl()
      ? res.status(200).json(mountUrl(url, newUrl, 200))
      : res.status(200).json(mountUrl(url, newUrl, 400));
  }
};
