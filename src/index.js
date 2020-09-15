import './index.css';
import store from "./redux/state";
import ReactDOM from "react-dom";
import React from "react";
import {BrowserRouter} from "react-router-dom";
import App from "./App";


function rerenderEntireTree(state) {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state}
                     addPost={store.addPost.bind(store)}
                     updateNewPostText={store.updateNewPostText.bind(store)}
                     updateNewMessageText={store.updateNewMessageText.bind(store)}
                     addMessage={store.addMessage.bind(store)}
                />
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree)