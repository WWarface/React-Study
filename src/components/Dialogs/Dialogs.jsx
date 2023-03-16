import React from 'react';
import Dialog from './Dialog/Dialog';
import s from './Dialogs.module.css'
import Message from './Message/Message.jsx';

const Dialogs = (props) => {    
    
    let dialogsElements = props.state.dialogs.map(d => <Dialog isActive={d.isActive} name={d.name} url={d.url} key={d.id}/>)

    let messageElements = props.state.messages.map(m => <Message message={m.message} key={m.id}/> )
 
    return (
        <div className={s.wrapper}>
            <div className={s.dialogs}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messageElements}
            </div>
        </div>
    );
}

export default Dialogs;