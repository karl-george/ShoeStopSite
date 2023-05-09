import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import { fetchBrands } from '@/utils/fetchBrands';
import { GetServerSideProps } from 'next';
import Image from 'next/image';

interface Props {
  brands: Brand[];
}

export default function Home({ brands }: Props) {
  return (
    <div className='container'>
      <Header />
      <div className='flex'>
        <Sidebar brands={brands} />
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

  return {
    props: {
      brands,
    },
  };
};
