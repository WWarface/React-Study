import React from 'react';
import { updateMessageTextActionCreator, addMessageActionCreator } from '../../redux/dialogPageReducer';
import Dialogs from './Dialogs';
import StoreContext from '../../StoreContext';

const DialogsContainer = (props) => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {

                    const state = store.getState();

                    let addPost = () => {
                        store.dispatch(addMessageActionCreator());
                    }

                    let updateText = (text) => {
                        store.dispatch(updateMessageTextActionCreator(text));
                    }

                    return <Dialogs dialogPage={state.dialogPage} updateText={updateText} addPost={addPost} />
                }
            }
        </StoreContext.Consumer>
    );
}

export default DialogsContainer;