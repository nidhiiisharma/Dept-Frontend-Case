import React, { useState } from 'react';
import Navbar from "../Navbar/Navbar";
import Menu from "../Menu/Menu"
import './Header.css';

const Header = () => {
        return (
            <header className="header">
                <div className="header-menu"></div>
                <div className="header-title">
                    <h1>Work</h1>
                </div>
                <div className="header-btn">
                    <a href="#">
                        <button>View Case</button>
                    </a>
                </div>
            </header>
        )
    }
export default Header;
