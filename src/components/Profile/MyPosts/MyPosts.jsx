import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {

    let posts = [
        { message: 'Hi, petushnya!', likesCount: 10},
        { message: 'How are you, petushok?', likesCount: 15},
    ];

    const postsElements = posts.map( p => <Post message={p.message} likes={p.likesCount}/>)


    return (
            <div className={s.postsBlock}>
                <h3 className={s.myPosts}>My posts</h3>
                <textarea></textarea>
                <button className={s.postButton}>Add post</button>
                <div>
                    New post
                </div>
                <div>
                    { postsElements }
                </div>
            </div>
    )
}

export default MyPosts;