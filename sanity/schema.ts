import { type SchemaTypeDefinition } from 'sanity';
import brand from './brand';
import product from './product';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [brand, product],
};
