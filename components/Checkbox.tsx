import { useState } from 'react';

interface IProps {
  label: string;
}

function Checkbox({ label }: IProps) {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <div className='flex items-center'>
      <input
        type='checkbox'
        checked={checked}
        onChange={handleChange}
        className='w-5 h-5 rounded-full checked:bg-blue-accent focus:ring-0'
      />
      <label className='ml-2'>{label}</label>
    </div>
  );
}

export default Checkbox;
