import React from 'react';
import Posts from './Posts/Posts';
import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';


const Profile = (props) => {
    

    return (
        <div className={s.content}>
            <img className={s.contentImage} src='https://i.ytimg.com/vi/V33G0n7dQVA/maxresdefault.jpg' />
            <ProfileInfo />
            <Posts posts={props.posts} />
        </div>
    );
}

export default Profile;