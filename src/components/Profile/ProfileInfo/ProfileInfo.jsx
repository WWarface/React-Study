import React, { useState, useRef, useEffect } from 'react'
import s from './ProfileInfo.module.css'
import Preloader from '../../common/Preloader/Preloader'

import aboutImg from '../../../assets/images/aboutMe.png'
import facebookImg from '../../../assets/images/facebook.png'
import twitterImg from '../../../assets/images/twitter.png'
import instagramImg from '../../../assets/images/instagram.png'
import youtubeImg from '../../../assets/images/youtube.png'
import gitHubImg from '../../../assets/images/github.png'
import img from '../../../assets/images/NoAvatar.png'

import SingleInfo from './SingleInfo/SingleInfo'
import Status from './Status/Status'
import CropEasy from '../../crop/CropEasy'

const ProfileInfo = props => {
	const [openCrop, setOpenCrop] = useState(false)
	const [file, setFile] = useState(null)
	const [photoURL, setPhotoURL] = useState('1')
	const [ProfilePhoto, setProfilePhoto] = useState({})

	useEffect(() => {
		setProfilePhoto(props.profileInfo ? props.profileInfo.photos.large : img)
	}, [props.profileInfo])

	const fileInputRef = useRef(null)

	const handleChange = e => {
		const file = e.target.files[0]
		if (file) {
			setFile(file)
			setPhotoURL(URL.createObjectURL(file))
			setOpenCrop(true)
		}
	}

	const handlePictureClick = () => {
		fileInputRef.current.click()
	}

	if (!props.profileInfo) {
		return <Preloader />
	}

	return openCrop ? (
		<CropEasy {...{ photoURL, setOpenCrop, setFile, setPhotoURL }} />
	) : (
		<div className={s.profileContainer}>
			<div
				className={
					props.isMainProfile ? `${s.mainContentImage}` : s.pictureContainer
				}
				onClick={props.isMainProfile ? handlePictureClick : null}
			>
				<input
					accept='image/*'
					id='profilePhoto'
					type='file'
					style={{ display: 'none' }}
					onChange={handleChange}
					ref={fileInputRef}
				/>
				<img
					className={
						props.isMainProfile
							? `${s.pictureMain} ${s.transitionEffect} ${s.hoverEffect}`
							: s.picture
					}
					alt='Not found'
					src={ProfilePhoto ? ProfilePhoto : img}
				></img>
			</div>
			<div className={s.profileInfoContainer}>
				<h3 className={s.name}>
					{props.profileInfo.fullName ? props.profileInfo.fullName : 'Pudge'}
				</h3>

				<Status isMainProfile={props.isMainProfile} updateStatus={props.updateStatus} status={props.status} />

				{props.profileInfo.aboutMe ? (
					<SingleInfo info={props.profileInfo.aboutMe} icon={aboutImg} />
				) : null}
				{props.profileInfo.contacts.facebook ? (
					<SingleInfo
						info={props.profileInfo.contacts.facebook}
						icon={facebookImg}
					/>
				) : null}
				{props.profileInfo.contacts.twitter ? (
					<SingleInfo
						info={props.profileInfo.contacts.twitter}
						icon={twitterImg}
					/>
				) : null}
				{props.profileInfo.contacts.instagram ? (
					<SingleInfo
						info={props.profileInfo.contacts.instagram}
						icon={instagramImg}
					/>
				) : null}
				{props.profileInfo.contacts.youtube ? (
					<SingleInfo
						info={props.profileInfo.contacts.youtube}
						icon={youtubeImg}
					/>
				) : null}
				{props.profileInfo.contacts.github ? (
					<SingleInfo
						info={props.profileInfo.contacts.github}
						icon={gitHubImg}
					/>
				) : null}
			</div>
		</div>
	)
}

export default ProfileInfo
