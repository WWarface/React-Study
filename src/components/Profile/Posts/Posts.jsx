import React from 'react';
import Post from './Post/Post';
import InputWithPlaceholder from './InputWithPlaceholder';
import s from './Posts.module.css'

const Posts = () => {
    return (<div className={s.postsContainer}>
        <h3 className={s.text}>My posts</h3>
        <InputWithPlaceholder />
        <button className={s.button}>Send</button>
        <Post message='I want to hook negro' />
        <Post message='I want to hook meepo' />
        <Post message='I want  Mops' />
        
    </div>);
}

export default Posts