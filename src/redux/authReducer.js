import { authApi } from '../api/api'

const SET_USER_LOGIN_DATA = 'SET_USER_LOGIN_DATA'

let initialState = {
	email: null,
	login: null,
	userId: null,
	isLogged: false
}

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_USER_LOGIN_DATA: {
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

export const authenticate = () => {
	return dispatch => {
		authApi.authUser().then(data => {
			if (data.resultCode === 0) {
				let { id, login, email } = data.data
				dispatch(setUserLoginData(id, login, email, true))
			}
		})
	}
}

export const login = (email, password, rememberMe) => {
	return dispatch => {
		authApi.login({ email, password, rememberMe }).then(data => {
			if (data.resultCode === 0) {
				debugger
				dispatch(authenticate())
			}
		})
	}
}

export const logout = () => {
	return dispatch => {
		authApi.logout().then(data => {
			if (data.resultCode === 0) {
				dispatch(setUserLoginData(null, null, null, false))
			}
		})
	}
}

export default authReducer
