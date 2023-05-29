import { configureStore } from '@reduxjs/toolkit';
import productReducer from './productSlice';
import basketReducer from './basketSlice';

export const store = configureStore({
  reducer: {
    products: productReducer,
    basket: basketReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
