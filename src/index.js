import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { HashRouter } from 'react-router-dom';
import RouteSwitch from "./RouteSwitch"
import Navbar from "./components/Navbar/navbar.js"

ReactDOM.render(
    <div>
        <HashRouter> 
            <Navbar />
            <RouteSwitch />
        </HashRouter> 
    </div>,
    document.getElementById('root'));




