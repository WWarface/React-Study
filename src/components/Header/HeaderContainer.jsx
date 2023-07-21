import React from 'react'
import { connect } from 'react-redux'
import { authenticate } from '../../redux/authReducer'
import Header from './Header'

class HeaderContainer extends React.Component {
	componentDidMount() {
		this.props.authenticate()
	}

	render() {
		return <Header {...this.props} />
	}
}

let mapStateToProps = state => ({
	isAuth: state.auth.isLogged,
	login: state.auth.login
})

export default connect(mapStateToProps, { authenticate })(HeaderContainer)
