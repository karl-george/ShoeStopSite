import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { Session } from 'next-auth';
import { getSession } from 'next-auth/react';
import ImageGallery from 'react-image-gallery';
import Header from '@/components/Header';
import Button from '@/components/Button';
import { fetchProducts } from '@/utils/fetchProducts';
import { urlFor } from '@/sanity';

interface Props {
  products: Product[];
  session: Session | null;
}

export default function Page({ products }: Props) {
  const router = useRouter();
  const { slug } = router.query;

  const product = products.find((item) => item.slug.current === slug);

  const images = [
    {
      original: urlFor(product?.image[0]).url(),
      thumbnail: urlFor(product?.image[0]).url(),
    },
    {
      original: urlFor(product?.image[1]).url(),
      thumbnail: urlFor(product?.image[1]).url(),
    },
    {
      original: urlFor(product?.image[2]).url(),
      thumbnail: urlFor(product?.image[2]).url(),
    },
    {
      original: urlFor(product?.image[3]).url(),
      thumbnail: urlFor(product?.image[3]).url(),
    },
  ];

  return (
    <div className='container'>
      <Header />
      <div className='max-w-[1200px] mx-auto my-14'>
        <div className='flex gap-12'>
          <div className='w-[600px]'>
            <ImageGallery
              items={images}
              infinite={false}
              showNav={false}
              thumbnailPosition='left'
              showFullscreenButton={false}
              showPlayButton={false}
            />
          </div>
          <div className='flex-1 px-6'>
            <h1 className='text-[24px] font-bold'>{product?.title}</h1>
            <h2 className='text-lg font-semibold'>{product?.gOptions} Shoes</h2>
            <h2 className='my-2 text-lg font-semibold'>${product?.price}</h2>
            <div>Colour Swatch</div>
            <div className='mb-10'>Sizes</div>
            <Button title={'Add to cart'} padding='py-2 px-6' filled />
            <h2 className='max-w-[350px] min-w-[250px] font-semibold mt-10'>
              {product?.description}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => {
  const products = await fetchProducts();
  const session = await getSession(context);

  return {
    props: {
      products,
      session,
    },
  };
};
