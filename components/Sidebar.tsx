import { useState } from 'react';
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';
import { genders, prices } from '@/constants';
import Checkbox from './Checkbox';

interface Props {
  brands: Brand[];
  products: Product[];
}

function Sidebar({ brands, products }: Props) {
  const [categoryShowMore, setCategoryShowMore] = useState(false);
  const [colourShowMore, setColourShowMore] = useState(false);

  const brandList = brands.map((brand) => (
    <Checkbox label={brand.title} key={brand._id + brand.title} />
  ));

  const genderList = genders.map((gender, idx) => (
    <Checkbox label={gender.title} key={gender.title + idx} />
  ));

  const priceList = prices.map((price, idx) => (
    <Checkbox label={price.price} key={price.price + idx} />
  ));

  /** Retrieve colours, remove duplicates, sort and map through them and pass to Checkbox component **/
  const colours = products.map((product) => {
    return product.colour;
  });

  const colourList = colours
    .filter((item, index) => {
      return colours.indexOf(item) === index;
    })
    .sort()
    .map((colour, idx) => <Checkbox label={colour} key={colour + idx} />);

  return (
    <div className='px-4 divide-y w-[180px]'>
      <div className='space-y-3 pb-4'>
        <h3 className='text-title'>Brand</h3>
        {categoryShowMore ? brandList.slice(0, 4) : brandList}
        {categoryShowMore ? (
          <p
            className='flex items-center cursor-pointer text-accent'
            onClick={() => setCategoryShowMore(false)}
          >
            Show more <BiChevronDown size={22} />
          </p>
        ) : (
          <p
            className='flex items-center cursor-pointer text-accent'
            onClick={() => setCategoryShowMore(true)}
          >
            Show less <BiChevronUp size={22} />
          </p>
        )}
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
        {colourShowMore ? colourList.slice(0, 4) : colourList}
        {colourShowMore ? (
          <p
            className='flex items-center cursor-pointer text-accent'
            onClick={() => setColourShowMore(false)}
          >
            Show more <BiChevronDown size={22} />
          </p>
        ) : (
          <p
            className='flex items-center cursor-pointer text-accent'
            onClick={() => setColourShowMore(true)}
          >
            Show less <BiChevronUp size={22} />
          </p>
        )}
      </div>
    </div>
  );
}

export default Sidebar;
