import React from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import './styles/styles.css'; // Import your CSS file

const App = () => {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    );
};

export default App;