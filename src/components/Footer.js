import React from "react";
import logo from '../images/footer-logo.png'

function Footer () {
    return (
        <footer>
            <img src={logo} />
            <div>
                <h2>Find Us</h2>
                <p>Our Address</p>
                <p>Postcode</p>
            </div>
            <div>
                <h2>Connect</h2>
                <p>Facebook</p>
                <p>Instagram</p>
                <p>Twitter</p>
            </div>
        </footer>
    )
}

export default Footer;