function Footer() {
  return (
    <div className='mt-20 bg-gray-100 border-t-2'>
      <div className='container'>
        <div className='flex items-center justify-between my-8 max-w-[600px] mx-auto'>
          <div className='space-y-5'>
            <h2 className='mb-3 font-semibold md:text-xl'>GET HELP</h2>
            <p className='cursor-pointer hover:text-blue-accent'>
              Order Status
            </p>
            <p className='cursor-pointer hover:text-blue-accent'>
              Payment Options
            </p>
            <p className='cursor-pointer hover:text-blue-accent'>Returns</p>
            <p className='cursor-pointer hover:text-blue-accent'>Contact Us</p>
          </div>
          <div className='space-y-5'>
            <h2 className='mb-3 font-semibold md:text-xl'>ABOUT US</h2>
            <p className='cursor-pointer hover:text-blue-accent'>News</p>
            <p className='cursor-pointer hover:text-blue-accent'>Careers</p>
            <p className='cursor-pointer hover:text-blue-accent'>Investors</p>
            <p className='cursor-pointer hover:text-blue-accent'>
              Sustainability
            </p>
          </div>
          <div className='space-y-5'>
            <h2 className='mb-3 font-semibold md:text-xl'>LEGAL</h2>
            <p className='cursor-pointer hover:text-blue-accent'>GDPR</p>
            <p className='cursor-pointer hover:text-blue-accent'>
              Terms & Conditions
            </p>
            <p className='cursor-pointer hover:text-blue-accent'>
              Privacy Policy
            </p>
            <p className='cursor-pointer hover:text-blue-accent'>
              Right of Withdrawal
            </p>
          </div>
        </div>
        <div className='pb-4 text-center'>© 2023 Karl George</div>
      </div>
    </div>
  );
}

export default Footer;
