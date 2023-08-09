import { connect } from 'react-redux'
import { requiredField } from '../../utils/validators'
import { FormControls } from '../common/FormControls/FormControls'
import s from './login.module.css'
import { Field, reduxForm } from 'redux-form'
import { login } from '../../redux/authReducer'
import { Navigate } from 'react-router-dom'

const Login = props => {
	const onSubmit = formData => {
		console.log(formData)
		props.login(formData.email, formData.password, formData.rememberMe)
	}

	if (props.isLogged) return <Navigate to={'/profile'} />

	return (
		<div className={s.loginWrapper}>
			<LoginReduxForm onSubmit={onSubmit} />
		</div>
	)
}

const LoginForm = props => {
	return (
		<form onSubmit={props.handleSubmit}>
			<h1>Login</h1>
			<div>
				<Field
					placeholder={'Email'}
					component={FormControls}
					name='email'
					validate={requiredField}
					child='input'
				/>{' '}
				Login
			</div>
			<div>
				<Field
					placeholder={'Password'}
					component={FormControls}
					name='password'
					validate={requiredField}
					child='input'
					type={'password'}
				/>{' '}
				password
			</div>
			<div>
				<Field
					placeholder={'input'}
					component={'input'}
					type={'checkbox'}
					name='rememberMe'
				/>{' '}
				remember me
			</div>
			<div>
				<button>Login</button>
			</div>
		</form>
	)
}

const LoginReduxForm = reduxForm({
	form: 'login'
})(LoginForm)

let mapDispatchToProps = state => ({
	isLogged: state.auth.isLogged
})

export default connect(mapDispatchToProps, { login })(Login)
