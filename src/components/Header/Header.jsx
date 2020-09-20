import React from 'react';
import s from './Header.module.css';
import logo from "./logo.png";

const Header = () => {
    return (
        <header className={s.header}>
            <div className={s.headerWrapper}>
                <img alt={""} src={logo} className={s.logo}/>
            </div>
        </header>
    )
}

export default Header;