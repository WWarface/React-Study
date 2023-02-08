import React from 'react';
import Posts from './Posts/Posts';
import s from './Profile.module.css'


const Profile = () => {
    return (
        <div className={s.content}>
            <img className={s.contentImage} src='https://i.ytimg.com/vi/V33G0n7dQVA/maxresdefault.jpg' />
            <div className={s.profileContainer}>
                <div>
                    <img className={s.picture} src='https://dota2.ru/img/heroes/pudge/portrait.jpg'></img>
                </div>
                <div>
                    <h3 className={s.name}>Pudge</h3>
                    <p>Date of birth: 2 january</p>
                    <p>City: Zhmerynka</p>
                    <p>Family Status: not married</p>
                    <p>Family Status: not married</p>
                </div>
            </div>
            <Posts />
        </div>
    );
}

export default Profile;