import React from "react";
import logo from'../images/Logo.png'


function Header () {
    return (
        <header>
            <img src={logo}/>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Menu</li>
                    <li>Booking</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;