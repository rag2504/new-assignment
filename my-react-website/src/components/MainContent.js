import React from 'react';

const MainContent = () => {
    return (
        <main>
            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-bg-shape shape-1"></div>
                <div className="hero-bg-shape shape-2"></div>
                <div className="hero-container">
                    <div className="hero-content">
                        <span className="pre-heading">Professional Academic Help</span>
                        <h1 className="hero-title">Welcome to Assign Ur Assignment</h1>
                        <p className="hero-subtitle">Your one-stop solution for all your assignment needs. Get professional help from experienced writers and secure the grades you deserve.</p>
                        <div className="hero-buttons">
                            <a href="#" className="btn btn-quick-order">Quick Order <i className="fas fa-bolt"></i></a>
                            <a href="#how-it-works" className="btn btn-learn-more">Learn More <i className="fas fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="our-business">
                <div className="section-header">
                    <span className="section-subtitle">What We Offer</span>
                    <h2 className="section-title">Our Business</h2>
                    <p className="section-description">Your one-stop solution for all your academic needs.</p>
                </div>
                <div className="services-container">
                    <div className="service-card">
                        <h3>Assignment Completion</h3>
                        <p>Get expert assistance with all types of assignments.</p>
                    </div>
                    <div className="service-card">
                        <h3>Book Completion</h3>
                        <p>Professional assistance with book writing and editing.</p>
                    </div>
                    <div className="service-card">
                        <h3>PPT/Word Making</h3>
                        <p>Visually appealing PowerPoint presentations and Word docs.</p>
                    </div>
                </div>
            </section>

            {/* Milestones Section */}
            <section className="milestones-inner-container">
                <h2>Our Journey So Far</h2>
                <div className="achievement-stats-grid">
                    <div className="achievement-stat-card">
                        <h3>125,000+ Pages Written</h3>
                    </div>
                    <div className="achievement-stat-card">
                        <h3>7,500+ Projects Completed</h3>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default MainContent;