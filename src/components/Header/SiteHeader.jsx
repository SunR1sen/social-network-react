import React from 'react';
import s from './Header.module.scss';
import logo from "../../assets/images/logo.png";
import {Layout, Avatar} from 'antd';
import {NavLink} from "react-router-dom";

const {Header} = Layout;

const SiteHeader = (props) => {
    return (
        <header className={s.header}>
            <Layout>
                <Header className={s.header}>
                    <img src={logo} className={s.logo} alt={''}/>
                    <div className={s.loginBlock}>
                        {
                            props.isAuth
                                ? <div><Avatar className={s.loginLogo}>U</Avatar> {props.login}</div>
                                : <NavLink to='/login' className={s.login}>Login</NavLink>
                        }
                    </div>
                </Header>
            </Layout>
        </header>
    )
}

export default SiteHeader;