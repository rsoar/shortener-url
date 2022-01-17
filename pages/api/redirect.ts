import { NextApiRequest, NextApiResponse } from "next";
import { UrlRepository } from "../../repositories/UrlRepository";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { code } = req.body;
    const urlService = new UrlRepository();
    const response = await urlService.find("url_code", code);
    return res.status(200).json(response);
  }
};
