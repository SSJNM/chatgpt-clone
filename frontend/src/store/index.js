import { configureStore } from "@reduxjs/toolkit";
import { Provider } from 'react-redux'
import {chatSliceReducer} from '../slices/ChatSlice'
import { historySliceReducer } from "../slices/HistorySlice";

const store = configureStore({
    reducer: {
        chats: chatSliceReducer,
        history: historySliceReducer,
    }
})

function StoreProvider({children}){
    return <Provider store={store}>
        {children}
    </Provider>
} 

export {store,StoreProvider};
