import Image from 'next/image';
import { urlFor } from '@/sanity';

interface Prop {
  product: Product;
}

function ProductCard({ product }: Prop) {
  return (
    <div className='flex flex-col border-2'>
      <div className='relative h-[500px] w-[500px]'>
        <Image
          src={urlFor(product.image[0]).url()}
          alt={product.title}
          fill
          className='object-contain'
        />
      </div>
      <div className='border-t-2'>
        <h4>{product.title}</h4>
        <p>${product.price}</p>
        <p>trolleyicon</p>
      </div>
    </div>
  );
}

export default ProductCard;
