import React from 'react';
import s from './Header.module.css';
import logo from "../../assets/images/logo.png";
import { Layout } from 'antd';

const { Header } = Layout;

const SiteHeader = () => {
    return (
        <header className={s.header}>
            <Layout>
                <Header className={s.header}>
                    <img src={logo} className={s.logo}  alt={''}/>
                </Header>
            </Layout>
        </header>
    )
}

export default SiteHeader;