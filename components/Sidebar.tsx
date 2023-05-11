import { genders, prices } from '@/constants';
import Checkbox from './Checkbox';

interface Props {
  brands: Brand[];
}

function Sidebar({ brands }: Props) {
  const brandList = brands.map((brand) => (
    <Checkbox label={brand.title} key={brand._id + brand.title} />
  ));

  const genderList = genders.map((gender, idx) => (
    <Checkbox label={gender.title} key={gender.title + idx} />
  ));

  const priceList = prices.map((price, idx) => (
    <Checkbox label={price.price} key={price.price + idx} />
  ));

  return (
    <div className='px-6 py-4 divide-y'>
      <div className='space-y-3 py-4'>
        <h3 className='text-title'>Brand</h3>
        {brandList}
      </div>
      <div className='space-y-3 py-4'>
        <h3 className='text-title'>Gender</h3>
        {genderList}
      </div>
      <div className='space-y-3 py-4'>
        <h3 className='text-title'>Price</h3>
        {priceList}
      </div>
      <div className='space-y-3 py-4'>
        <h3 className='text-title'>Color</h3>
      </div>
    </div>
  );
}

export default Sidebar;
