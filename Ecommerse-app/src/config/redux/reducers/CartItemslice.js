import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    counter: 0,
  };



export const  CartItemSlice = createSlice({
    name : "Cartitems",
    initialState,
    reducers:{
        addToCart: (state, action) => {
            state.items.push(action.payload.item);
            state.counter = state.todos.length;
        }
    }
})


export const  { addToCart } = CartItemSlice.actions

export default CartItemSlice.reducer