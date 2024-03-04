import React from 'react';
import imagesData from './Pages/data';
import icon from './assets/Benifits icons/icon.svg';
import icon1 from './assets/Benifits icons/icon-1.svg';
import icon2 from './assets/Benifits icons/icon-2.svg';
import icon3 from './assets/Benifits icons/icon-3.svg';
import tp1 from "./assets/topSelling/tp1.svg";
import tp2 from "./assets/topSelling/tp2.svg";
import tp3 from "./assets/topSelling/tp3.svg";
import tp4 from "./assets/topSelling/tp4.svg";
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from './store/slices/cart.slice';
import NavagationBar from './components/NavigationBar';
import Footer from './components/Footer';
// import { useHistory } from 'react-router-dom';
import UseWindowResize from './components/use-window-resize/index';

function Project() {
    const windowSize = UseWindowResize();
    const { width } = windowSize;
    const adjustedWidth = width - 16.5;

    return (
        <div className='body' style={{ width: adjustedWidth }}>
            <NavagationBar />
            <MainPage />
            <NewArrival />
            <Benifits />
            <Promo />
            <TopSellers />
            <Footer />
        </div>
    );
}

const MainPage = () => {
    return (
        <div className='mainPage'>
            <div className='empty'></div>
            <div className='displayOnMainPage'>
                <h1 className='heading mainHeading'>STYLIST PICKS BEAT <br />
                    THE HART</h1>
                <button className='mainPageButton'>SHOP NOW</button>
            </div>
        </div>
    );
}

const NewArrival = () => {
    return (
        <div className='NewArrival'>
            <div className='NewArrivalHeader'>
                <h1 className='heading newArrivalHeading'>Discover NEW Arrivals</h1>
                <p className='SubHeading'>Recently added shirts!</p>
                <div className='container'>
                    {imagesData.map((item, index) => (
                        <AnImage key={index} image={item} />
                    ))}
                </div>
            </div>
        </div>
    )
}

const AnImage = ({ image }) => {
    const dispatch = useDispatch();
    const { cart } = useSelector((state) => state);
    // const history = useHistory(); // Use useHistory

    const handleAddToCart = () => {
        dispatch(addToCart(image));
    };

    const handleRemoveToCart = () => {
        dispatch(removeFromCart(image.id));
    }

    // const handleImageClick = () => {
    //     history.push('/product-detail', { state: { image } });
    // };
    return (
        <div className='newItems'>
            <img alt='' src={image.source} />
            <div>
                <p className='nameOfShirts'>{image.label}</p>
                <p className='nameOfShirts' style={{ color: '#024E82', size: '10px' }}>
                    {image.price + " $"}
                </p>
            </div>
            <div style={{ display: 'flex', flexDirection: "row" }}>
                <button className='mainPageButton addTOCart' onClick={() => (cart.some(item => item.id === image.id) ? handleRemoveToCart() : handleAddToCart())}>
                    {cart.some(item => item.id === image.id) ? 'remove' : 'add to Cart'}
                </button>
                <button className='mainPageButton addTOCart'>
                    Buy Now
                </button>
            </div>
        </div>
    );
};

const Benifits = () => {
    return (
        <div className='benifitsContainer'>
            <div className="benifits">
                <div className="benifitsLogo">
                    <img alt='' className='icon' src={icon} />
                </div>
                <div className="benifitText">
                    <h2>FREE SHIPING</h2>
                    <p>Enjoy free shipping on all orders above $100</p>
                </div>
            </div>
            <div className="benifits">
                <div className="benifitsLogo">
                    <img alt='' className='icon' src={icon1} />
                </div>
                <div className="benifitText">
                    <h2>SUPPORT 24/7</h2>
                    <p>Our support team is there to help you for queries</p>
                </div>
            </div><div className="benifits">
                <div className="benifitsLogo">
                    <img alt='' className='icon' src={icon2} />
                </div>
                <div className="benifitText">
                    <h2>30 DAYS RETURN</h2>
                    <p>Simply return it within 30 days for an exchange.</p>
                </div>
            </div><div className="benifits">
                <div className="benifitsLogo">
                    <img alt='' className='icon' src={icon3} />
                </div>
                <div className="benifitText">
                    <h2>SECURED</h2>
                    <p>Our payments are secured with 256 bit encryption</p>
                </div>
            </div>
        </div>
    )
}

const Promo = () => {
    return (
        <div className="promo">
            <div className="promo1">
                <h1 className='PromoHeading'>PEACE OF MIND</h1>
                < p className='promotext'> A one-stop platform for all your fashon needs,hussel-free.Buy with Links peace of mind.</p>
                <button className='mainPageButton'>BUY NOW</button>
            </div>
            <div className="promo2">
                <h1 className='PromoHeading'>BYE 2 GET 1 FREE</h1>
                <p className='promotext'>End of season sale.Buy any 2 items of your chooice and get 1 free</p>
                <button className='mainPageButton'>BUY NOW</button>
            </div>
        </div>
    )
}

const TopSellers = () => {
    const images = [tp1, tp2, tp3, tp4];
    return (
        <div className='topSales'>
            <h1 className='heading'>Top Sellers</h1>
            <p className='SubHeading'>Browse our top-selling products</p>
            <div className=' container topSalesContainer'>
                {images.map((item, index) => (
                    <div className='newItems'>
                        <img alt='' key={index} src={item} />
                        <p className='nameOfShirts' >Shirt {index}</p>
                        <p className='nameOfShirts'  > $69.00</p>
                    </div>
                ))}
            </div>
            <button className='mainPageButton buyNow'>BUY NOW</button>

        </div>
    )
}



export default Project;
