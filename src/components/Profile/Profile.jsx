import React from "react";
import panorama from "../../assets/img/panorama.jpg";
import './Profile.css';

const Profile = () => {
    return (
        <main className='content'>
            <img className='panorama' src={panorama} />
            <div>
                ava + description
            </div>
            <div>
                My posts
                <div>
                    New post
                </div>
                <div>
                    <div>Post 1</div>
                    <div>Post 2</div>
                </div>
            </div>
            Main content
        </main>
    )
}

export default Profile;