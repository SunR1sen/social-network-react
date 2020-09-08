import React from 'react';
import './Header.css';
import logo from "../../assets/img/logo.png";

const Header = () => {
    return (
        <header className='header'>
            <img alt={""} src={logo} className="logo"/>
        </header>
    )
}

export default Header;