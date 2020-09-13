import {rerenderEntireTree} from "../render";

let state = {
    profile: {
        posts: [
            { message: 'Hi, petushnya!', likesCount: 10, id: 1},
            { message: 'How are you, petushok?', likesCount: 15, id: 2},
        ],
    },
    dialogsPage: {
        messages: [
            { message: 'Hi!', id: 1},
            { message: 'Pidarok!', id: 2},
            { message: 'Yo', id: 3},
        ],
        dialogs: [
            { name: 'Diman', id: 1},
            { name: 'Marina', id: 2},
            { name: 'Morti', id: 3},
            { name: 'Natasha', id: 4},
            { name: 'Griffindor', id: 5},
        ],
    },
    sidebar: {},
}

export function addPost(postMessage) {
    let item = { message: postMessage, likesCount: 2, id: 3};
    state.profile.posts.push(item);
    rerenderEntireTree(state);
}

export default state;