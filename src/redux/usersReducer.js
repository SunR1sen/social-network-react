const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';

const initialState = {
     users: [
    //     {id: 1, photoUrl: 'https://icons.iconarchive.com/icons/diversity-avatars/avatars/256/batman-icon.png', followed: true, fullName: 'Dmitry', status: "Im a first user", location: {city: 'Moscow', country: 'Russia'}},
    //     {id: 2, photoUrl: 'https://icons.iconarchive.com/icons/diversity-avatars/avatars/256/batman-icon.png', followed: false, fullName: 'Marina', status: "Im a second user", location: {city: 'Moscow', country: 'Russia'}},
    //     {id: 3, photoUrl: 'https://icons.iconarchive.com/icons/diversity-avatars/avatars/256/batman-icon.png', followed: true, fullName: 'Morti', status: "I have a tail", location: {city: 'Moscow', country: 'Russia'}}
    ]
};

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map( u => {
                    if ( u.id === action.userId ) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map( u => {
                    if ( u.id === action.userId ) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            };

        case SET_USERS:
            return {...state, users: [...state.users, ...action.users] }

        default:
            return state;
    }
}

export const followActionCreator = (userId) => ({type: FOLLOW, userId});
export const unfollowActionCreator = (userId) => ({type: UNFOLLOW, userId});
export const setUsersActionCreator = (users) => ({type: SET_USERS, users})

export default usersReducer;