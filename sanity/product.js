const gOptions = [
  {
    title: "Men's",
    value: "Men's",
  },
  {
    title: "Women's",
    value: "Women's",
  },
  {
    title: 'Kids',
    value: 'Kids',
  },
  {
    title: 'Unisex',
    value: 'Unisex',
  },
];

export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'colour',
      title: 'Colour',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'array',
      of: [{ type: 'image' }],
      options: {
        hotspot: true,
      },
    },
    {
      name: 'sizes',
      title: 'Sizes',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'brand',
      title: 'Brand',
      type: 'reference',
      to: [{ type: 'brand' }],
    },
    {
      name: 'gOptions',
      title: 'Gender Options',
      type: 'string',
      options: {
        list: [...gOptions],
      },
    },
  ],
};
