import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <nav>
            <div className="header">
                <div className="logo">
                    <a href="/home">Logo</a>
                </div>
                <div className="menu">
                    <a href="/home">Shop</a>
                    <a href="/cart">Cart</a>
                    <a href="/cart">Others</a>
                </div>
            </div>
        </nav>
    );
};

export default Header;