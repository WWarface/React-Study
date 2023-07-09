import React from 'react'
import axios from 'axios'
import Profile from './Profile'
import { connect } from 'react-redux'
import { setProfileInfo } from '../../redux/profileReducer'
import { withRouter } from './WithRouter'
import { getProfileInfo } from '../../api/api'

class ProfileContainer extends React.Component {
	componentDidMount() {
		let userId = this.props.router.params.userId

		if (!userId) userId = 2

		getProfileInfo(userId).then(data => {
			this.props.setProfileInfo(data)
		})
	}

	render() {
		return <Profile {...this.props} />
	}
}

let ProfileContainerWithUrl = withRouter(ProfileContainer)

let mapStateToProps = state => {
	return {
		profileInfo: state.profilePage.profileInfo
	}
}

export default connect(mapStateToProps, { setProfileInfo })(
	ProfileContainerWithUrl
)
