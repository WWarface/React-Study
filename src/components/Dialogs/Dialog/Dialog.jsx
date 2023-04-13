import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialog.module.css'

const Dialog = (props) => {
    const dialogStyle = {
        backgroundColor: props.isActive ? '#262626' : '#000000',
    };

    return (
        <NavLink to={"/dialogs/"+props.name}>
            <div className={s.dialog} style={dialogStyle}>
                <div className={s.avatarContainer}>
                    <img className={s.avatar} src={props.url} />
                </div>
                <div className={s.name}>
                    <span>{props.name}</span>
                </div>
            </div>
        </NavLink>
    );
}

export default Dialog