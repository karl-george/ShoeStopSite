import Image from 'next/image';
import { urlFor } from '@/sanity';

interface Prop {
  product: Product;
}

function ProductCard({ product }: Prop) {
  return (
    <div className='flex flex-col cursor-pointer'>
      <div className='relative w-full aspect-video'>
        <Image
          src={urlFor(product.image[0]).url()}
          alt={product.title}
          fill
          className='object-cover'
        />
      </div>
      <div className=''>
        <h4>{product.title}</h4>
        <p>${product.price}</p>
        <p>trolleyicon</p>
      </div>
    </div>
  );
}

export default ProductCard;
