import type { NextApiRequest, NextApiResponse } from "next";

type Data =
  | {
      name: string;
    }
  | { error: string };

const getCoffee = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  try {
    const response = await Promise.resolve("coffee !!");
    res.status(200).json({ name: response });
  } catch (e) {
    res.status(500).json({ error: "sdsdjk" });
  }
};

export default getCoffee;

//matches to /api/coffee
//takes precedence over /coffee/index
