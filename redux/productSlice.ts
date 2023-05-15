import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

export interface ProductState {
  items: Product[];
}

const initialState: ProductState = {
  items: [],
};

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProducts: (state: ProductState, action: PayloadAction<Product[]>) => {
      state.items = state.items.concat(action.payload);
    },
  },
});

export const { addProducts } = productSlice.actions;
export default productSlice.reducer;

export const selectAllItems = (state: RootState) => state.products.items;
