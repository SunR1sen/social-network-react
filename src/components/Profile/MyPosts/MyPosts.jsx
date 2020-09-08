import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
            <div>
                <div>My posts</div>
                <textarea></textarea>
                <button>Add post</button>
                <div>
                    New post
                </div>
                <div>
                    <Post message="Hi, petushok" likes="5"/>
                    <Post message="How are you, pidar?" likes="10"/>
                </div>
            </div>
    )
}

export default MyPosts;