import React from 'react';
import s from './SideBar.module.css'


const SideBar = () => {
    return (
        <aside>
            <div className={s.link}><a href='/profile'>Profile</a></div>
            <div className={s.link}><a href='/dialogs'>Messages</a><br></br></div>
            <div className={s.link}><a href='/news'>News</a><br></br></div>
            <div className={s.link}><a href='/music'>Music</a><br></br></div>
            <div className={s.link}><a href='/settings'>Settings</a><br></br></div>
        </aside>
    );
}

export default SideBar;