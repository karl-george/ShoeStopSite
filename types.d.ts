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
  brand: {
    _ref: string;
    _type: 'reference';
  };
  image: [
    {
      _type: 'image';
      _key: string;
      asset: {
        _ref: string;
        _type: 'reference';
      };
    }
  ];
  title: string;
  price: number;
  gOptions: string;
  colour: string;
  description: string;
}
