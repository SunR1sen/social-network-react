import React from "react";
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {
    return (
        <main className={s.content}>
            <ProfileInfo />
            <MyPosts />
            Main content
        </main>
    )
}

export default Profile;