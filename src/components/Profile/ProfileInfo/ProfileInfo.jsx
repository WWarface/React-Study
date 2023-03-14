import React from 'react';
import s from './ProfileInfo.module.css'


function ProfileInfo(props) {
    return (
        <div className={s.profileContainer}>
            <div>
                <img className={s.picture} alt="Not found" src='https://dota2.ru/img/heroes/pudge/portrait.jpg'></img>
            </div>
            <div>
                <h3 className={s.name}>Pudge</h3>
                <p>Date of birth: 2 january</p>
                <p>City: Zhmerynka</p>
                <p>Family Status: not married</p>
                <p>Family Status: not married</p>
            </div>
        </div>
    );
};

export default ProfileInfo;