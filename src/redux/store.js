// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';

// import authReducer from './slices/authSlice';
import userReducer from './slices/userSlice';


const store = configureStore({
  reducer: {
    user: userReducer,
    // auth: authReducer,
    
  },
});

export default store; // Exporting the store correctly
