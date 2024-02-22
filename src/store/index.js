import CartReducer from './slices/cart.slice'
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
    reducer: {
        cart: CartReducer
    }
})
export default store