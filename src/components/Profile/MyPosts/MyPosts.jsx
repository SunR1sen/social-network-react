import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {

    let postData = [
        { message: 'Hi, petushnya!', likesCount: 10},
        { message: 'How are you, petushok?', likesCount: 15},
    ];


    return (
            <div className={s.postsBlock}>
                <h3 className={s.myPosts}>My posts</h3>
                <textarea></textarea>
                <button className={s.postButton}>Add post</button>
                <div>
                    New post
                </div>
                <div>
                    <Post message={postData[0].message} likes={postData[0].likesCount}/>
                    <Post message={postData[1].message} likes={postData[1].likesCount}/>
                </div>
            </div>
    )
}

export default MyPosts;