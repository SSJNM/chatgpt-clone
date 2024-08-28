import { createSlice } from '@reduxjs/toolkit'
import { fetchHistory,addHistory,deleteHistory } from '../thunks'


const historySlice = createSlice({
    name: 'history',
    initialState: {
      isHistoryLoading: false,
      history: [],
      isHistoryError: null
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        // Handle fetchHistory
        .addCase(fetchHistory.pending, (state) => {
          state.isHistoryLoading = true;
          state.isHistoryError = null;
        })
        .addCase(fetchHistory.fulfilled, (state, action) => {
          state.isHistoryLoading = false;
          state.history = action.payload;
        })
        .addCase(fetchHistory.rejected, (state, action) => {
          state.isHistoryError = action.payload;
          state.isHistoryLoading = false;
        })
        // Handle addHistory
        .addCase(addHistory.pending, (state) => {
          state.isHistoryLoading = true;
          state.isHistoryError = null;
        })
        .addCase(addHistory.fulfilled, (state, action) => {
          state.isHistoryLoading = false;
          state.history.push(action.payload);
        })
        .addCase(addHistory.rejected, (state, action) => {
          state.isHistoryError = action.payload;
          state.isHistoryLoading = false;
        })
        // Handle deleteHistory
        .addCase(deleteHistory.pending, (state) => {
          state.isHistoryLoading = true;
          state.isHistoryError = null;
        })
        .addCase(deleteHistory.fulfilled, (state, action) => {
          state.isHistoryLoading = false;
          state.history = state.history.filter(item => item.id !== action.payload);
        })
        .addCase(deleteHistory.rejected, (state, action) => {
          state.isHistoryError = action.payload;
          state.isHistoryLoading = false;
        });
    }
  });
  
export const historySliceReducer = historySlice.reducer