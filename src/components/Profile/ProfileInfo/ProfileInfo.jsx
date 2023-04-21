import React from 'react';
import s from './ProfileInfo.module.css'


function ProfileInfo(props) {
    return (
        <div className={s.profileContainer}>
            <div className={s.pictureContainer}>
                <img className={s.picture} alt="Not found" src='https://virtus-img.cdnvideo.ru/images/og/plain/6c/6cb3e58326702d500847f61e932317b2.jpg'></img>
            </div>
            <div className={s.profileInfoContainer}>
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