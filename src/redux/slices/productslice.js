import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
};

const productslice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    selectProductById: (state, action) => {
      return state.products.find(product => product.id === action.payload);
    },
  },
});

export const { setProducts, selectProductById } = productslice.actions;
export const selectProducts = state => state.products.products;

export default productslice.reducer;
