import React from 'react';

const Footer = () => {
    return (
        <footer className="about-footer">
            <div className="containerf">
                <div className="footer-content">
                    <div className="footer-about">
                        <h3>About Assign Ur Assignment</h3>
                        <p>Your one-stop solution for all your assignment needs.</p>
                        <div className="footer-social">
                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                            <a href="#"><i className="fab fa-instagram"></i></a>
                            <a href="#"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <div className="footer-links">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><a href="#">How it Works</a></li>
                            <li><a href="#">Prices</a></li>
                        </ul>
                    </div>
                    <div className="footer-contact">
                        <h3>Contact Us</h3>
                        <p>+1 (555) 123-4567</p>
                        <p>info@assignurassignment.com</p>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2025 Assign Ur Assignment. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;