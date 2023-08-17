import { connect } from 'react-redux'
import { logout } from '../../redux/authReducer'
import Header from './Header'

let mapStateToProps = state => ({
	isAuth: state.auth.isLogged,
	login: state.auth.login
})

export default connect(mapStateToProps, { logout })(Header)
