import { Link } from "react-router-dom"
import menu from "../assets/menu.svg";
import user from "../assets/user.svg";
import shopping from "../assets/shopping.svg"
import React from 'react';
import '../App.css'
import { useSelector } from 'react-redux';


const NavagationBar = () => {
    const cart = useSelector((state) => state.cart)

    return (
        <div className="navagationBar" >
            <div>
                <p className="heading">NorthStar</p>
            </div>
            <div className='toNextPage'>
                <Link className='links' to="/">Home</Link>
                <Link className='links' to="/about">About</Link>
                <Link className='links' to="/contact">Contact </Link>
            </div>
            <div className='link'>
                <Link><img src={user} /></Link>
                <Link className='cart' to="/cart"  ><img alt='' src={shopping} /><span className='count-of-items'>{cart.length}</span></Link>
                <Link><img alt='' src={menu} /></Link>
            </div>
        </div>
    )
}

export default NavagationBar