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
				...action.data,
				isLogged: true
			}
		}
		default:
			return state
	}
}

export const setUserLoginData = (userId, login, email) => ({
	type: SET_USER_LOGIN_DATA,
	data: { userId, login, email }
})

export const authenticate = () => {
	return dispatch => {
		authApi.authUser().then(data => {
			if (data.resultCode === 0) {
				let { id, login, email } = data.data
				dispatch(setUserLoginData(id, login, email))
			}
		})
	}
}

export default authReducer
