import React from "react";
import s from './Post.module.css';
import person from './person.png';

const Post = (props) => {
    return (
        <div>
            <div className={s.posts__item}>
                <img src={person} className={s.img} alt={''}/>
                <span className={s.message}>{props.message}</span>
                <div  className={s.likes}>
                    <span>Like {props.likes}</span>
                </div>
            </div>
        </div>
    )
}

export default Post;