import ProductCard from './ProductCard';

interface Prop {
  products: Product[];
}

function Products({ products }: Prop) {
  const productList = products.map((product) => (
    <ProductCard product={product} />
  ));

  return (
    <div className='grid grid-cols-3 gap-8 w-full px-4'>{productList}</div>
  );
}

export default Products;
