import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

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

let posts = [
    { message: 'Hi, petushnya!', likesCount: 10},
    { message: 'How are you, petushok?', likesCount: 15},
];

ReactDOM.render(
  <React.StrictMode>
    <App dialogs={dialogs} messages={messages} posts={posts}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
