import React from "react";
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const  Profile = (props) => {
    return (
        <main className={s.content}>
            <ProfileInfo />
            <MyPostsContainer/>
            Main content
        </main>
    )
}

export default Profile;