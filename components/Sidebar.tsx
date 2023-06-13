import { useState } from 'react';
import { BiChevronDown, BiChevronUp } from 'react-icons/bi';
import { genders, prices } from '@/constants';
import Checkbox from './Checkbox';
import Button from './Button';

interface Props {
  brands: Brand[];
  products: Product[];
}

function Sidebar({ brands, products }: Props) {
  const [categoryShowMore, setCategoryShowMore] = useState(true);
  const [colourShowMore, setColourShowMore] = useState(true);
  const [isFilterToggled, setIsFilterToggled] = useState(false);

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
    <div className='flex flex-col mb-8'>
      <div className='md:hidden ml-auto mt-6'>
        <Button
          title='Filter'
          padding='px-7 py-3'
          onClick={() => setIsFilterToggled((prev) => !prev)}
        />
      </div>
      {isFilterToggled ? (
        <div className='divide-y md:w-[180px] md:block px-4'>
          <div className='flex flex-col pb-4 space-y-3'>
            <h3 className='text-title'>Brand</h3>
            {categoryShowMore ? brandList.slice(0, 4) : brandList}
            {categoryShowMore ? (
              <p
                className='flex items-center cursor-pointer text-accent hover:text-blue-accent'
                onClick={() => setCategoryShowMore(false)}
              >
                Show more <BiChevronDown size={22} />
              </p>
            ) : (
              <p
                className='flex items-center cursor-pointer text-accent hover:text-blue-accent'
                onClick={() => setCategoryShowMore(true)}
              >
                Show less <BiChevronUp size={22} />
              </p>
            )}
          </div>
          <div className='py-4 space-y-3'>
            <h3 className='text-title'>Gender</h3>
            {genderList}
          </div>
          <div className='py-4 space-y-3'>
            <h3 className='text-title'>Price</h3>
            {priceList}
          </div>
          <div className='py-4 space-y-3'>
            <h3 className='text-title'>Color</h3>
            {colourShowMore ? colourList.slice(0, 4) : colourList}
            {colourShowMore ? (
              <p
                className='flex items-center cursor-pointer text-accent hover:text-blue-accent'
                onClick={() => setColourShowMore(false)}
              >
                Show more <BiChevronDown size={22} />
              </p>
            ) : (
              <p
                className='flex items-center cursor-pointer text-accent hover:text-blue-accent'
                onClick={() => setColourShowMore(true)}
              >
                Show less <BiChevronUp size={22} />
              </p>
            )}
          </div>
        </div>
      ) : (
        <div className='hidden divide-y md:w-[180px] md:block px-4'>
          <div className='flex flex-col pb-4 space-y-3'>
            <h3 className='text-title'>Brand</h3>
            {categoryShowMore ? brandList.slice(0, 4) : brandList}
            {categoryShowMore ? (
              <p
                className='flex items-center cursor-pointer text-accent hover:text-blue-accent'
                onClick={() => setCategoryShowMore(false)}
              >
                Show more <BiChevronDown size={22} />
              </p>
            ) : (
              <p
                className='flex items-center cursor-pointer text-accent hover:text-blue-accent'
                onClick={() => setCategoryShowMore(true)}
              >
                Show less <BiChevronUp size={22} />
              </p>
            )}
          </div>
          <div className='py-4 space-y-3'>
            <h3 className='text-title'>Gender</h3>
            {genderList}
          </div>
          <div className='py-4 space-y-3'>
            <h3 className='text-title'>Price</h3>
            {priceList}
          </div>
          <div className='py-4 space-y-3'>
            <h3 className='text-title'>Color</h3>
            {colourShowMore ? colourList.slice(0, 4) : colourList}
            {colourShowMore ? (
              <p
                className='flex items-center cursor-pointer text-accent hover:text-blue-accent'
                onClick={() => setColourShowMore(false)}
              >
                Show more <BiChevronDown size={22} />
              </p>
            ) : (
              <p
                className='flex items-center cursor-pointer text-accent hover:text-blue-accent'
                onClick={() => setColourShowMore(true)}
              >
                Show less <BiChevronUp size={22} />
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Sidebar;
