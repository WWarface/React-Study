import React from 'react'
import { connect } from 'react-redux'
import { setUserLoginData } from '../../redux/authReducer'
import Header from './Header'
import { authApi } from '../../api/api'

class HeaderContainer extends React.Component {
	componentDidMount() {
		authApi.authUser().then(data => {
			let { id, login, email } = data.data
			this.props.setUserLoginData(id, login, email)
		})
	}

	render() {
		return <Header {...this.props} />
	}
}

let mapStateToProps = state => ({
	isAuth: state.auth.isLogged,
	login: state.auth.login
})

export default connect(mapStateToProps, { setUserLoginData })(HeaderContainer)
