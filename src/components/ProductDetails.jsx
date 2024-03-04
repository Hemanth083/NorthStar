import React from 'react';
import NavagationBar from './NavigationBar';
import Footer from './Footer';

const ProductDetail = ({ location }) => {
    const image = location?.state?.image || {};

    // Add defensive checks
    const source = image.source || '';
    const label = image.label || '';
    const price = image.price || '';

    return (
        <>
            <NavagationBar />
            <div className='productDetailPage'>
                <img alt='' src={source} />
                <div>
                    <p className='nameOfShirts'>{label}</p>
                    <p className='nameOfShirts' style={{ color: '#024E82', size: '10px' }}>
                        {price + " $"}
                    </p>
                    {/* Add more details if needed */}
                </div>
                {/* Add buttons or actions for add to cart, buy now, etc. */}
            </div>
            <Footer />
        </>
    );
};

export default ProductDetail;
