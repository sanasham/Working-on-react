import { configureStore } from '@reduxjs/toolkit';
import appSlice from './appSlice';
import searchSlice from './searchSlice';
import addMessage from './chartSlice';

const store = configureStore({
  reducer: {
    app: appSlice,
    search: searchSlice,
    chart: addMessage,
  },
});

export default store;
