import Checkbox from './Checkbox';

interface Props {
  brands: Brand[];
}

function Sidebar({ brands }: Props) {
  const brandList = brands.map((brand) => (
    <Checkbox label={brand.title} key={brand._id + brand.title} />
  ));

  return (
    <div className='px-6 py-4 space-y-8'>
      <div className='space-y-3'>
        <h3 className='text-title'>Brand</h3>
        {brandList}
      </div>
      <div>
        <h3 className='text-title'>Gender</h3>
      </div>
      <div>
        <h3 className='text-title'>Price</h3>
      </div>
      <div>
        <h3 className='text-title'>Color</h3>
      </div>
    </div>
  );
}

export default Sidebar;
