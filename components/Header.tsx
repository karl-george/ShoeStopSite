import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MdOutlineShoppingBag, MdOutlineSearch } from 'react-icons/md';
import { AiOutlineUser, AiOutlineClose } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';
import { signIn, useSession } from 'next-auth/react';
import { selectBasketItems } from '@/redux/basketSlice';
import logo from '../public/logo.png';
import Button from './Button';
import { useSelector } from 'react-redux';

function Header() {
  const [isNavToggled, setIsNavToggled] = useState(false);

  const { data: session } = useSession();

  const basketItems = useSelector(selectBasketItems);

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
          <Link href='/shoes/men' className='text-hover text-title'>
            Men
          </Link>
          <Link href='/shoes/women' className='text-hover text-title'>
            Women
          </Link>
          <Link href='/shoes/kids' className='text-hover text-title'>
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
            <div className='relative'>
              <span className='absolute z-50 flex items-center justify-center w-5 h-5 text-[10px] text-white border border-gray-300 rounded-full -right-1 -top-1 bg-blue-accent'>
                {basketItems.length > 0 && basketItems.length}
              </span>
              <MdOutlineShoppingBag
                size={25}
                className='text-hover text-title'
              />
            </div>
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
