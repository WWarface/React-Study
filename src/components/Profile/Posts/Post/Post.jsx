import React from 'react';
import s from './Post.module.css'

const Post = () => {
    return(<div className={s.sentContainer}>
        <div className={s.circle}></div>
        <p>Why nobody hook me</p>
    </div>);
}

export default Post;