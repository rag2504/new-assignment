import React from 'react';

const Header = () => {
    return (
        <header>
           <nav class="navbar">
        <a href="index.html" class="logo-container">
            <img src="logo1.jpg" alt="Assign Ur Assignment Logo">
            <div class="brand">Assign Ur Assignment</div>
        </a>
        
        
        <div class="nav-links" id="navLinks">   
            <a href="#services"><i class="fas fa-file-alt"></i> Services</a>
            <a href="#how-it-works"><i class="fas fa-question-circle"></i> How it Works</a>
            <a href="price2.html"><i class="fas fa-tags"></i> Prices</a>
            <a href="#our-writers"><i class="fas fa-users"></i> Our Writers</a>
            <a href="#faq"><i class="fas fa-info-circle"></i> FAQ</a>
            <a href="#testimonials"><i class="fas fa-star"></i> Testimonials</a>
            
           
            <div class="mobile-action-buttons">
                <a href="login.html" class="signin-btn">Sign In</a>
                <a href="#order-now" class="order-now">Order Now</a>
            </div>
        </div>
        
        
        <div class="action-buttons desktop-action-buttons">
            <a href="login.html" class="signin-btn">Sign In</a>
            <a href="#order-now" class="order-now">Order Now</a>
        </div>
        
     
        <div class="hamburger" id="hamburger-menu">
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