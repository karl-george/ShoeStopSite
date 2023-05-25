import { useRouter } from 'next/router';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import Products from '@/components/Products';
import { GetServerSideProps } from 'next';
import { fetchBrands } from '@/utils/fetchBrands';
import { fetchProducts } from '@/utils/fetchProducts';
import { getSession } from 'next-auth/react';
import { Session } from 'next-auth';

interface Props {
  brands: Brand[];
  products: Product[];
  session: Session | null;
}

export default function Page({ brands, products }: Props) {
  const router = useRouter();
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

  if (router.query.slug == 'unisex') {
    filteredGender = products.filter((item) => item.gOptions === 'Kids');
  }

  return (
    <div className='container'>
      <Header />
      <div className='flex py-4'>
        <Sidebar brands={brands} products={products} />
        <main className='w-full ml-4'>
          <Products products={filteredGender} />
        </main>
      </div>
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
