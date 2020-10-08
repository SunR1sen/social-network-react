import React from 'react';
import s from "./Users.module.scss";
import {Avatar} from "antd";
import {UserOutlined} from "@ant-design/icons";
import 'antd/dist/antd.css';
import cl from 'classnames';
import * as axios from "axios";

class Users extends React.Component {

    componentDidMount() {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                if (response.data.totalCount > 100) {
                    this.props.setTotalUsersCount(100);

                }
            })
    }

    onPageChanged = (p) => {
        this.props.setCurrentPage(p);
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return <div>

            <div className={s.page}>
                {
                    pages.map(p => {
                        return <span onClick={() => this.onPageChanged(p)}
                                     className={cl(s.pageNumber, this.props.currentPage === p && s.activePage)}>{p}</span>
                    })
                }

            </div>
            {this.props.users.map(u => <div key={u.id} className={s.userWrapper}>
                <div className={s.photoContainer}>

                    {u.photos.small
                        ? <img className={s.userPhoto} src={u.photos.small} alt=''/>
                        : <Avatar size={64} icon={<UserOutlined/>}/>}

                    {u.followed
                        ? <button className={s.subBtn} onClick={() => this.props.unfollow(u.id)}>Отписаться</button>
                        : <button className={s.subBtn} onClick={() => this.props.follow(u.id)}>Подписаться</button>
                    }

                </div>
                <div className={s.infoContainer}>
                    <div className={s.leftSide}>
                        <span className={s.userName}>{u.name}</span>
                        <p className={s.status}>{u.status}</p>

                    </div>
                    <div className={s.rightSide}>
                        <div className={s.location}>
                            <p>Gorod</p>
                            <p>Strana</p>
                        </div>

                    </div>
                </div>

            </div>)}
        </div>
    }
}

export default Users;