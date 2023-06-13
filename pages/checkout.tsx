import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import Stripe from 'stripe';
import Header from '@/components/Header';
import Button from '@/components/Button';
import { selectBasketItems, selectBasketTotal } from '@/redux/basketSlice';
import CheckoutProduct from '@/components/CheckoutProduct';
import getStripe from '@/utils/get-stripejs';
import { fetchPostJSON } from '@/utils/api-helpers';
import Footer from '@/components/Footer';

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
      (res[item.id] = res[item.id] || []).push(item);

      return res;
    }, {} as { [key: string]: Product[] });

    setGroupedBasketItems(groupedItems);
  }, [items]);

  // Create Stripe Checkout Session
  const createCheckoutSession = async () => {
    setLoading(true);

    const checkoutSession: Stripe.Checkout.Session = await fetchPostJSON(
      '/api/checkout_sessions',
      { items: items }
    );

    // Internal Server Error
    if ((checkoutSession as any).statusCode === 500) {
      console.error((checkoutSession as any).message);
      return;
    }

    // Redirect to Checkout
    const stripe = await getStripe();

    const { error } = await stripe!.redirectToCheckout({
      sessionId: checkoutSession.id,
    });

    // If redirectToCheckout fails show error
    console.warn(error.message);

    setLoading(false);
  };

  return (
    <div>
      <Header />
      <div className='container max-w-5xl pb-24 mx-auto'>
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
                  onClick={createCheckoutSession}
                />
              </div>
            </div>
          </div>
        )}
      </div>
      <div className={`${items.length <= 1 && 'absolute w-full bottom-0'}`}>
        <Footer />
      </div>
    </div>
  );
}

export default checkout;
