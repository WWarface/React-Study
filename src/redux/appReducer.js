import { authenticate } from './authReducer'

const INITIALIZE = 'INITIALIZE'

let initialState = {
	initialized: false
}

const appReducer = (state = initialState, action) => {
	switch (action.type) {
		case INITIALIZE: {
			return {
				...state,
				initialized: true
			}
		}
		default:
			return state
	}
}

export const authenticateAc = () => ({
	type: INITIALIZE
})

export const InitializeApp = () => {
	return dispatch => {
		let promise = dispatch(authenticate())
		promise.then(() => {
			dispatch(authenticateAc())
		})
	}
}

export default appReducer
