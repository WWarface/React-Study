import React from 'react'
import Profile from './Profile'
import { connect } from 'react-redux'
import { getInfo } from '../../redux/profileReducer'
import { withRouter } from './WithRouter'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'

class ProfileContainer extends React.Component {
	componentDidMount() {
		let userId = this.props.router.params.userId
		if (!userId) userId = 2
		this.props.getInfo(userId)
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

export default withAuthRedirect(
	connect(mapStateToProps, { getInfo })(ProfileContainerWithUrl)
)
