// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: string
};

enum ResponseStatus {
  OK = 200
}

/**
 * @param req - api request
 * @param res - api response
 */
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
): void {
  res.status(ResponseStatus.OK).json({ name: 'John Doe' });
}
