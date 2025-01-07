// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';

import userReducer from './slices/userSlice';
import productsReducer from './slices/productslice';


const store = configureStore({
  reducer: {
    user: userReducer,
    products: productsReducer,
    
  },
});

export default store;
