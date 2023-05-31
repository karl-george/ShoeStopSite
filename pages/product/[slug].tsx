import { useState } from 'react';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { Session } from 'next-auth';
import { getSession } from 'next-auth/react';
import ImageGallery from 'react-image-gallery';
import { urlFor } from '@/sanity';
import { useDispatch } from 'react-redux';
import { addToBasket } from '@/redux/basketSlice';
import { toast } from 'react-hot-toast';
import Header from '@/components/Header';
import Button from '@/components/Button';
import ProductCard from '@/components/ProductCard';
import Footer from '@/components/Footer';
import { fetchProducts } from '@/utils/fetchProducts';

interface Props {
  products: Product[];
  session: Session | null;
}

export default function Page({ products }: Props) {
  const [selectedSize, setSelectedSize] = useState('');

  const dispatch = useDispatch();
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
    {
      original: urlFor(product?.image[4]).url(),
      thumbnail: urlFor(product?.image[4]).url(),
    },
  ];

  const addItemToBasket = (product: Product) => {
    const shoeWithSize = { ...product, chosenSize: selectedSize };
    dispatch(addToBasket(shoeWithSize));

    // Show the added to cart toast
    toast.success(`${product.title} added to basket`, {
      position: 'bottom-center',
    });
  };

  const shoeSize = product?.sizes?.map((size) => (
    <button
      className={`border-2 py-3 px-5 font-semibold hover:border-black max-w-[80px] ${
        size === selectedSize ? 'border-black' : ''
      }`}
      onClick={() => setSelectedSize(size)}
      key={size}
    >
      EU {size}
    </button>
  ));

  // Filter a new Products array with the current product removed for Similar Products list
  // Filter for the same gender shoes and slice for a smaller list
  const notCurrentProduct = products
    .filter((item) => item._id !== product?._id)
    .filter((item) => item.gOptions === product?.gOptions)
    .slice(0, 5);

  const moreProducts = notCurrentProduct.map((product) => (
    <ProductCard product={product} key={product._id} />
  ));

  return (
    <section className='container'>
      <Header />
      <div className='max-w-[1200px] mx-auto my-14'>
        <div className='flex gap-12'>
          <div className='w-[650px]'>
            <ImageGallery
              items={images}
              infinite={false}
              showNav={false}
              thumbnailPosition='left'
              showFullscreenButton={false}
              showPlayButton={false}
            />
          </div>
          <div className='flex-1 px-6 max-w-[394px] min-w-[394px]'>
            <h1 className='text-[24px] font-bold'>{product?.title}</h1>
            <h2 className='text-lg font-semibold'>{product?.gOptions} Shoes</h2>
            <h2 className='my-2 text-lg font-semibold'>${product?.price}</h2>
            <div className='flex flex-wrap gap-2 mt-8 mb-10'>{shoeSize}</div>
            <div className='text-center'>
              <Button
                title={'Add to cart'}
                padding='py-6 px-12'
                width='w-full'
                filled
                onClick={() => addItemToBasket(product)}
              />
            </div>
            <h2 className='font-semibold mt-10 max-w-[360px]'>
              {product?.description}
            </h2>
          </div>
        </div>
      </div>
      <section className='mt-60'>
        <h2 className='mb-6 text-xl font-semibold'>You May Also Like</h2>
        <div className='grid grid-cols-3 gap-2 md:grid-cols-3 lg:grid-cols-5 gap-y-12'>
          {moreProducts}
        </div>
      </section>
      <Footer />
    </section>
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
