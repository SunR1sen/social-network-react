import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={s.dialog}>
            <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
        </div>
    )
}

let dialogsData = [
    { name: 'Diman', id: 1},
    { name: 'Marina', id: 2},
    { name: 'Morti', id: 3},
    { name: 'Natasha', id: 4},
    { name: 'Griffindor', id: 5},
];

let messageData = [
    { message: 'Hi!', id: 1},
    { message: 'Pidarok!', id: 2},
    { message: 'Yo', id: 3},
]

const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>
                <DialogItem name={dialogsData[4].name} id={dialogsData[4].id}/>
            </div>
            <div className={s.messages}>
                <Message message={messageData[0].message} id={messageData[0].id} />
                <Message message={messageData[1].message} id={messageData[1].id} />
                <Message message={messageData[2].message} id={messageData[2].id} />
            </div>
        </div>
    )
}

export default Dialogs;