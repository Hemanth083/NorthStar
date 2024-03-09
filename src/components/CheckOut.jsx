import NavagationBar from "./NavigationBar"
import Footer from "./Footer"
import './CheckOut.css'
import YourOrder from "./yourOrder"
const CheckOut = () => {
    return (
        <div className="CheckOut">
            <NavagationBar />
            <p style={{ textAlign: "start", width: '95%', marginBottom: '2%' }}>HOME / <b style={{ fontWeight: 'bold' }}>CHECKOUT</b></p>

            <div className="billingDetailes">
                <h1>Billing details</h1>
                <label>Full Name*</label>
                <input />
                <label>Street Address*</label>
                <input placeholder="House number and street name"></input>
                <label>Town /city</label>
                <input />
                <label>Phone*</label>
                <input type="number" />
                <label>Address</label>
                <textarea />
            </div>
            <YourOrder />
            <Footer />
        </div>

    )
}
export default CheckOut