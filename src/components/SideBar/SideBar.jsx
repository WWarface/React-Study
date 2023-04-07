import React from 'react';
import { NavLink } from 'react-router-dom';
import Friends from '../Friends/Friends';
import s from './SideBar.module.css'



const SideBar = (props) => {
    return (
        <aside>
            <div className={s.link}><NavLink to={'/profile'} className={navData => navData.isActive ? s.active : s.item}>Profile</NavLink></div>
            <div className={s.link}><NavLink to={'/dialogs'} className={navData => navData.isActive ? s.active : s.item}>Messages</NavLink><br></br></div>
            <div className={s.link}><NavLink to={'/news'} className={navData => navData.isActive ? s.active : s.item}>News</NavLink><br></br></div>
            <div className={s.link}><NavLink to={'/music'} className={navData => navData.isActive ? s.active : s.item}>Music</NavLink><br></br></div>
            <div className={s.link}><NavLink to={'/settings'} className={navData => navData.isActive ? s.active : s.item}>Settings</NavLink><br></br></div>

            <Friends state={props.state.friendDialogs}/>
        </aside>
    );
}


export default SideBar;