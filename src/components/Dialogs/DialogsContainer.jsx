import React from 'react';
import { updateMessageTextActionCreator,addMessageActionCreator } from '../../redux/dialogPageReducer';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {

    const state = props.store.getState();

    let addPost = () => {
        props.store.dispatch(addMessageActionCreator());
    }

    let updateText = (text) => {
        props.store.dispatch(updateMessageTextActionCreator(text));
    }

    return (
       <Dialogs dialogPage={state.dialogPage} updateText={updateText} addPost={addPost}/>
    );
}

export default DialogsContainer;