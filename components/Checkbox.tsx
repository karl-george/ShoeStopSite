import { useState } from 'react';
import { useRouter } from 'next/router';

interface IProps {
  label: string;
  query: string;
}

function Checkbox({ label, query }: IProps) {
  const [checked, setChecked] = useState(false);

  const router = useRouter();

  console.log(router.asPath);

  const handleChange = () => {
    setChecked((prev) => !prev);
    router.push(`${query}=${label}`);
  };

  return (
    <div className='flex items-center'>
      <label className='text-[#5b5b5b] cursor-pointer'>
        <input
          type='checkbox'
          checked={checked}
          onChange={handleChange}
          className='w-5 h-5 rounded-md checked:bg-blue-accent focus:ring-0 mr-2'
        />
        {label}
      </label>
    </div>
  );
}

export default Checkbox;
