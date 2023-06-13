import { fetchBrands } from '@/utils/fetchBrands';
import { fetchProducts } from '@/utils/fetchProducts';
import { GetServerSideProps } from 'next';
import Products from '@/components/Products';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import { getSession } from 'next-auth/react';
import { Session } from 'next-auth';
import Footer from '@/components/Footer';

interface Props {
  brands: Brand[];
  products: Product[];
  session: Session | null;
}

export default function Home({ brands, products }: Props) {
  return (
    <div>
      <Header />
      <div className='container md:flex md:py-4'>
        <Sidebar brands={brands} products={products} />
        <main className='w-full md:ml-4'>
          <Products products={products} />
        </main>
      </div>
      <Footer />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => {
  const brands = await fetchBrands();
  const products = await fetchProducts();
  const session = await getSession(context);

  return {
    props: {
      brands,
      products,
      session,
    },
  };
};
