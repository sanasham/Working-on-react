import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    additems: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.pop();
    },
    clearChart: (state, action) => {
      state.items = [];
    },
  },
});

export const { additems, removeItem, clearChart } = cartSlice.actions;

export default cartSlice.reducer;
