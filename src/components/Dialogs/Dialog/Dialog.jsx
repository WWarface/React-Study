import React from 'react';
import s from './Dialog.module.css'

const Dialog = (props) => {
    const dialogStyle = {
        backgroundColor: props.isActive ? '#efefef' : 'white',
    };

    return (
        <div className={s.dialog} style={dialogStyle}>
            <div className={s.avatarContainer}>
                <img className={s.avatar} src={props.url} />
            </div>
            <div className={s.name}>
                <span>{props.name}</span>
            </div>
        </div>
    );
}

export default Dialog