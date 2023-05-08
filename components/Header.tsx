import Link from 'next/link';
import { MdOutlineShoppingBag, MdOutlineSearch } from 'react-icons/md';
import { AiOutlineUser, AiOutlineClose } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';
import Image from 'next/image';
import logo from '../public/logo.png';
import { useState } from 'react';

function Header() {
  const [isNavToggled, setIsNavToggled] = useState(false);

  return (
    <header>
      <div className='flex flex-row justify-between items-center py-6'>
        <Link href='/'>
          <div className='relative w-40'>
            <Image src={logo} alt='ShoeStop Logo' className='object-contain' />
          </div>
        </Link>
        <div className='hidden md:flex space-x-8 font-medium text-lg'>
          <Link href='/'>Home</Link>
          <Link href='/men'>Men</Link>
          <Link href='/women'>Women</Link>
          <Link href='/kids'>Kids</Link>
        </div>
        <div className='flex space-x-6'>
          <Link href='/search'>
            <MdOutlineSearch size={25} />
          </Link>
          <Link href='/checkout'>
            <MdOutlineShoppingBag size={25} />
          </Link>
          <Link href='/user' className='hidden md:block'>
            <AiOutlineUser size={25} />
          </Link>
          <a
            href='#'
            className='md:hidden'
            onClick={() => setIsNavToggled((prev) => !prev)}
          >
            {isNavToggled ? (
              <AiOutlineClose size={25} />
            ) : (
              <GiHamburgerMenu size={25} />
            )}
          </a>
        </div>
      </div>
      {isNavToggled ? <p>Open</p> : <p>Closed</p>}
    </header>
  );
}

export default Header;
