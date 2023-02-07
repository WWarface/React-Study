import React from 'react';
import s from './Posts.module.css'

const Posts = () => {
    return (<div className={s.postsContainer}>
        <h3 className={s.text}>My posts</h3>
        <input typeof='text' className={s.input} value={'your news...'} onFocus="value=''"></input>
        <button className={s.button}>Send</button>
        <div className={s.sentContainer}>
            <div className={s.circle}></div>
            <p>Why nobody hook me</p>
        </div>
        <div className={s.sentContainer}>
            <div className={s.circle}></div>
            <p>Why nobody hook me</p>
        </div>
        <div className={s.sentContainer}>
            <div className={s.circle}></div>
            <p>Why nobody hook me</p>
        </div>
    </div>);
}

export default Posts