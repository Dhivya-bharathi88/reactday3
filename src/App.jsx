// src/App.js
import React from 'react';
import { BrowserRouter , Routes, Route, Link} from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import About from './components/About/About';
import Departments from './components/Departments/Departments';
import Events from './components/Events/Events';
import './App.css';

const App = () => {
    return (
        <BrowserRouter>
            <div className="app">
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/departments">Departments</Link></li>
                        <li><Link to="/events">Events</Link></li>
                    </ul>
                </nav>
                <Routes>
                    <Route exact path="/" element={<LandingPage/>}></Route>
                    <Route exact path="/about" element={<About/>}></Route>
                    <Route exact path="/departments" element={<Departments/>}></Route>
                    <Route exact path="/events" element={<Events/>}></Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default App;
