import { v4 as uuidv4 } from 'uuid';
import img1 from '../assets/eCommerce Fashion Website (Community)/img1.jpg';
import img2 from '../assets/eCommerce Fashion Website (Community)/img2.jpg';
import img3 from '../assets/eCommerce Fashion Website (Community)/img3.jpg';
import img4 from '../assets/eCommerce Fashion Website (Community)/img4.jpg';
import img5 from '../assets/eCommerce Fashion Website (Community)/img5.jpg';
import img6 from '../assets/eCommerce Fashion Website (Community)/img6.jpg';
import img7 from '../assets/eCommerce Fashion Website (Community)/img7.jpg';
import img8 from '../assets/eCommerce Fashion Website (Community)/img8.jpg';

const imagesData = [
    {
        id: uuidv4(),
        label: 'Adventura Classic Shirt',
        source: img1,
        price: 90,
    },
    {
        id: uuidv4(),
        label: 'Elegance Elite Polo',
        source: img2,
        price: 89,
    },
    {
        id: uuidv4(),
        label: 'Urban Vogue Dress Shirt',
        source: img3,
        price: 99,
    },
    {
        id: uuidv4(),
        label: 'TechStyle Performance Tee',
        source: img4,
        price: 100,
    },
    {
        id: uuidv4(),
        label: 'Chic Comfort Casual Shirt',
        source: img5,
        price: 49,
    },
    {
        id: uuidv4(),
        label: 'Trendsetter Denim Shirt',
        source: img6,
        price: 89,
    },
    {
        id: uuidv4(),
        label: 'Gentlemans Choice Suit Shirt',
        source: img7,
        price: 58,
    },
    {
        id: uuidv4(),
        label: 'CozyCotton Lounge Shirt',
        source: img8,
        price: 56,
    },
];

export default imagesData;
