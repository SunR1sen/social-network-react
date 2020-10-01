import React from 'react';
import {Avatar} from 'antd';
import {UserOutlined} from '@ant-design/icons';
import 'antd/dist/antd.css';
import s from './Users.module.scss'
import * as axios from 'axios';

const Users = (props) => {

    if (props.users.length === 0) {
        axios
            .get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                props.setUsers(response.data.items)
            })
    }

    return <div>
        {props.users.map(u => <div key={u.id} className={s.userWrapper}>
            <div className={s.photoContainer}>

                {u.photos.small
                    ? <img className={s.userPhoto} src={u.photos.small} alt=''/>
                    : <Avatar size={64} icon={<UserOutlined/>}/>}

                {u.followed
                    ? <button className={s.subBtn} onClick={() => props.unfollow(u.id)}>Отписаться</button>
                    : <button className={s.subBtn} onClick={() => props.follow(u.id)}>Подписаться</button>
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

export default Users;