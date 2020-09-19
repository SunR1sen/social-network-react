import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";

const MyPostsContainer = () => {

    return (
        <StoreContext.Consumer>
            {(store) => {

                const onAddPost = () => {
                    store.dispatch(addPostActionCreator());
                }

                const onPostChange = (text) => {
                    store.dispatch(updateNewPostTextActionCreator(text));
                }
                return (<MyPosts updateNewPostText={onPostChange}
                                 addPost={onAddPost}
                                 posts={store.getState().profilePage.posts}
                                 newPostText={store.getState().profilePage.newPostText}/>)
            }
            }
        </StoreContext.Consumer>

    )
}

export default MyPostsContainer;