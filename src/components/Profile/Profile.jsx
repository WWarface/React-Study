import React from 'react';
import PostsContainer from './Posts/PostsContainer';
import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Profile = (props) => {
    debugger

    return (
        <div className={s.content}>
            <img className={s.contentImage} src='https://i.ytimg.com/vi/V33G0n7dQVA/maxresdefault.jpg' />
            <ProfileInfo />
            <PostsContainer store={props.store}/>
        </div>
    );
}

export default Profile;