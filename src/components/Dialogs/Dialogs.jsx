import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DIalogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    const dialogsElements = props.dialogs.map( d => <DialogItem name={d.name} id={d.id} />)
    const messagesElements = props.messages.map( m => <Message message={m.message} id={m.id} />)

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