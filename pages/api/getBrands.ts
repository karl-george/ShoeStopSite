// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { sanityClient } from '../../sanity';

const query = `*[_type == 'brand'] {
  ...
} | order(title asc)`;

type Data = {
  brands: Brand[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const brands = await sanityClient.fetch(query);
  res.status(200).json({ brands });
}
