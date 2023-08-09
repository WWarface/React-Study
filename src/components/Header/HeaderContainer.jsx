import React from 'react'
import { connect } from 'react-redux'
import { logout } from '../../redux/authReducer'
import Header from './Header'

class HeaderContainer extends React.Component {
	render() {
		return <Header {...this.props} />
	}
}

let mapStateToProps = state => ({
	isAuth: state.auth.isLogged,
	login: state.auth.login
})

export default connect(mapStateToProps, { logout })(HeaderContainer)
