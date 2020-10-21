import React from 'react';
import s from "./Users.module.scss";
import cl from "classnames";
import {Avatar} from "antd";
import {UserOutlined} from "@ant-design/icons";
import 'antd/dist/antd.css';
import {NavLink} from "react-router-dom";
import {Button, Comment} from 'antd';
import * as axios from "axios";
import {usersAPI} from "../../api/api";

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
                    pages.map(pageNumber => {
                        return <Button type="primary"
                                       shape="circle"
                                       onClick={() => props.onPageChanged(pageNumber)}
                                       className={cl(s.pageNumber, props.currentPage === pageNumber && s.activePage)}
                                       key={pageNumber}>
                            {pageNumber}
                        </Button>
                    })
                }

            </div>
            {props.users.map(user => <div key={user.id} className={s.userWrapper}>
                <Comment
                    author={<div className={s.userName}>{user.name}</div>}
                    avatar={
                        <NavLink to={'/profile/' + user.id}>
                            {user.photos.small
                                ? <Avatar src={user.photos.small} alt="User photo"/>
                                : <Avatar size={64} icon={<UserOutlined/>}/>}
                        </NavLink>

                    }
                    content={
                        <p>No description</p>
                    }
                />
                <div className={s.infoContainer}>
                    {user.followed
                        ? <button className={s.subBtn} onClick={() => {
                            usersAPI.unfollow(user.id).then( data => {
                                if (data.resultCode == 0) {
                                    props.unfollow(user.id)
                                }
                            })
                        }}>Отписаться</button>
                        : <button className={s.subBtn} onClick={() => {
                        usersAPI.follow(user.id)
                            .then( data => {
                            if (data.resultCode == 0) {
                                props.follow(user.id)
                            }
                        })
                    }}>Подписаться</button>
                    }
                </div>

            </div>)}
        </div>
    )
}

export default Users;