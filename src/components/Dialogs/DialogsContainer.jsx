import React from 'react';
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {
    let state = props.store.getState().dialogsPage;

    const onSendMessage = () => {
        props.store.dispatch(sendMessageActionCreator());
    }

    const onNewTextMessage = (text) => {
        props.store.dispatch(updateNewMessageTextActionCreator(text));
    }

    return (
        <Dialogs state={state}
                 updateNewMessageText={onNewTextMessage}
                 sendMessage={onSendMessage}
        />
    )
}

export default DialogsContainer;