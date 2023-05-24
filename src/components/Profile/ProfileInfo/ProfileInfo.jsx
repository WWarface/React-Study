import React from 'react';
import styles from './ProfileInfo.module.css'
import Preloader from '../../common/Preloader/Preloader';

import img from '../../../assets/images/noAvatarInverted.png'
import aboutImg from '../../../assets/images/aboutMe.png'
import facebookImg from '../../../assets/images/facebook.png'
import twitterImg from '../../../assets/images/twitter.png'
import instagramImg from '../../../assets/images/instagram.png'
import youtubeImg from '../../../assets/images/youtube.png'
import gitHubImg from '../../../assets/images/github.png'

import SingleInfo from './SingleInfo/SingleInfo';



const ProfileInfo = (props) => {
    if (!props.profileInfo) {
        return <Preloader />
    }

    
    return (
        <div className={styles.profileContainer}>
            <div className={styles.pictureContainer}>
                <img className={styles.picture} alt="Not found" src={
                    props.profileInfo.photos.large ? props.profileInfo.photos.large : img}></img>
            </div>
            <div className={styles.profileInfoContainer}>
                <h3 className={styles.name}>{props.profileInfo.fullName ? props.profileInfo.fullName : "Pudge"}</h3>

                {props.profileInfo.aboutMe ? <SingleInfo info={props.profileInfo.aboutMe} icon={aboutImg} /> : null}
                {props.profileInfo.contacts.facebook ? <SingleInfo info={props.profileInfo.contacts.facebook} icon={facebookImg} /> : null}
                {props.profileInfo.contacts.twitter ? <SingleInfo info={props.profileInfo.contacts.twitter} icon={twitterImg} /> : null}
                {props.profileInfo.contacts.instagram ? <SingleInfo info={props.profileInfo.contacts.instagram} icon={instagramImg} /> : null}
                {props.profileInfo.contacts.youtube ? <SingleInfo info={props.profileInfo.contacts.youtube} icon={youtubeImg} /> : null}
                {props.profileInfo.contacts.github ? <SingleInfo info={props.profileInfo.contacts.github} icon={gitHubImg} /> : null}
            </div>
        </div>
    );
};

export default ProfileInfo;