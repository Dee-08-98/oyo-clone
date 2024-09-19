import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './slice'

const store = configureStore({
    reducer: {
        app: cartReducer
    }
})

export default store;