let rerenderEntireTree = () => {}

let state = {
    profilePage: {
        posts: [
            { message: 'Hi, petushnya!', likesCount: 10, id: 1},
            { message: 'How are you, petushok?', likesCount: 15, id: 2},
        ],
        newPostText: '',
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
        newMessageText: '',
    },
    sidebar: {},
}

window.state = state;

export let updateNewMessageText = (newText) => {
    state.dialogsPage.newMessageText = newText;
    rerenderEntireTree(state);
}

export let addMessage = () => {
    let item = {message: state.dialogsPage.newMessageText, id: 4}
    state.dialogsPage.messages.push(item);
    state.dialogsPage.newMessageText = '';
    rerenderEntireTree(state);
}

export let addPost = () => {
    let item = { message: state.profilePage.newPostText, likesCount: 0, id: 3};
    state.profilePage.posts.push(item);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}

export default state;