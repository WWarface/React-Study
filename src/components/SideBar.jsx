import React from 'react';

const SideBar = () => {
    return (
        <aside>
            <div className='aside-link'><a>Profile</a></div>
            <div className='aside-link'><a>Messages</a><br></br></div>
            <div className='aside-link'><a>News</a><br></br></div>
            <div className='aside-link'><a>Music</a><br></br></div>
            <div className='aside-link'><a>Settings</a><br></br></div>
        </aside>
    );
}

export default SideBar;