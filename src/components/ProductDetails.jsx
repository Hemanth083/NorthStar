import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import NavagationBar from './NavigationBar';
import Footer from './Footer';
import '../ProductDetails.css';
import imagesData from '../Pages/data';
import UseWindowResize from './use-window-resize';
import { addToCart, removeFromCart } from '../store/slices/cart.slice';
import topSellingData from '../Pages/topsellingdata';
import { storeData } from '../store/slices/yourOrder';

const ProductDetail = () => {
    const windowSize = UseWindowResize();
    const { width } = windowSize;
    const adjustedWidth = width - 16.5;
    const { id } = useParams();
    const [productDetails, setProductDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const { cart } = useSelector((state) => state);
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(1);
    const [totalCost, setTotalCost] = useState(productDetails ? productDetails.price : 0);

    useEffect(() => {
        window.scrollTo(0, 0);
        const storedProductDetails = localStorage.getItem(`product_${id}`);
        if (storedProductDetails) {
            const parsedDetails = JSON.parse(storedProductDetails);
            setTotalCost(parsedDetails ? parsedDetails.price : 0);
            setProductDetails(parsedDetails);
            setLoading(false);
        } else {
            const data = imagesData.find((product) => product.id === id);
            const topData = topSellingData.find((product) => product.id === id);
            if (data || topData) {
                const selectedData = data || topData;
                localStorage.setItem(`product_${id}`, JSON.stringify(selectedData));
                setTotalCost(selectedData ? selectedData.price : 0);
                setProductDetails(selectedData);
                setLoading(false);
            }
        }
    }, [id]);

    const handleQuantity = (e) => {
        const newQuantity = parseInt(e.target.value, 10);
        setQuantity(newQuantity);

        const updatedProductDetails = {
            ...productDetails,
            price: productDetails ? productDetails.price : 0,
        };
        localStorage.setItem(`product_${id}`, JSON.stringify(updatedProductDetails));

        setTotalCost(newQuantity * (productDetails ? productDetails.price : 0));
    };

    const handleAddToCart = () => {
        dispatch(addToCart(productDetails));
    };

    const handleRemoveToCart = () => {
        dispatch(removeFromCart(productDetails.id));
    };

    const OrderProduct = () => {
        const data = [
            {
                label: productDetails?.label,
                price: totalCost,
            },
        ];
        dispatch(storeData(data));
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
                            <p style={{ textDecoration: 'line-through', fontSize: '20px' }}>
                                {'$' + totalCost}
                            </p>
                            <p className='nameOfShirts' style={{ color: '#024E82', fontWeight: '100', fontSize: '20px' }}>
                                {' $' + totalCost}
                            </p>
                        </div>
                        <p>A classic t-shirt never goes out of style. This is our most premium collection of shirt. This plain white shirt is made up of pure cotton and has a premium finish.</p>
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <select id="sizeDropdown" style={{ marginRight: '5%' }}>
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
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <button className='mainPageButton addTOCart' onClick={() => (cart.some(item => item.id === productDetails.id) ? handleRemoveToCart() : handleAddToCart())}>
                                {cart.some(item => item.id === productDetails.id) ? 'remove' : 'add to Cart'}
                            </button>
                            <Link to='/checkout'>
                                <button onClick={OrderProduct} className='mainPageButton addTOCart'>
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
