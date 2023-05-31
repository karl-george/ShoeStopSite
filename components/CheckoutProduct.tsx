import Image from 'next/image';
import { urlFor } from '@/sanity';
import { removeFromBasket } from '@/redux/basketSlice';
import { useDispatch } from 'react-redux';
import { toast } from 'react-hot-toast';
import { useRouter } from 'next/router';

interface Props {
  items: Product[];
  id: string;
}

function CheckoutProduct({ id, items }: Props) {
  const dispatch = useDispatch();
  const router = useRouter();

  const removeItemFromBasket = () => {
    dispatch(removeFromBasket({ id }));

    toast.error(`${items[0].title} removed from basket`, {
      position: 'bottom-center',
    });
  };

  return (
    <div className='flex flex-col gap-8 py-4 my-4 border-b border-gray-300 lg:items-center gap-x-6 sm:flex-row'>
      <div className='relative w-32 h-32'>
        <Image
          src={urlFor(items[0].image[0]).url()}
          alt='Product'
          fill
          className='object-contain cursor-pointer'
          onClick={() => router.push(`product/${items[0].slug.current}`)}
        />
      </div>
      <div className='flex items-end flex-1 lg:items-center'>
        <div className='flex-1 space-y-4'>
          <div className='flex flex-col justify-between gap-x-6 lg:flex-row lg:max-w-lg'>
            <h4
              className='text-[22px] font-semibold text-accent cursor-pointer w-40'
              onClick={() => router.push(`product/${items[0].slug.current}`)}
            >
              {items[0].title}
            </h4>
            <p className='flex items-end text-lg font-semibold gap-x-3 text-accent md:w-24'>
              Size: {items[0].chosenSize}
            </p>
            <p className='flex items-end text-lg font-semibold gap-x-4 text-accent'>
              Quantity: {items.length}
            </p>
          </div>
        </div>
        <div className='flex flex-col items-end space-y-1'>
          <h4 className='text-xl font-semibold lg:text-2xl text-accent'>
            ${items.reduce((total, item) => total + item.price, 0)}
          </h4>
          <button
            className='font-semibold text-blue-500 hover:underline'
            onClick={removeItemFromBasket}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}

export default CheckoutProduct;

// 046246e4-6e99-4dfd-80bc-68113a3a01b0
