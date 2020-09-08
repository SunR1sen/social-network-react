import React from "react";
import s from './Post.module.css';
import person from './person.png';

const Post = (props) => {
    return (
        <div>
            <div className={s.posts__item}>
                <img src={person} className={s.img} alt={''}/>
                {props.message}
                <div>
                    <span>Like {props.likes}</span>
                </div>
            </div>
        </div>
    )
}

export default Post;