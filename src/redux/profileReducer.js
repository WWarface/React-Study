import { getUserInfo, profileApi } from '../api/api'

const ADD_POST = 'ADD_POST'
const SET_PROFILE_INFO = 'SET_PROFILE_INFO'
const SET_STATUS = 'SET_STATUS'

let initialState = {
	posts: [
		{
			message: 'Ya segodnya seriy',
			id: '0'
		},
		{
			message: 'ee kak rulit',
			id: '1'
		},
		{
			message: 'a zalubku ce zroblu a zalubky',
			id: '2'
		}
	],
	profileInfo: null,
	status: ''
}

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST: {
			return {
				...state,
				posts: [
					...state.posts,
					{ message: action.postMessage, id: state.posts.length + 1 }
				],
				newPostMessage: ''
			}
		}
		case SET_PROFILE_INFO: {
			return {
				...state,
				profileInfo: action.profileInfo
			}
		}
		case SET_STATUS: {
			return {
				...state,
				status: action.status
			}
		}
		default:
			return state
	}
}

export const addPost = postMessage => ({ type: ADD_POST, postMessage })

export const setProfileInfo = profileInfo => ({
	type: SET_PROFILE_INFO,
	profileInfo
})

export const setStatus = status => ({
	type: SET_STATUS,
	status
})

export const getInfo = userId => {
	return async dispatch => {
		let data = await getUserInfo(userId)
		dispatch(setProfileInfo(data))
	}
}

export const getStatus = userId => {
	return async dispatch => {
		let data = await profileApi.getStatus(userId)
		if (data.data) dispatch(setStatus(data.data))
	}
}

export const updateStatus = status => {
	return async dispatch => {
		let data = await profileApi.updateStatus(status)
		if (data.data.resultCode === 0) {
			dispatch(setStatus(status.status))
		}
	}
}

export default profileReducer
