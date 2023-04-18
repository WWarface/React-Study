import React from 'react';
import Post from './Post/Post';
import s from './Posts.module.css'



const Posts = (props) => {

    let postsElements = props.profilePage.posts.map(p => <Post key={p.id} message={p.message} />)

    let onAddPost = () => {
        props.addPost();
    }

    let onUpdateText = (e) => {
        let text = e.target.value;
        
        props.updateText(text);
    }

    

    return (<div className={s.postsContainer}>
        <h3 className={s.text}>My posts</h3>
        <div className={s.submissionContainer}>
            <textarea  className={s.textArea}
                onChange={onUpdateText}
                value={props.profilePage.newPostMessage} />
            <button onClick={onAddPost} className={s.textAreaButton}>Send Message</button>
        </div>
        {postsElements}
    </div>);
}

export default Posts