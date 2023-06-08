import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import logo from '@/public/logo.png';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';

function success() {
  const router = useRouter();
  const { session_id } = router.query;

  // Next Auth hook to return session
  const { data: session } = useSession();

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
      <main className='max-w-[800px] mx-auto'>
        <section className='flex flex-col mt-8'>
          <h1 className='text-2xl font-semibold text-center md:text-4xl text-accent'>
            Your order has been confirmed!
          </h1>
          <h2 className='mt-10 text-xl font-semibold text-accent'>
            Hi {session ? session.user?.name?.split(' ')[0] : 'Guest'},
          </h2>
          <h3 className='mt-2 text-lg'>
            Your order has been confirmed and will be shipping soon.
          </h3>
        </section>
      </main>
    </div>
  );
}

export default success;
