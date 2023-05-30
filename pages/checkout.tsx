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

  // When an item is added check if the item exists. If so increase quantity
  useEffect(() => {
    const groupedItems = items.reduce((res, item) => {
      (res[item._id] = res[item._id] || []).push(item);

      return res;
    }, {} as { [key: string]: Product[] });

    setGroupedBasketItems(groupedItems);
  }, [items]);

  return (
    <div className='container'>
      <Header />
      <div>
        Checkout
        <div>
          {items.length > 0 && (
            <div>
              {Object.entries(groupedBasketItems).map(([key, items]) => (
                <CheckoutProduct key={key} items={items} id={key} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default checkout;
