import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import Products from '@/components/Products';
import { fetchBrands } from '@/utils/fetchBrands';
import { fetchProducts } from '@/utils/fetchProducts';
import { GetServerSideProps } from 'next';

interface Props {
  brands: Brand[];
  products: Product[];
}

export default function Home({ brands, products }: Props) {
  return (
    <div className='container'>
      <Header />
      <div className='flex py-4'>
        <Sidebar brands={brands} products={products} />
        <main className='w-full ml-4'>
          <Products products={products} />
        </main>
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const brands = await fetchBrands();
  const products = await fetchProducts();

  return {
    props: {
      brands,
      products,
    },
  };
};
