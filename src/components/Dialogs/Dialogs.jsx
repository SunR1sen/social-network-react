import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DIalogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = () => {
    const dialogs = [
        { name: 'Diman', id: 1},
        { name: 'Marina', id: 2},
        { name: 'Morti', id: 3},
        { name: 'Natasha', id: 4},
        { name: 'Griffindor', id: 5},
    ];

    const messages = [
        { message: 'Hi!', id: 1},
        { message: 'Pidarok!', id: 2},
        { message: 'Yo', id: 3},
    ];

    const dialogsElements = dialogs.map( d => <DialogItem name={d.name} id={d.id} />)
    const messagesElements = messages.map( m => <Message message={m.message} id={m.id} />)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                { messagesElements }
            </div>
        </div>
    )
}

export default Dialogs;