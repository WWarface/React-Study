import React from 'react';
import Dialog from './Dialog/Dialog';
import s from './Dialogs.module.css'
import Message from './Message/Message.jsx';

const Dialogs = (props) => {

    let dialogsElements = props.dialogPage.dialogs.map(d => <Dialog isActive={d.isActive} name={d.name} url={d.url} key={d.id} />)

    let messageElements = props.dialogPage.messages.map(m => <Message message={m.message} key={m.id} />)

    let newPostElement = React.createRef();

    let addPost = () => {
        // props.addMessage();
        props.dispatch({ type: "ADD_MESSAGE" });
    }

    let updateText = () => {
        // props.updateMessageText(text);
        let text = newPostElement.current.value;
        props.dispatch({ type: "UPDATE_MESSAGE_TEXT", newText: text });
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