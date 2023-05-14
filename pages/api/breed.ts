import { NextApiRequest, NextApiResponse } from "next";

type Data = {
  message: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const query = req.query.breed;
  res.status(200).json({ message: `I love ${query}` });
}
