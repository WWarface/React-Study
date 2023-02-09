import React from 'react';
import s from './Post.module.css'

const Post = (props) => {
    return(<div className={s.sentContainer}>
        <div className={s.circle}></div>
        <p>{props.message}</p>
    </div>);
}

export default Post;