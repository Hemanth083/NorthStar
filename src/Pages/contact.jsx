import React from 'react'
import './about.css'
import { Footer } from "../main.jsx"
import NavagationBar from '../components/NavigationBar.jsx'
import "./contact.css"
import contactImage from "../assets/contact/Contact.png"


const Contact = () => {
    const bodyWidth = window.innerWidth;
    const body = { width: { bodyWidth } };
    return (
        <div className='ContactPage' style={body}>
            <NavagationBar></NavagationBar>
            <img src={contactImage}></img>
        </div >
    )


}
export default Contact;