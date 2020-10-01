import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import { Layout, Menu } from 'antd';
import {
    BarChartOutlined,
    CloudOutlined,
    TeamOutlined,
    UserOutlined,
    UploadOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';

const { Sider } = Layout;

const Navbar = (props) => {

    return (
        <nav>
                <Layout>
                    <Sider
                        style={{
                            overflow: 'auto',
                            marginTop: '60px',
                            height: '100vh',
                            position: 'fixed',
                            left: 0,
                        }}
                    >
                        <div className="logo" />
                        <Menu theme="dark" mode="inline">
                            <Menu.Item key="1" icon={<UserOutlined />}>
                                <NavLink className={s.nav__link} activeClassName={s.active} to="/profile">Profile</NavLink>
                            </Menu.Item>
                            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                                <NavLink className={s.nav__link} activeClassName={s.active} to="/dialogs">Messages</NavLink>
                            </Menu.Item>
                            <Menu.Item key="3" icon={<UploadOutlined />}>
                                <NavLink className={s.nav__link} activeClassName={s.active} to="/news">News</NavLink>
                            </Menu.Item>
                            <Menu.Item key="4" icon={<BarChartOutlined />}>
                                <NavLink className={s.nav__link} activeClassName={s.active} to="/music">Music</NavLink>
                            </Menu.Item>
                            <Menu.Item key="5" icon={<CloudOutlined />}>
                                <NavLink className={s.nav__link} activeClassName={s.active} to="/settings">Settings</NavLink>
                            </Menu.Item>
                            <Menu.Item key="6" icon={<TeamOutlined />}>
                                <NavLink className={s.nav__link} activeClassName={s.active} to="/users">Users</NavLink>
                            </Menu.Item>
                        </Menu>
                    </Sider>
                </Layout>

        </nav>
    )
}

export default Navbar;