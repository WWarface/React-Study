import s from './login.module.css'
import { Field, reduxForm } from 'redux-form'

const Login = props => {
	const onSubmit = formData => {
		console.log(formData)
	}

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
				<Field placeholder={'Login'} component={'input'} name='login' /> Login
			</div>
			<div>
				<Field placeholder={'Password'} component={'input'} name='password' />{' '}
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

export default Login
