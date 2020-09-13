import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {

    const postsElements = props.posts.map( p => <Post message={p.message} likes={p.likesCount} id={p.id}/>)

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
        newPostElement.current.value = '';
    }


    return (
            <div className={s.postsBlock}>
                <h3 className={s.myPosts}>My posts</h3>
                <textarea ref={newPostElement}/>
                <button onClick={ addPost } className={s.postButton}>Add post</button>
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