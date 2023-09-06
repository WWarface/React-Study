import { connect, useSelector } from 'react-redux'
import { requiredField } from '../../utils/validators'
import { FormControls } from '../common/FormControls/FormControls'
import s from './login.module.css'
import { Field, reduxForm } from 'redux-form'
import { login } from '../../redux/authReducer'
import { Navigate } from 'react-router-dom'
const Login = props => {
	const onSubmit = formData => {
		console.log(formData)
		props.login(
			formData.email,
			formData.password,
			formData.rememberMe,
			formData.captcha
		)
	}

	if (props.isLogged) return <Navigate to={'/profile'} />

	return (
		<div className={s.loginWrapper}>
			<LoginReduxForm onSubmit={onSubmit} captcha={props.captcha} />
		</div>
	)
}

const LoginForm = props => {
	return (
		<div className={s.loginFormWrapper}>
			<form onSubmit={props.handleSubmit}>
				<div className={s.loginWord}>
					<h1>Login</h1>
				</div>
				<div>
					<Field
						placeholder={'Email'}
						component={FormControls}
						name='email'
						validate={requiredField}
						child='input'
						className={s.input}
					/>{' '}
					<br></br>
				</div>
				<div>
					<Field
						placeholder={'Password'}
						component={FormControls}
						name='password'
						validate={requiredField}
						child='input'
						type={'password'}
						className={s.input}
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
				{props.captcha && (
					<div>
						<img src={props.captcha} alt='no img' />
						<Field
							placeholder={'Symbols'}
							component={FormControls}
							name='captcha'
							validate={requiredField}
							child='input'
							type={''}
							className={s.input}
						/>{' '}
					</div>
				)}
				{props.error ? (
					<div className={s.errorContainer}>
						<span className={s.errorMessage}>{props.error}</span>
					</div>
				) : (
					''
				)}
				<div>
					<button className={s.loginButton}>Login</button>
				</div>
			</form>
		</div>
	)
}

const LoginReduxForm = reduxForm({
	form: 'login'
})(LoginForm)

let mapDispatchToProps = state => ({
	isLogged: state.auth.isLogged,
	captcha: state.auth.captcha
})

export default connect(mapDispatchToProps, { login })(Login)
