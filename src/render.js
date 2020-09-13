import ReactDOM from "react-dom";
import React from "react";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {addMessage, addPost, updateNewMessageText, updateNewPostText} from "./redux/state";


export function rerenderEntireTree(state) {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state}
                     addPost={addPost}
                     updateNewPostText={updateNewPostText}
                     updateNewMessageText={updateNewMessageText}
                     addMessage={addMessage}
                />
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

