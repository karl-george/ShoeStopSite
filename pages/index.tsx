import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import { fetchBrands } from '@/utils/fetchBrands';
import { fetchProducts } from '@/utils/fetchProducts';
import { GetServerSideProps } from 'next';
import Image from 'next/image';

interface Props {
  brands: Brand[];
  products: Product[];
}

export default function Home({ brands, products }: Props) {
  return (
    <div className='container'>
      <Header />
      <div className='flex'>
        <Sidebar brands={brands} products={products} />
        <main>
          {/* {brands.map((brand) => (
            <p>{brand.title}</p>
          ))} */}
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
