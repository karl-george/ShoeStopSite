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
