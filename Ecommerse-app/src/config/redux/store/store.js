import { configureStore } from "@reduxjs/toolkit";
import  CartItemSlice from "../reducers/CartItemslice"

export const store = configureStore({
    reducer:  CartItemSlice
})