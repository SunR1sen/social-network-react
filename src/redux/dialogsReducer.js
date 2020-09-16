const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

const initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE:
            let item = {
                message: state.newMessageText,
                id: 4
            }
            state.messages.push(item);
            state.newMessageText = '';
            return state;

        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText;
            return state;

        default:
            return state;
    }
}

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageTextActionCreator = (text) =>
    ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text})

export default dialogsReducer;