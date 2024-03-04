import { createSlice } from "@reduxjs/toolkit";

// Declare initialState here
const initialState = [];

const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            console.log(action)
            state.push(action.payload);
        },
        removeFromCart(state, action) {
            return state.filter((item) => item.id !== action.payload);
        }
    }       
});

export const { addToCart, removeFromCart } = CartSlice.actions;

export default CartSlice.reducer; // Adjusted to export the reducer
