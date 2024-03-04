import React, { useEffect, useState } from 'react';
import './cart.css';
import Footer from '../components/Footer.jsx';
import NavagationBar from '../components/NavigationBar';
import { useSelector } from 'react-redux';
import CartItem from '../components/CartItem.jsx';
import { Link } from 'react-router-dom';

const Cart = () => {
    const [totalCost, setTotalCost] = useState(0);
    const cart = useSelector(state => state.cart);

    useEffect(() => {
        // Use reduce with a default value of 0 to handle an empty cart
        const newTotalCost = cart.reduce((acc, curr) => {
            // Check if curr.price is a valid number before adding
            if (typeof curr.price === 'number' && !isNaN(curr.price)) {
                return acc + curr.price;
            }
            return acc;
        }, 0);

        setTotalCost(newTotalCost);
    }, [cart]);

    const bodyWidth = window.innerWidth;
    const body = { width: { bodyWidth } };

    return (
        <div className="cart-page" style={body}>
            <NavagationBar />

            <p style={{ textAlign: "start", width: '95%' }}>Home/Shopping cart</p>
            <h1>{totalCost !== 0 ? "Items in Cart" : "Cart is Empty"}</h1>

            <div className='CartItems'>
                <table className='cartTable'>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map(cartItem =>
                            <CartItem key={cartItem.id} cartitem={cartItem} />
                        )}
                    </tbody>
                </table>
            </div>

            {totalCost !== 0 && (
                <div className='SubTotal'>
                    <h2>Cart Total</h2>
                    <table style={{ width: '50vw', height: '200px' }}>
                        <tbody>
                            <tr style={{ borderBottom: "solid 2px gray" }}>
                                <td>SubTotal Cost:</td>
                                <td>${totalCost.toFixed(2)}</td>
                            </tr>
                            <tr style={{ borderBottom: "solid 2px gray" }}>
                                <td>Shipping Fee</td>
                                <td>Free!!</td>
                            </tr>
                            <tr>
                                <th>Total</th>
                                <td>${totalCost.toFixed(2)}</td>
                            </tr>
                        </tbody>
                    </table>
                    <Link to={'/CheckOut'}>
                        <button className='CheckOutButon'>PROCEED TO CHECKOUT</button ></Link>
                </div>
            )
            }

            <Footer />
        </div >
    );
};

export default Cart;
