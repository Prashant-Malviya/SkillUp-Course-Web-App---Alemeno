// src/redux/slice/searchSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  query: '',
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchQuery: (state, action) => {
      state.query = action.payload;
      console.log("search query", state.query);
      
    },
  },
});

export const { setSearchQuery } = searchSlice.actions;
export default searchSlice.reducer;
