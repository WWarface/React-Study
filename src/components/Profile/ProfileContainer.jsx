import React, { useEffect } from 'react'
import Profile from './Profile'
import { connect } from 'react-redux'
import {
	getInfo,
	getStatus,
	updateStatus,
	uploadPhoto
} from '../../redux/profileReducer'
import { withRouter } from './WithRouter'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { compose } from 'redux'

const ProfileContainer = ({
	profileInfo,
	status,
	userId,
	getInfo,
	getStatus,
	updateStatus,
	router,
	history,
	uploadPhoto
}) => {
	useEffect(() => {
		let userIdParam = router.params.userId

		if (!userIdParam) {
			userIdParam = userId
			if (!userIdParam) {
				history.push('/login')
			}
		}

		getInfo(userIdParam)
		getStatus(userIdParam)
	}, [getInfo, getStatus, history, router.params.userId, userId])

	return (
		<Profile
			profileInfo={profileInfo}
			status={status}
			userId={userId}
			updateStatus={updateStatus}
			uploadPhoto={uploadPhoto}
			isMainProfile={!router.params.userId}
		/>
	)
}

const mapStateToProps = state => {
	return {
		profileInfo: state.profilePage.profileInfo,
		status: state.profilePage.status,
		userId: state.auth.userId
	}
}

export default compose(
	withAuthRedirect,
	connect(mapStateToProps, { getInfo, getStatus, updateStatus, uploadPhoto }),
	withRouter
)(ProfileContainer)
