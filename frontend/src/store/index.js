import { configureStore } from "@reduxjs/toolkit";
import { Provider } from 'react-redux'
import {chatSliceReducer} from '../slices/ChatSlice'

const store = configureStore({
    "reducer": chatSliceReducer,
})


function StoreProvider({children}){
    return <Provider store={store}>
        {children}
    </Provider>
} 

export {store,StoreProvider};
