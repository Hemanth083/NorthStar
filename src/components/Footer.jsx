import pay2 from "../assets/paymentMethods/ApplePay.svg"
import pay3 from "../assets/paymentMethods/Visa.svg"
import pay1 from "../assets/paymentMethods/Mastercard.svg"
import "../App.css"
const Footer = () => {
    return (
        <div className='footer'>
            <table>
                <tr>
                    <th>COMPANY INFO</th>
                    <th>HELP LINK</th>
                    <th>USEFUL LINKS</th>
                    <th>TEXT TO KNOW</th>
                </tr>
                <tr>
                    <td>About Us</td>
                    <td>Tracking</td>
                    <td>Special Offers</td>
                    <td><input className='sendEmail' type='email' placeholder='Enter Email' /></td>
                </tr>
                <tr>
                    <td>Latest Posts</td>
                    <td>Order Status</td>
                    <td>Gift Card</td>
                    <td><input className='subimitEmail' type='submit' /></td>
                </tr>
                <tr>
                    <td>Contact Us</td>
                    <td>Delivery</td>
                    <td>Advetising</td>
                </tr>
                <tr>
                    <td>Shop</td>
                    <td>Shoping Info</td>
                    <td>Terms of Use</td>
                </tr>
                <tr>
                    <td></td>
                    <td>FAQ</td>
                </tr>
            </table>
            <div className='sponser'>
                <div className='termsAndCondition'>
                    <p>© 2020 NorthStar eCommerce</p>
                    <p>Privacy Policy
                        Terms & Conditions</p>
                </div>
                <div className='cardsAllowed'>
                    <img alt='' width={80} src={pay1} />
                    <img alt='' width={80} src={pay2} />
                    <img alt='' width={80} src={pay3} />
                </div>
            </div>
        </div>
    )
}
export default Footer;