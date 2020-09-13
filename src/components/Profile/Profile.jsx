import React from "react";
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const  Profile = (props) => {
    return (
        <main className={s.content}>
            <ProfileInfo />
            <MyPosts posts={props.state.posts}
                     newPostText={props.state.newPostText}
                     addPost={props.addPost}
                     updateNewPostText={props.updateNewPostText}
            />
            Main content
        </main>
    )
}

export default Profile;