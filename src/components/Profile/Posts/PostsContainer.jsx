import React from 'react';
import { addPostActionCreator, updatePostTextActionCreator } from '../../../redux/profileReducer';
import Posts from './Posts';
import StoreContext from '../../../StoreContext';



const PostsContainer = (props) => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    
                    let onAddPost = () => {
                        store.dispatch(addPostActionCreator());
                    }
                
                    let onUpdateText = (text) => {
                        store.dispatch(updatePostTextActionCreator(text));
                    }
                    
                    return (<Posts profilePage={store.getState().profilePage}
                        updateText={onUpdateText}
                        addPost={onAddPost} />);
                }
            }
        </StoreContext.Consumer>)
}

export default PostsContainer