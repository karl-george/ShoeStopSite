import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import Header from '@/components/Header';
import Button from '@/components/Button';
import { selectBasketItems, selectBasketTotal } from '@/redux/basketSlice';
import CheckoutProduct from '@/components/CheckoutProduct';

function checkout() {
  const [groupedBasketItems, setGroupedBasketItems] = useState(
    {} as { [key: string]: Product[] }
  );
  const [loading, setLoading] = useState(false);

  const items = useSelector(selectBasketItems);
  const basketTotal = useSelector(selectBasketTotal);

  const router = useRouter();

  // When an item is added check if the item and size exists. If so increase quantity
  useEffect(() => {
    const groupedItems = items.reduce((res, item) => {
      (res[item._id && item.chosenSize] =
        res[item._id && item.chosenSize] || []).push(item);

      return res;
    }, {} as { [key: string]: Product[] });

    setGroupedBasketItems(groupedItems);
  }, [items]);

  return (
    <div className='container'>
      <Header />
      <div className='max-w-5xl pb-24 mx-auto'>
        <div className='px-5'>
          <h1 className='mt-12 mb-4 text-3xl font-semibold text-center text-accent'>
            {items.length > 0
              ? 'Review Your Shopping Bag'
              : 'Your Bag Is Empty'}
          </h1>
          <div className='mt-12 text-center'>
            {items.length === 0 && (
              <Button
                title='Continue Shopping'
                onClick={() => router.push('/')}
                filled
                padding='px-4 py-4'
              />
            )}
          </div>
        </div>

        {items.length > 0 && (
          <div className='mx-5 md:mx-8'>
            {Object.entries(groupedBasketItems).map(([key, items]) => (
              <CheckoutProduct key={key} items={items} id={key} />
            ))}
            <div className='max-w-5xl my-12 mt-6 ml-auto'>
              <div className='divide-y divide-gray-300'>
                <div className='pb-4'>
                  <div className='flex justify-between text-accent'>
                    <p>Subtotal</p>
                    <p>${basketTotal}</p>
                  </div>
                </div>
                <div className='flex justify-between pt-4 text-xl font-semibold text-accent'>
                  <h4>Total</h4>
                  <h4>${basketTotal}</h4>
                </div>
              </div>
              <div className='my-16 text-center'>
                <Button
                  loading={loading}
                  title='Check Out'
                  filled
                  width='px-12 py-6'
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default checkout;
