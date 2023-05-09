interface IProps {
  title: string;
  onClick?: () => void;
  width?: string;
  loading?: boolean;
  padding?: string;
  filled?: boolean;
}

function Button({ title, onClick, width, loading, padding, filled }: IProps) {
  return (
    <button
      className={`relative z-30 box-border inline-flex ${
        width ? width : 'w-auto'
      } ${padding} cursor-pointer items-center justify-center overflow-hidden rounded font-medium  focus:outline-none ${
        filled
          ? 'bg-[#4B91F1] text-white hover:bg-[#2d6cc2]'
          : 'text-[#4B91F1] border border-[#4B91F1] hover:bg-[#4B91F1] hover:text-white'
      }`}
      onClick={onClick}
    >
      {loading ? ' Loading' : title}
    </button>
  );
}

export default Button;
