import React from "react";
import s from './Profile.module.scss';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const  Profile = (props) => {
    return (
        <main className={s.content}>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>
            Main content
        </main>
    )
}

export default Profile;