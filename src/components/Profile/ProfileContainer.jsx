import React from 'react'
import Profile from './Profile'
import { connect } from 'react-redux'
import { getInfo, getStatus, updateStatus } from '../../redux/profileReducer'
import { withRouter } from './WithRouter'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { compose } from 'redux'

class ProfileContainer extends React.Component {
	componentDidMount() {
		let userId = this.props.router.params.userId
		if (!userId) {
			userId = this.props.userId
			if (!userId) {
				this.props.history.push('/login') //bad solution ((
			}
		}
		this.props.getInfo(userId)
		this.props.getStatus(userId)
	}

	render() {
		return <Profile {...this.props} />
	}
}

let mapStateToProps = state => {
	return {
		profileInfo: state.profilePage.profileInfo,
		status: state.profilePage.status,
		userId: state.auth.userId
	}
}

export default compose(
	withAuthRedirect,
	connect(mapStateToProps, { getInfo, getStatus, updateStatus }),
	withRouter
)(ProfileContainer)
