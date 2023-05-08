import Image from 'next/image';
import Link from 'next/link';
import logo from '../public/logo.png';
import { MdOutlineShoppingBag, MdOutlineSearch } from 'react-icons/md';
import { AiOutlineUser } from 'react-icons/ai';

function Header() {
  return (
    <header>
      <div className='flex flex-row items-center justify-between w-full py-4 container'>
        <Link href='/'>
          <div className='w-40 h-50 cursor-pointer'>
            <Image src={logo} alt='ShoeStop Logo' className='object-contain' />
          </div>
        </Link>
        <div className='items-center justify-center space-x-8 hidden md:flex'>
          <Link href='/findstore' className='text-sm font-bold text-hover'>
            Find a Store
          </Link>
          <Link href='/help' className='text-sm font-bold text-hover'>
            Help
          </Link>
          <Link href='/signin' className='text-sm font-bold text-hover'>
            Sign In
          </Link>
        </div>
      </div>
      <div className='grid grid-cols-3 p-4 container'>
        <div></div>
        <div className='flex justify-center items-center space-x-8 font-medium text-lg'>
          <Link href='/men'>Men</Link>
          <Link href='/women'>Women</Link>
          <Link href='/kids'>Kids</Link>
        </div>
        <div className='flex justify-end items-center space-x-8'>
          <Link href='/search'>
            <MdOutlineSearch size={25} />
          </Link>
          <Link href='/checkout'>
            <MdOutlineShoppingBag size={25} />
          </Link>
          <Link href='/user'>
            <AiOutlineUser size={25} />
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
