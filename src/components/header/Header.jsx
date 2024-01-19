import React, { useState } from "react";
import './Header.css';
import {FaBars} from 'react-icons/fa'

function Header() {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <header className={`header ${isMenuOpen ? 'menu-open' : ''}`}>
            <h1 className="header-logo">Logo</h1>
            <div className={`menu-icon ${isMenuOpen ? 'open' : ''}`} onClick={handleMenuToggle}>
                <FaBars />

            </div>
            <ul className={`header-ul ${isMenuOpen ? 'open' : ''}`}>
                <li>Home</li>
                <li>About Us</li>
                <li>What We Do</li>
                <li>Events</li>
                <li>Gallery</li>
                <li>Contact</li>
                <li>
                    <button>Donate</button>
                </li>
            </ul>
        </header>
    );
}

export default Header;
