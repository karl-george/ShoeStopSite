import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MdOutlineShoppingBag, MdOutlineSearch } from 'react-icons/md';
import { AiOutlineUser, AiOutlineClose } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';
import { signIn, useSession } from 'next-auth/react';
import logo from '../public/logo.png';
import Button from './Button';

function Header() {
  const [isNavToggled, setIsNavToggled] = useState(false);

  const { data: session } = useSession();

  return (
    <header>
      <nav className='flex flex-row items-center justify-between py-6'>
        <Link href='/'>
          <div className='relative w-40'>
            <Image src={logo} alt='ShoeStop Logo' className='object-contain' />
          </div>
        </Link>
        <div
          className={
            isNavToggled
              ? 'absolute flex flex-col top-14 right-1 w-[200px] py-8 px-6 space-y-6 font-medium text-lg transition border-l-2 z-50 bg-gray-100'
              : 'hidden space-x-8 md:flex'
          }
        >
          <Link href='/' className='text-hover text-title'>
            Home
          </Link>
          <Link href='/products/men' className='text-hover text-title'>
            Men
          </Link>
          <Link href='/products/women' className='text-hover text-title'>
            Women
          </Link>
          <Link href='/products/kids' className='text-hover text-title'>
            Kids
          </Link>
          <div className='w-full pt-6 text-center md:hidden'>
            <Button title='Sign In' padding='py-2 px-6' filled />
          </div>
        </div>
        <div className='flex space-x-6'>
          <Link href='/search'>
            <MdOutlineSearch size={25} className='text-hover text-title' />
          </Link>
          <Link href='/checkout'>
            <MdOutlineShoppingBag size={25} className='text-hover text-title' />
          </Link>
          {session ? (
            <Link href='/user' className='hidden md:block'>
              <Image
                src={session.user?.image || ''}
                alt='User profile'
                width={25}
                height={25}
                className='rounded-full cursor-pointer'
              />
            </Link>
          ) : (
            <div className='hidden cursor-pointer md:block'>
              <AiOutlineUser
                size={25}
                className='text-hover text-title'
                onClick={() => signIn()}
              />
            </div>
          )}

          <div
            className='md:hidden text-title'
            onClick={() => setIsNavToggled((prev) => !prev)}
          >
            {isNavToggled ? (
              <AiOutlineClose size={25} />
            ) : (
              <GiHamburgerMenu size={25} />
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
