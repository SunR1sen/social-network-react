import React from 'react';
import s from './Header.module.css';
import logo from "./logo.png";

const Header = () => {
    return (
        <header className={s.header}>
            <img alt={""} src={logo} className={s.logo}/>
        </header>
    )
}

export default Header;