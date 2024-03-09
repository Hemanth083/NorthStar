// YourOrder.js
import React from "react";
import { useSelector } from "react-redux";
import { selectedStorageData } from "../store/slices/yourOrder";
import '../Pages/cart.css'

const YourOrder = () => {
    const storeData = useSelector(selectedStorageData);
    return (
        <div>
            <h1>Your Order</h1>
            {storeData.map((item, index) => (
                <table className='SubTotal' style={{
                    width: '50vw', height: '200px'
                }} key={index}>
                    <tr style={{ height: "60px" }}>
                        <td>Product</td>
                        <td>{` ${item.label}`}</td>
                    </tr>
                    <tr style={{
                        height: "60px",
                        borderBottom: "solid 2px gray"
                    }}>
                        <td>Price</td>
                        <td>{` $${item.price}`}</td>
                    </tr>
                    <tr><button onClick={() => alert("ORDER PLACED SUCCESSFULLY")} className="CheckOutButon">Place Order</button></tr>
                </table>
            ))}
        </div>
    );
};

export default YourOrder;
