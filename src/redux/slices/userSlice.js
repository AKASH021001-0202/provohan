// src/redux/slices/userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    token: null,
  
    loading: false,
    error: null,
  },
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    
    },
    logout(state) {
      state.user = null;
      state.token = null;
      
    },
    clearUser(state) {
      state.token = null;
      state.user = null;
      // Optionally clear other user details as needed
    },
  },
 
});

export const { setUser, logout, clearUser } = userSlice.actions;
export default userSlice.reducer;
