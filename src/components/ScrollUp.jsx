// ScrollToTopButton.js (or wherever you define your ScrollToTopButton component)
import React, { useState, useEffect } from 'react';
import './ScrollUp.css'
import arrowUp from '../assets/arrowUP.png'
const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        const scrollY = window.scrollY;
        const isVisible = scrollY > 100; // Adjust this value based on when you want the button to appear
        setIsVisible(isVisible);
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <button
            className={`scroll-to-top-button ${isVisible ? 'visible' : ''}`}
            onClick={scrollToTop}>
            <img src={arrowUp} style={{ width: "30px", height: "auto" }} />
        </button>
    );
};

export default ScrollToTopButton;
