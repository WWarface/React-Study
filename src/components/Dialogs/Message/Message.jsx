import React from 'react';
import s from './Message.module.css'


function Message(props) {
    
    return(
        <div className={s.message}><span className={s.messageText}>{props.message}</span></div>
    );
}

export default Message