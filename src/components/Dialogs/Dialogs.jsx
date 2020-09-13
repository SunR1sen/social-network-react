import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DIalogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    const dialogsElements = props.state.dialogs.map( d => <DialogItem name={d.name} id={d.id} />)
    const messagesElements = props.state.messages.map( m => <Message message={m.message} id={m.id} />)

    const newMessage = React.createRef();

    const sendMessage = () => {
        let text = newMessage.current.value;
        props.addMessage(text);
    }

    const newTextMessage = () => {
        let text = newMessage.current.value;
        props.updateNewMessageText(text);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
                { messagesElements }
                <textarea
                    ref={newMessage}
                    onChange={newTextMessage}
                    value={props.state.newMessageText}
                />
                <button onClick={sendMessage} className={s.btn}>Отправить</button>
            </div>
        </div>
    )
}

export default Dialogs;