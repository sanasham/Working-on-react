import { createSlice } from '@reduxjs/toolkit';
import { LIVE_CHART_COUNT } from './constants';

const chartSlice = createSlice({
  name: 'chart',
  initialState: {
    messages: [],
  },
  reducers: {
    addMessage: (state, action) => {
      state.messages.splice(LIVE_CHART_COUNT, 1);
      state.messages.unshift(action.payload);
    },
  },
});

export const { addMessage } = chartSlice.actions;
export default chartSlice.reducer;
