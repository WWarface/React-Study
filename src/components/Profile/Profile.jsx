import React from 'react'
import PostsContainer from './Posts/PostsContainer'
import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = props => {
	return (
		<div className={s.content}>
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
