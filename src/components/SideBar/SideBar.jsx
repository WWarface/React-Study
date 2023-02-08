import React from 'react';
import s from './SideBar.module.css'


const SideBar = () => {
    return (
        <aside>
            <div className={s.link}><a>Profile</a></div>
            <div className={s.link}><a>Messages</a><br></br></div>
            <div className={s.link}><a>News</a><br></br></div>
            <div className={s.link}><a>Music</a><br></br></div>
            <div className={s.link}><a>Settings</a><br></br></div>
        </aside>
    );
}

export default SideBar;