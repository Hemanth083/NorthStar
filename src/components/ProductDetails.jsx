import React, { useEffect, useState } from 'react';
import NavagationBar from './NavigationBar';
import Footer from './Footer';
import '../ProductDetails.css';
import { useParams } from 'react-router-dom';
import imagesData from '../Pages/data';
import UseWindowResize from './use-window-resize';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../store/slices/cart.slice';
import { Link } from 'react-router-dom';

const ProductDetail = () => {
    const windowSize = UseWindowResize();
    const { width } = windowSize;
    const adjustedWidth = width - 16.5;
    const { id } = useParams();
    const [productDetails, setProductDetails] = useState("");
    const [loading, setLoading] = useState(true);
    const { cart } = useSelector((state) => state);
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(1);
    const [totalCost, setTotalCost] = useState(productDetails.price);



    const handleAddToCart = () => {
        dispatch(addToCart(productDetails));
    };

    const handleRemoveToCart = () => {
        dispatch(removeFromCart(productDetails.id));
    }


    useEffect(() => {
        const storedProductDetails = localStorage.getItem(`product_${id}`);
        if (storedProductDetails) {
            setProductDetails(JSON.parse(storedProductDetails));
            setLoading(false);
            setTotalCost(productDetails.price);

        } else {
            const data = imagesData.find((product) => product.id === id);
            if (data) {
                localStorage.setItem(`product_${id}`, JSON.stringify(data));

                setProductDetails(data);
                setLoading(false);
                setTotalCost(data.price)
            }
        }
    }, [id]);


    if (loading) {
        return <p>Loading...</p>;
    }

    const handleQuantity = (e) => {
        const newQuantity = parseInt(e.target.value, 10);
        setQuantity(newQuantity);
        setTotalCost(newQuantity * (productDetails ? productDetails.price : 0));

        const updatedProductDetails = {
            ...productDetails,
            price: productDetails ? productDetails.price : 0, // Update the price per item if needed
        };
        localStorage.setItem(`product_${id}`, JSON.stringify(updatedProductDetails));
    };


return (
    <div className='productDetailPage' style={{ width: adjustedWidth }}>
        <NavagationBar />
        {productDetails ? (
            <div className='productDetail'>
                <div className='imageSection'>
                    <img style={{ width: '85%' }} alt='' src={productDetails.source} />
                </div>
                <div className='Details'>
                    <p className='shirtName'>{productDetails.label}</p>
                    <div className='price'>
                        <p style={{ textDecoration: 'line-through', fontSize: "20px" }}>{"$" + totalCost + 0} </p>
                        < p className='nameOfShirts' style={{ color: '#024E82', fontWeight: '100', fontSize: '20px' }}>
                            {" $ " + totalCost}
                        </p>
                    </div>
                    <p>A classic t-shirt never goes out of style. This is our most premium collection of shirt. This plain white shirt is made up of pure cotton and has a premium finish.</p>
                    <div style={{ display: 'flex', flexDirection: 'row' }} >
                        <select id="sizeDropdown" style={{ marginRight: "5%" }} >
                            <option value="">Select Size</option>
                            <option value="small">Small</option>
                            <option value="medium">Medium</option>
                            <option value="large">Large</option>
                            <option value="xl">XL</option>
                        </select>
                        <select onChange={handleQuantity} value={quantity}>
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
                                <option key={value} value={value}>
                                    {value}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div style={{ display: 'flex', flexDirection: "row" }}>
                        <button className='mainPageButton addTOCart' onClick={() => (cart.some(item => item.id === productDetails.id) ? handleRemoveToCart() : handleAddToCart())}>
                            {cart.some(item => item.id === productDetails.id) ? 'remove' : 'add to Cart'}
                        </button>
                        <Link to='/checkout'>
                            <button className='mainPageButton addTOCart'>
                                Buy Now
                            </button>
                        </Link>

                    </div>
                </div>
            </div>
        ) : (
            <p>Error: Product not found</p>
        )}
        <Footer />
    </div>
);
};

export default ProductDetail;
