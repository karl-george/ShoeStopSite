import ProductCard from './ProductCard';

interface Prop {
  products: Product[];
}

function Products({ products }: Prop) {
  const productList = products.map((product) => (
    <ProductCard product={product} key={product._id} />
  ));

  return (
    <div className='grid grid-cols-2 gap-2 md:grid-cols-3 gap-y-12'>
      {productList}
    </div>
  );
}

export default Products;
