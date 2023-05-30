import Image from 'next/image';
import { urlFor } from '@/sanity';

interface Props {
  items: Product[];
  id: string;
}

function CheckoutProduct({ id, items }: Props) {
  return (
    <div>
      <div className='relative w-40 h-40'>
        <Image
          src={urlFor(items[0].image[0]).url()}
          alt='Product'
          fill
          className='object-contain'
        />
      </div>
      <div>{items[0].title}</div>
      <div>{items.length}</div>
    </div>
  );
}

export default CheckoutProduct;
