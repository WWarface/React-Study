import React from 'react';
import { addPostActionCreator, updatePostTextActionCreator } from '../../../redux/profileReducer';
import Posts from './Posts';



const PostsContainer = (props) => {
debugger
    let onAddPost = () => {
        props.store.dispatch(addPostActionCreator());
    }

    let onUpdateText = (text) => {      
        props.store.dispatch(updatePostTextActionCreator(text));
    }


    return (<Posts profilePage={props.store.getState().profilePage} 
            updateText={onUpdateText}
            addPost={onAddPost}/>);
}

export default PostsContainer