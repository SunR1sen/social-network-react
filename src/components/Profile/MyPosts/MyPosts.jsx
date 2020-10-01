import React from "react";
import s from './MyPosts.module.scss';
import Post from "./Post/Post";


const MyPosts = (props) => {
    const postsElements = props.posts.map(p => <Post message={p.message} likes={p.likesCount} id={p.id} key={p.id}/>)

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }

    const onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }


    return (
        <div className={s.postsBlock}>
            <h3 className={s.postsTitle}>My posts</h3>
            <div className={s.inputWrapper}>

                <textarea
                    className={s.textarea}
                    value={props.newPostText}
                    ref={newPostElement}
                    onChange={onPostChange}
                />
                <button onClick={onAddPost} className={s.postButton}>Add post</button>
            </div>

            <div>
                New posts
            </div>
            <div>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;