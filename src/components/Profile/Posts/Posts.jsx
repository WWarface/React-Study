import React from 'react';
import Post from './Post/Post';
import InputWithPlaceholder from './InputWithPlaceholder';
import s from './Posts.module.css'

const Posts = (props) => {   
    
    let postsElements = props.posts.map( p => <Post key={p.id} message={p.message} />)
    
    return (<div className={s.postsContainer}>
        <h3 className={s.text}>My posts</h3>
        <InputWithPlaceholder />
        <button className={s.button}>Send</button>
        {postsElements}        
    </div>);
}

export default Posts