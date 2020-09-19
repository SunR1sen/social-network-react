import React from 'react';
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = () => {

    return <StoreContext.Consumer>
        {(store) => {
            let state = store.getState().dialogsPage;

            const onSendMessage = () => {
                store.dispatch(sendMessageActionCreator());
            }

            const onNewTextMessage = (text) => {
                store.dispatch(updateNewMessageTextActionCreator(text));
            }
            return (<Dialogs state={state}
                             updateNewMessageText={onNewTextMessage}
                             sendMessage={onSendMessage}
            />)
        }
        }
    </StoreContext.Consumer>


}

export default DialogsContainer;