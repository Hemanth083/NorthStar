import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../store/slices/cart.slice";
import closeIcon from '../assets/close.svg';

const CartItem = ({ cartitem, setTotalCost }) => {
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();

    if (!cartitem) {
        return <div>No item data available</div>;
    }

    const { id, label, source, price } = cartitem;

    const handleQuantity = (e) => {
        console.log('setTotalCost:', setTotalCost);  // Add this line
        const newQuantity = parseInt(e.target.value, 10);
        setQuantity(newQuantity);

        if (typeof setTotalCost === 'function') {
            setTotalCost(newQuantity * price);
        }
    };


    const handleRemoveToCart = () => {
        dispatch(removeFromCart(id));
    };

    const total = quantity * price || 0;
    const formattedTotal = total.toFixed(2);

    return (
        <tr className="CartItem">
            <td style={{ width: '50%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <img src={closeIcon} alt="Close Icon" style={{ cursor: 'pointer' }} onClick={handleRemoveToCart} />
                <img className="CartItemImage" src={source || 'default-image-url'} alt={label ? `${label} Image` : 'Default Image'} />
            </td>
            <td>{label ? label : 'Item Label'}</td>
            <td>{price != null ? `$${price.toFixed(2)}` : 'Price not available'}</td>
            <td>
                <select onChange={handleQuantity} value={quantity}>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
                        <option key={value} value={value}>
                            {value}
                        </option>
                    ))}
                </select>
            </td>
            <td className="TotalAmountInTableData">{`$${formattedTotal}`}</td>
        </tr>
    );
};

export default CartItem;
