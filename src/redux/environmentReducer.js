const TOGGLE_THEME = 'TOGGLE_THEME'

let initialState = {
	theme: 'light'
}

const environmentReducer = (state = initialState, action) => {
	switch (action.type) {
		case TOGGLE_THEME: {
			return {
				...state,
				theme: state.theme === 'dark' ? 'light' : 'dark'
			}
		}
		default:
			return state
	}
}

export const toggleTheme = () => ({ type: TOGGLE_THEME })

export default environmentReducer
