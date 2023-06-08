import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import logo from '@/public/logo.png';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import { GetServerSideProps } from 'next';
import { fetchStripeOrderItems } from '@/utils/fetchStripeOrderItems';
import { urlFor } from '@/sanity';

interface Props {
  products: StripeProduct[];
}

function success({ products }: Props) {
  const router = useRouter();
  const { session_id } = router.query;

  // Next Auth hook to return session
  const { data: session } = useSession();

  const total = products.reduce(
    (acc, product) => acc + product.price.unit_amount / 100,
    0
  );

  return (
    <div className='container'>
      <Head>
        <title>Thanks! - ShoeStop</title>
        <link rel='shortcut icon' href='favicon.ico' type='image/x-icon' />
      </Head>
      <header className='flex items-center justify-center py-8'>
        <Link href='/'>
          <div className='relative w-56 h-12'>
            <Image src={logo} alt='logo' />
          </div>
        </Link>
      </header>
      <main className='flex justify-center'>
        <section className='flex flex-col px-6 py-12 mt-8 border border-gray-300 divide-y divide-gray-300 md:p-20'>
          <div>
            <h1 className='text-3xl font-semibold text-center md:text-4xl text-accent'>
              Your order has been confirmed!
            </h1>
            <h2 className='mt-10 text-xl font-semibold text-accent'>
              Hi {session ? session.user?.name?.split(' ')[0] : 'Guest'},
            </h2>
            <h3 className='my-4 text-lg'>
              Your order has been confirmed and will be shipping soon.
            </h3>
          </div>
          <div className='py-4'>
            <div>
              <p className='mb-2 text-xl font-semibold text-accent'>
                Order Tracking Number:
              </p>
              <p>SWE123456789</p>
            </div>
          </div>
          <div className='pt-4'>
            <p className='text-xl font-semibold text-accent'>Products:</p>
            <div className='divide-y divide-gray-300'>
              {products.map((product) => (
                <div
                  className='flex-row justify-between py-4 md:flex'
                  key={product.id}
                >
                  <p className='text-xl text-accent'>{product.description}</p>
                  <p className='text-xl text-accent'>Qty: {product.quantity}</p>
                  <p className='text-xl text-accent'>
                    ${product.price.unit_amount / 100}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className='py-4'>
            <div className='flex justify-between'>
              <p className='text-xl font-semibold text-accent'>Total:</p>
              <p className='text-xl font-semibold text-accent'>${total}</p>
            </div>
          </div>
          <div className='pt-4'>
            <div>
              <p className='mb-2'>
                We'll send you shipping confirmation when your item(s) are on
                the way!
              </p>
              <p className='mb-2'>Thank you!</p>
              <p className='text-xl'>ShoeStop</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default success;

export const getServerSideProps: GetServerSideProps<Props> = async ({
  query,
}) => {
  const sessionId = query.session_id as string;
  const products = await fetchStripeOrderItems(sessionId);

  return {
    props: {
      products,
    },
  };
};
