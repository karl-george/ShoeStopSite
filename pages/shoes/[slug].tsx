import { useRouter } from 'next/router';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import Products from '@/components/Products';
import { GetServerSideProps } from 'next';
import { fetchBrands } from '@/utils/fetchBrands';
import { fetchProducts } from '@/utils/fetchProducts';
import { getSession } from 'next-auth/react';
import { Session } from 'next-auth';
import Footer from '@/components/Footer';

interface Props {
  brands: Brand[];
  products: Product[];
  session: Session | null;
}

export default function Page({ brands, products }: Props) {
  const router = useRouter();
  const query = router.query;
  let filteredGender: Product[] = [];

  if (router.query.slug == 'men') {
    const menShoes = products.filter((item) => item.gOptions === "Men's");
    const unisex = products.filter((item) => item.gOptions === 'Unisex');
    filteredGender = menShoes.concat(unisex);
  }

  if (router.query.slug == 'women') {
    const womenShoes = products.filter((item) => item.gOptions === "Women's");
    const unisex = products.filter((item) => item.gOptions === 'Unisex');
    filteredGender = womenShoes.concat(unisex);
  }

  if (router.query.slug == 'kids') {
    filteredGender = products.filter((item) => item.gOptions === 'Kids');
  }

  return (
    <div>
      <Header />
      <div className='container md:flex md:py-4 '>
        <Sidebar brands={brands} products={products} />
        <main className='w-full md:ml-4'>
          <Products products={filteredGender} />
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
