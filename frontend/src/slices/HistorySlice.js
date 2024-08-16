import React, { act } from 'react'
import { createSlice } from '@reduxjs/toolkit'
import { fetchHistory,addHistory,deleteHistory } from '../thunks'


const historySlice = createSlice({
    "name": "history",
    "initialState": {
        isHistoryLoading: false,
        history: [],
        isHistoryError: null
    },
    "extraReducers": (builder) => {
        builder
        .addCase(fetchHistory.fulfilled,async (state,action) => {
            state.history = [...state.history ,action.payload]
            state.isHistoryLoading = false
        })
        .addCase(fetchHistory.pending,async (state,action) => {
            state.isHistoryLoading = true
        })
        .addCase(fetchHistory.rejected,async (state,action) => {
            state.isHistoryError = action.error
            state.isHistoryLoading = false
        })
    }
})

export default historySlice
export const historySliceReducer = historySlice.reducer