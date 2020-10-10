import React from 'react';
import s from "./Users.module.scss";
import cl from "classnames";
import {Avatar} from "antd";
import {UserOutlined} from "@ant-design/icons";
import 'antd/dist/antd.css';
import {NavLink} from "react-router-dom";
import {Button, Comment} from 'antd';

const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div className={s.userPage}>

            <div className={s.page}>
                {
                    pages.map(p => {
                        return <Button type="primary"
                                       shape="circle"
                                       onClick={() => props.onPageChanged(p)}
                                       className={cl(s.pageNumber, props.currentPage === p && s.activePage)}
                                       key={p}>
                            {p}
                        </Button>
                    })
                }

            </div>
            {props.users.map(u => <div key={u.id} className={s.userWrapper}>
                <Comment
                    author={u.name}
                    avatar={
                        <NavLink to={'/profile/' + u.id}>
                            {u.photos.small
                            ? <Avatar src={u.photos.small} alt="User photo"/>
                            : <Avatar size={64} icon={<UserOutlined/>}/>}
                        </NavLink>

                    }
                    content={
                        <p>No description</p>
                    }
                />
                <div className={s.infoContainer}>
                        {u.followed
                            ? <button className={s.subBtn} onClick={() => props.unfollow(u.id)}>Отписаться</button>
                            : <button className={s.subBtn} onClick={() => props.follow(u.id)}>Подписаться</button>
                        }
                </div>

            </div>)}
        </div>
    )
}

export default Users;