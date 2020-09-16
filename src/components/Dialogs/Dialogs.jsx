import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DIalogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogsReducer";


const Dialogs = (props) => {

    const dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    const messagesElements = props.state.messages.map(m => <Message message={m.message} id={m.id}/>)

    // const newMessage = React.createRef();

    const sendMessage = () => {
        props.dispatch(sendMessageActionCreator());
    }

    const onNewTextMessage = (e) => {
        // let text = newMessage.current.value;
        let text = e.target.value;
        props.dispatch(updateNewMessageTextActionCreator(text));
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <textarea
                    // ref={newMessage}
                    onChange={onNewTextMessage}
                    value={props.state.newMessageText}
                    placeholder='Enter your message...'
                />
                <button onClick={sendMessage} className={s.btn}>Отправить</button>
            </div>
        </div>
    )
}

export default Dialogs;