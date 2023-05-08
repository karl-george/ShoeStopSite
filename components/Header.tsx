import Image from 'next/image';
import Link from 'next/link';
import logo from '../public/logo.png';

function Header() {
  return (
    <header className='flex flex-row items-center justify-between w-full py-4 padding-wide'>
      <div>
        <Link href='/'>
          <div className='w-40 h-50 cursor-pointer'>
            <Image src={logo} alt='ShoeStop Logo' className='object-contain' />
          </div>
        </Link>
      </div>
      <div className='items-center justify-center space-x-8 hidden md:flex'>
        <Link href='/' className='text-sm font-bold text-hover'>
          Find a Store
        </Link>
        <Link href='/' className='text-sm font-bold text-hover'>
          Help
        </Link>
        <Link href='/' className='text-sm font-bold text-hover'>
          Sign In
        </Link>
      </div>
    </header>
  );
}

export default Header;
