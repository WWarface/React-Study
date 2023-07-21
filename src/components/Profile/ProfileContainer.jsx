import React from 'react'
import Profile from './Profile'
import { connect } from 'react-redux'
import { getInfo, setProfileInfo } from '../../redux/profileReducer'
import { withRouter } from './WithRouter'
import { getUserInfo } from '../../api/api'

class ProfileContainer extends React.Component {
	componentDidMount() {
		let userId = this.props.router.params.userId
		if (!userId) userId = 2
		getUserInfo(userId).then(data => {
			this.props.setProfileInfo(data)
		})

		// getInfo(userId) ?????????????????????????????????????????????
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
