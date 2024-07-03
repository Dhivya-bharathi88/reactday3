// src/components/LandingPage/LandingPage.js
import React from 'react';
import './LandingPage.css';

const LandingPage = () => {
    return (
        <div className="landing-page">
            <img src="src\images\clg.jpg" alt="College Building" className="college-image" />
            <h1>Welcome to Our College</h1>
            <p>Your future starts here. Learn more about our programs and events.</p>
        </div>
    );
};

export default LandingPage;
