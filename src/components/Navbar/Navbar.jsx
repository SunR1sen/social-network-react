import React from 'react';
import s from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <ul className={s.nav__menu}>
                <li><a  className={s.nav__link} href="#">Profile</a></li>
                <li><a  className={s.nav__link} href="#">Messages</a></li>
                <li><a  className={s.nav__link} href="#">News</a></li>
                <li><a  className={s.nav__link} href="#">Music</a></li>
                <li><a  className={s.nav__link} href="#">Settings</a></li>
            </ul>
        </nav>
    )
}

export default Navbar;