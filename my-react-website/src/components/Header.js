import React from 'react';
import './Header.css'; // Import your specific CSS file for the Header component
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt, faQuestionCircle, faTags, faUsers, faInfoCircle, faStar } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <header>
            <nav className="navbar">
                <a href="index.html" className="logo-container">
                <img src="/logo.jpg" alt="Assign Ur Assignment Logo" />
                    <div className="brand">Assign Ur Assignment</div>
                </a>

                <div className="nav-links" id="navLinks">   
                    <a href="#services">
                        <FontAwesomeIcon icon={faFileAlt} /> Services
                    </a>
                    <a href="#how-it-works">
                        <FontAwesomeIcon icon={faQuestionCircle} /> How it Works
                    </a>
                    <a href="price2.html">
                        <FontAwesomeIcon icon={faTags} /> Prices
                    </a>
                    <a href="#our-writers">
                        <FontAwesomeIcon icon={faUsers} /> Our Writers
                    </a>
                    <a href="#faq">
                        <FontAwesomeIcon icon={faInfoCircle} /> FAQ
                    </a>
                    <a href="#testimonials">
                        <FontAwesomeIcon icon={faStar} /> Testimonials
                    </a>

                    <div className="mobile-action-buttons">
                        <a href="login.html" className="signin-btn">Sign In</a>
                        <a href="#order-now" className="order-now">Order Now</a>
                    </div>
                </div>

                <div className="action-buttons desktop-action-buttons">
                    <a href="login.html" className="signin-btn">Sign In</a>
                    <a href="#order-now" className="order-now">Order Now</a>
                </div>

                <div className="hamburger" id="hamburger-menu">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div className="mobile-nav-overlay" id="mobile-overlay"></div>
        </header>
    );
};

export default Header;