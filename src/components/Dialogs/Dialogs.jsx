import React from 'react';
import s from './Dialogs.module.scss';
import DialogItem from "./DIalogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    const dialogsElements = props.dialogsPage.dialogs.map((d, index) => <DialogItem name={d.name} id={d.id} key={index}/>)
    const messagesElements = props.dialogsPage.messages.map((m, index) => <Message message={m.message} id={m.id} key={index}/>)

    const onSendMessage = () => {
        props.sendMessage();
    }

    const onNewTextMessage = (e) => {
        let text = e.target.value;
        props.updateNewMessageText(text)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messagesWrapper}>
                {messagesElements}
                <textarea
                    onChange={onNewTextMessage}
                    value={props.dialogsPage.newMessageText}
                    placeholder='Enter your message...'
                    className={s.textarea}
                />
                <button onClick={onSendMessage} className={s.btn}>Отправить</button>
            </div>
        </div>
    )
}

export default Dialogs;