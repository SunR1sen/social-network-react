import React from "react";
import panorama from "../../assets/img/panorama.jpg";
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <main className={s.content}>
            <img className={s.panorama} src={panorama} />
            <div>
                ava + description
            </div>
            <MyPosts />
            Main content
        </main>
    )
}

export default Profile;