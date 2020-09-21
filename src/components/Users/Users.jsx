import React from 'react';
import s from './Users.module.scss'
import * as axios from 'axios';

const Users = (props) => {

    // if (props.users.length === 0) {
    //     props.setUsers([
    //         {
    //             id: 1,
    //             photoUrl: '',
    //             followed: true,
    //             fullName: 'Dmitry',
    //             status: "Im a first user",
    {/*            location: {city: 'Moscow', country: 'Russia'}*/}
    {/*        },*/}
    //         {
    //             id: 2,
    //             photoUrl: '',
    //             followed: false,
    //             fullName: 'Marina',
    //             status: "Im a second user",
    //             location: {city: 'Moscow', country: 'Russia'}
    //         },
    {/*        {*/}
    {/*            id: 3,*/}
    //             photoUrl: '',
    //             followed: true,
    //             fullName: 'Morti',
    //             status: "I have a tail",
    //             location: {city: 'Moscow', country: 'Russia'}
    //         }
    //     ])
    // }

    axios.get('https://social-network.samuraijs.com/api/1.0/users')
        .then(response => {
            debugger;
            props.setUsers(response.data.items)
        })

    return <div>
        {props.users.map(u => <div key={u.id} className={s.userWrapper}>
            <div className={s.photoContainer}>
                <img className={s.userPhoto} src={u.photoUrl} alt='Photo'/>
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