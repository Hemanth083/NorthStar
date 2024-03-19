// store.js
import CartReducer from './slices/cart.slice';
import { configureStore } from '@reduxjs/toolkit';
import CreateOrder from './slices/yourOrder';

const store = configureStore({
    reducer: {
        cart: CartReducer,
        order: CreateOrder, // Corrected key name
    }
});

export default store;
