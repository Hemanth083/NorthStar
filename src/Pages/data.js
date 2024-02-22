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
        label: 'Shirt 1',
        source: img1,
        price: 90,
    },
    {
        id: uuidv4(),
        label: 'Shirt 2',
        source: img2,
        price: 89,
    },
    {
        id: uuidv4(),
        label: 'Shirt 3',
        source: img3,
        price: 99,
    },
    {
        id: uuidv4(),
        label: 'Shirt 4',
        source: img4,
        price: 100,
    },
    {
        id: uuidv4(),
        label: 'Shirt 5',
        source: img5,
        price: 49,
    },
    {
        id: uuidv4(),
        label: 'Shirt 6',
        source: img6,
        price: 89,
    },
    {
        id: uuidv4(),
        label: 'Shirt 7',
        source: img7,
        price: 58,
    },
    {
        id: uuidv4(),
        label: 'Shirt 8',
        source: img8,
        price: 56,
    },
];

export default imagesData;
