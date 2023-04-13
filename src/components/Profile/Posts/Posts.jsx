import React from 'react';
import Post from './Post/Post';
import InputWithPlaceholder from './InputWithPlaceholder';
import s from './Posts.module.css'
import { addPostActionCreator, updatePostTextActionCreator } from '../../../redux/state';



const Posts = (props) => {

    let postsElements = props.profilePage.posts.map(p => <Post key={p.id} message={p.message} />)

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let updateText = (e) => {
        let text = e.target.value;
        
        props.dispatch(updatePostTextActionCreator(text));
    }

    

    return (<div className={s.postsContainer}>
        <h3 className={s.text}>My posts</h3>
        <div className={s.submissionContainer}>
            <textarea  className={s.textArea}
                onChange={updateText}
                value={props.profilePage.newPostMessage} />
            <button onClick={addPost} className={s.textAreaButton}>Send Message</button>
        </div>
        {postsElements}
    </div>);
}

export default Posts