
import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    cart: []
}

export const cartSlice = createSlice({
    name: "search_Bar",
    initialState,
    reducers: {
        addToSearchBar: (state, action) => {
            // console.log(action.payload);
            state.cart=action.payload
        }
    }
})

export const { addToSearchBar } = cartSlice.actions;

export default cartSlice.reducer;