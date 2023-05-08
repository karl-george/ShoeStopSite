import Header from '@/components/Header';
import { fetchBrands } from '@/utils/fetchBrands';
import { GetServerSideProps } from 'next';
import Image from 'next/image';

interface Props {
  brands: Brand[];
}

export default function Home({ brands }: Props) {
  return (
    <>
      <Header />
      <main>
        {/* {brands.map((brand) => (
          <p>{brand.title}</p>
        ))} */}
      </main>
    </>
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
