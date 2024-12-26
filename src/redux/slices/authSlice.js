import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';



const authSlice = createSlice({
  name: 'auth',
  initialState: {
    userId: null,
    token: null,
    isAuthenticated: false,
    loading: false,
    error: null,
  },
  reducers: {
    logout(state) {
      state.userId = null;
      state.token = null;
      state.isAuthenticated = false;
    },
  },
  
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
