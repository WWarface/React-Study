import { stopSubmit } from 'redux-form'
import { authApi, securityApi } from '../api/api'

const SET_USER_LOGIN_DATA = 'SET_USER_LOGIN_DATA'
const SET_CAPTCHA = 'SET_CAPTCHA'

let initialState = {
	email: null,
	login: null,
	userId: null,
	isLogged: false,
	captcha: null
}

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_USER_LOGIN_DATA:
		case SET_CAPTCHA: {
			return {
				...state,
				...action.data
			}
		}
		default:
			return state
	}
}

export const setUserLoginData = (userId, login, email, isLogged) => ({
	type: SET_USER_LOGIN_DATA,
	data: { userId, login, email, isLogged }
})
export const setCaptcha = captcha => ({
	type: SET_CAPTCHA,
	data: { captcha }
})

export const authenticate = () => {
	return async dispatch => {
		let data = await authApi.authUser()
		if (data.resultCode === 0) {
			let { id, login, email } = data.data
			dispatch(setUserLoginData(id, login, email, true))
		}
		return data
	}
}

export const login = (email, password, rememberMe, captcha) => {
	return async dispatch => {
		let data = await authApi.login({ email, password, rememberMe, captcha })
		if (data.resultCode === 0) {
			dispatch(authenticate())
		} else {
			if (data.resultCode === 10) {
				dispatch(requestCaptcha())
			}
			let message = data.messages.length > 0 ? data.messages[0] : 'Some error'
			dispatch(stopSubmit('login', { _error: message }))
		}
	}
}
export const requestCaptcha = () => {
	return async dispatch => {
		let data = await securityApi.getCaptcha()
		dispatch(setCaptcha(data.url))
	}
}
export const logout = () => {
	return async dispatch => {
		let data = await authApi.logout()
		if (data.resultCode === 0) {
			dispatch(setUserLoginData(null, null, null, false))
		}
	}
}

export default authReducer
