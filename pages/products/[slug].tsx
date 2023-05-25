import { useRouter } from 'next/router';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import { useSelector } from 'react-redux';
import { selectAllItems } from '@/redux/productSlice';
import Products from '@/components/Products';

export default function Page() {
  const router = useRouter();
  const items = useSelector(selectAllItems);

  console.log(router.query);

  return (
    <div className='container'>
      <Header />
      <div className='flex py-4'>
        {/* <Sidebar brands={brands} products={products} /> */}
      </div>
      <main className='w-full ml-4'>
        <Products products={items} />
      </main>
    </div>
  );
}
