import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: 'Cart',
    initialState: [],
    reducer: {
        add(state,action){
            state.push(action.payload)
        }
    }
})

export const {add} = cartSlice.actions;
export default createSlice.reducer;