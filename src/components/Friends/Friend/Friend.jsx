import React from 'react';
import s from './Friend.module.css'


const Friend = (props) => {
    return (
        <div className={s.dialog}>
            <div className={s.wrapper}>
                <div className={s.avatarContainer}>
                    <img className={s.avatar} src={props.url} />
                </div>
                <div className={s.name}>
                    <span className={s.nick}>{props.name}</span>
                </div>
            </div>
        </div>
    );
}

export default Friend;