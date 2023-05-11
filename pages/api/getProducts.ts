// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { sanityClient } from '../../sanity';

const query = `*[_type == 'product'] {
  ...
} `;

type Data = {
  products: Product[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const products = await sanityClient.fetch(query);
  res.status(200).json({ products });
}
