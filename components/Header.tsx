import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MdOutlineShoppingBag, MdOutlineSearch } from 'react-icons/md';
import { AiOutlineUser, AiOutlineClose } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';
import logo from '../public/logo.png';
import Button from './Button';

function Header() {
  const [isNavToggled, setIsNavToggled] = useState(false);

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
              ? 'fixed flex flex-col top-14 right-1 w-[200px] py-8 px-6 space-y-6 font-medium text-lg transition border-l-2'
              : 'hidden space-x-8 md:flex'
          }
        >
          <Link href='/' className='text-hover text-title'>
            Home
          </Link>
          <Link href='/men' className='text-hover text-title'>
            Men
          </Link>
          <Link href='/women' className='text-hover text-title'>
            Women
          </Link>
          <Link href='/kids' className='text-hover text-title'>
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
          <Link href='/user' className='hidden md:block'>
            <AiOutlineUser size={25} className='text-hover text-title' />
          </Link>
          <a
            href='#'
            className='md:hidden text-title'
            onClick={() => setIsNavToggled((prev) => !prev)}
          >
            {isNavToggled ? (
              <AiOutlineClose size={25} />
            ) : (
              <GiHamburgerMenu size={25} />
            )}
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
