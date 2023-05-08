export const fetchBrands = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getBrands`);

  const data = await res.json();
  const brands: Brand[] = data.brands;

  return brands;
};
