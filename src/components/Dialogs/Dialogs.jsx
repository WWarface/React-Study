import React from 'react';
import Dialog from './Dialog/Dialog';
import s from './Dialogs.module.css'
import Message from './Message/Message.jsx';
import { updateMessageTextActionCreator,addMessageActionCreator } from '../../redux/dialogPageReducer';

const Dialogs = (props) => {
    debugger

    let dialogsElements = props.dialogPage.dialogs.map(d => <Dialog isActive={d.isActive} name={d.name} url={d.url} key={d.id} />)

    let messageElements = props.dialogPage.messages.map(m => <Message message={m.message} key={m.id} />)

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addMessageActionCreator());
    }

    let updateText = () => {
        debugger
        let text = newPostElement.current.value;
        props.dispatch(updateMessageTextActionCreator(text));
    }

    return (
        <div className={s.wrapper}>
            <div className={s.dialogs}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messageElements}
                <div className={s.submissionContainer}>
                    <textarea ref={newPostElement} className={s.textArea}
                        onChange={updateText}
                        value={props.dialogPage.newMessageText} />
                    <button onClick={addPost} className={s.textAreaButton}>Send Message</button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;