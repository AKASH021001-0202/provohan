// src/slices/productSlice.js
import { createSlice } from '@reduxjs/toolkit';

// Initial state
const initialState = {
  products: [], // Array to store multiple products
  selectedProduct: null, // Single selected product
};

// Create slice
const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    // Set the products in the state
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    // Select a single product
    selectSingleProduct: (state, action) => {
      const productId = action.payload;
      state.selectedProduct = state.products.find(product => product.id === productId) || null;
    },
  },
});

// Export actions
export const { setProducts, selectSingleProduct } = productSlice.actions;

// Export reducer
export default productSlice.reducer;
