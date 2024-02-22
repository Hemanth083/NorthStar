import React, { useEffect, useState } from 'react';
import './cart.css';
import { Footer } from '../main.jsx';
import NavagationBar from '../components/NavigationBar';
import { useSelector } from 'react-redux';
import CartItem from '../components/CartItem.jsx';
const Cart = () => {
    const [totalCost, setTotalCost] = useState(0);
    const cart = useSelector(state => state.cart); // Use state.cart as a selector

    useEffect(() => {
        setTotalCost(cart.reduce((acc, curr) => acc + curr.price, 0));
    }, [cart]); // Include 'cart' in the dependency array

    console.log(cart, totalCost);

    const bodyWidth = window.innerWidth;
    const body = { width: { bodyWidth } };

    return (
        <div className="cart-page" style={body}>
            <NavagationBar />
            <h1>{totalCost != 0 ? "Items in Cart" : "Cart is Empty"}</h1>
            <div className='CartItems'>
                {cart.map(cartItem =>
                    <CartItem key={cartItem.id} cartitem={cartItem} />
                )}
            </div>
            <Footer />
        </div>
    );
};

export default Cart;
