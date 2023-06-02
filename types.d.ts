interface Brand {
  _id: string;
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  _type: 'brand';
  slug: {
    _type: 'slug';
    current: string;
  };
  title: string;
}

interface Product {
  _id: string;
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  _type: 'product';
  slug: {
    _type: 'slug';
    current: string;
  };
  id: string;
  brand: {
    _ref: string;
    _type: 'reference';
  };
  image: Image[];
  sizes: string[];
  title: string;
  price: number;
  gOptions: string;
  colour: string;
  description: string;
  chosenSize: string;
}

interface Image {
  _key: string;
  _type: 'image';
  asset: {
    url: string;
  };
}

interface StripeProduct {
  id: string;
  amount_discount: number;
  amount_subtotal: number;
  amount_tax: number;
  amount_total: number;
  currency: string;
  description: string;
  object: string;
  quantity: number;
  price: {
    unit_amount: number;
  };
}
