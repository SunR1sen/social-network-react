let store = {
    _state: {
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
    },
    _callSubscriber() {
        console.log('State changed')
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    // updateNewMessageText(newText) {
    //     this._state.dialogsPage.newMessageText = newText;
    //     this._callSubscriber(this._state);
    // },
    // addMessage() {
    //     let item = {message: this._state.dialogsPage.newMessageText, id: 4}
    //     this._state.dialogsPage.messages.push(item);
    //     this._state.dialogsPage.newMessageText = '';
    //     this._callSubscriber(this._state);
    // },
    // updateNewPostText(newText) {
    //     this._state.profilePage.newPostText = newText;
    //     this._callSubscriber(this._state);
    // },
    // addPost() {
    //     let item = { message: this._state.profilePage.newPostText, likesCount: 0, id: 3};
    //     this._state.profilePage.posts.push(item);
    //     this._state.profilePage.newPostText = '';
    //     this._callSubscriber(this._state);
    // },

    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let item = {
                message: this._state.profilePage.newPostText,
                likesCount: 0,
                id: 3
            };
            this._state.profilePage.posts.push(item);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === 'SEND-MESSAGE') {
            let item = {
                message: this._state.dialogsPage.newMessageText,
                id: 4
            }
            this._state.dialogsPage.messages.push(item);
            this._state.dialogsPage.newMessageText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
            this._state.dialogsPage.newMessageText = action.newText;
            this._callSubscriber(this._state);
        }
    }
}


window.store = store;

export default store;