import React from 'react'
import PostsContainer from './Posts/PostsContainer'
import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = props => {
	return (
		<div className={s.content}>
			<img
				className={s.contentImage}
				src='https://i.pinimg.com/564x/8e/a6/09/8ea609b7e32dbdc318413b93f7b228f4.jpg'
				alt='no img :('
			/>
			<ProfileInfo
				updateStatus={props.updateStatus}
				status={props.status}
				profileInfo={props.profileInfo}
				isMainProfile={props.isMainProfile}
				uploadPhoto={props.savePhoto}
			/>
			<PostsContainer />
		</div>
	)
}

export default Profile
