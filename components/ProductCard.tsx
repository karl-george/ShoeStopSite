import Image from 'next/image';
import { urlFor } from '@/sanity';
import { MdOutlineShoppingBag } from 'react-icons/md';
import Link from 'next/link';

interface Prop {
  product: Product;
}

function ProductCard({ product }: Prop) {
  return (
    <Link
      href={{
        pathname: `/product/[slug]`,
        query: { slug: `${product.slug.current}` },
      }}
      className='flex flex-col space-y-3 cursor-pointer'
    >
      <div className='relative w-full aspect-square'>
        <Image
          src={urlFor(product.image[0]).url()}
          alt={product.title}
          fill
          className='object-cover'
        />
      </div>
      <div className=''>
        <h4 className='text-lg'>{product.title}</h4>
        <p className='text-accent'>{product.gOptions} Shoes</p>
        <div className='flex items-center justify-between'>
          <p className='text-accent'>${product.price}</p>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
