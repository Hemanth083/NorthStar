import { v4 as uuidv4 } from 'uuid';
import tp1 from "../assets/topSelling/tp1.svg";
import tp2 from "../assets/topSelling/tp2.svg";
import tp3 from "../assets/topSelling/tp3.svg";
import tp4 from "../assets/topSelling/tp4.svg";

const topSellingData = [
    {
        id: uuidv4(),
        label: 'Adventura Classic Shirt',
        source: tp1,
        price: 90,
    },
    {
        id: uuidv4(),
        label: 'Elegance Elite Polo',
        source: tp2,
        price: 89,
    },
    {
        id: uuidv4(),
        label: 'Sleek Style T-Shirt',
        source: tp3,
        price: 75,
    },
    {
        id: uuidv4(),
        label: 'Urban Explorer Jacket',
        source: tp4,
        price: 120,
    },
    // Add more products as needed
];

export default topSellingData;