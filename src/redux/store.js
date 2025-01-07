// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';

import productReducer from './slices/productReducer';
import userReducer from './slices/userSlice';


const store = configureStore({
  reducer: {
    user: userReducer,
    products: productReducer,
    
  },
});

export default store;
