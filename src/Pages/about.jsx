import React from 'react'
import './about.css'
import NavagationBar from '../components/NavigationBar';
import Testimonials_Image1 from "../assets/Testimonials/image1.png"
import Testimonials_Image2 from "../assets/Testimonials/image2.png"
import Testimonials_Image3 from "../assets/Testimonials/image3.png"
import quote from "../assets/Testimonials/quote.svg"
import Footer from '../components/Footer';


const About = () => {
    const bodyWidth = window.innerWidth;
    console.log(bodyWidth)
    const body = { width: { bodyWidth } };
    return (
        <div className="About-page" style={body}>
            <NavagationBar />
            <AboutHeader />
            <SectionClothes />
            <Testimonials />
            <Footer />

        </div>
    )
}

const AboutHeader = () => {
    return (
        <div className='aboutHeader'>
            <h1 className='MainHeading'>ABOUT NORTHSTAR</h1>
        </div>
    )
}
const SectionClothes = () => {
    return (
        <div className='sectionClothes'>
            <div className="womenSection">
                <button className='buy'>BUY NOW</button>
            </div>
            <div className="menSection">
                <button className='buy'>BUY NOW</button>
            </div>
        </div>
    )
}
const Testimonials = () => {
    return (
        <div className='Testimonials'>
            <h1 className='heading'>Testimonials</h1>
            <div className='Testimonial'>
                <div className='Testimonial_imagePart'>
                    <img src={Testimonials_Image1} alt="" />
                </div>
                <div className='Testimonial_textPart'>
                    <img src={quote} />
                    <p className='Testimonial_text'>Once we ordered some accessories items and we got the products delivered in our doorstep, the customer support was super helpful and they answered all my queries.</p>
                    <p><b>Stacy</b></p>
                </div>
            </div>
            <div className='Testimonial'>
                <div className='Testimonial_imagePart'>
                    <img alt='' src={Testimonials_Image2} />
                </div>
                <div className='Testimonial_textPart'>
                    <img alt='' src={quote} />
                    <p className='Testimonial_text'>I ordered 5 shirts from them and received them in no time. The customer support was awesome!</p>
                    <p><b>Emma</b></p>
                </div>
            </div>
            <div className='Testimonial'>
                <div className='Testimonial_imagePart'>
                    <img alt src={Testimonials_Image3} />
                </div>
                <div className='Testimonial_textPart'>
                    <img alt='' src={quote} />
                    <p className='Testimonial_text'>I got a wrong shirt so I contacted them and they happily offered me a refund. I will surely shop from them again.</p>
                    <p><b>Tom</b></p>
                </div>
            </div>
        </div>
    )
}

export default About