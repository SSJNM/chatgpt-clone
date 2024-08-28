import { createSlice } from "@reduxjs/toolkit"; 

const chatSlice = createSlice({
    "name": "chats",
    "initialState": {
        chats: []
    },
    "reducers": {
        fetchallChats: (state,action) => {
            state.chats = action.payload
        },
        addblock: (state,action) => {
            state.chats = [...state.chats, action.payload]
        },
        removeblock: (state,action) => {
            state.chats = state.chats.filter(chat => chat.id !== action.payload.id)
        },
        editblock: (state,action) => {
            const chatIndex = state.chats.findIndex(chat => chat.id === action.payload.id);
            if (chatIndex >= 0) {
              state.chats[chatIndex].message = action.payload.message;
            }
        }
    }
}) 


export const { fetchallChats,addblock, removeblock, editblock } = chatSlice.actions
export const chatSliceReducer = chatSlice.reducer;