const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

const initialState = {
    posts: [
        {message: 'Hi, people!', likesCount: 10, id: 1},
        {message: 'How are you, koresh?', likesCount: 15, id: 2},
    ],
    newPostText: '',
    profile: null,
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let item = {
                message: state.newPostText,
                likesCount: 0,
                id: 3
            };
            return {
                ...state,
                posts: [...state.posts, item],
                newPostText: '',
            };

        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText,
            };

        case SET_USER_PROFILE:
            return {...state, profile: action.profile}

        default:
            return state;
    }
}

export const setUserProfileAC = (profile) => ({type: SET_USER_PROFILE, profile})
export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})

export default profileReducer;