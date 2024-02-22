import React from "react";

const CartItem = ({ cartitem }) => {
    if (!cartitem) {
        // Handle the case where cartitem is not provided
        return <div>No item data available</div>;
    }

    const { id, source, label, price } = cartitem;

    return (
        <div className="CartItem">
            <img className="CartItemImage" src={source || 'default-image-url'} alt={label || 'Item Image'} />
            <div>
                <p>{label || 'Item Label'}</p>
                <p>{price != null ? `$${price}` : 'Price not available'}</p>
            </div>
        </div>
    );
};

export default CartItem;
