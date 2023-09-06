import React from 'react';
import s from './Message.module.css'
import { useSelector } from 'react-redux';


function Message(props) {

    const theme = useSelector(state => state.environment.theme)

    return (
        <div className={theme === 'light' ? s.messageLight : s.message}><span className={s.messageText}>{props.message}</span></div>
    );
}

export default Message