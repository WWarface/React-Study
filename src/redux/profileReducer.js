import { getUserInfo, profileApi } from '../api/api'

const ADD_POST = 'ADD_POST'
const UPDATE_TEXT_POSTS = 'UPDATE_TEXT_POSTS'
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
	newPostMessage: '',
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
					{ message: state.newPostMessage, id: state.posts.length + 1 }
				],
				newPostMessage: ''
			}
		}
		case UPDATE_TEXT_POSTS: {
			return {
				...state,
				newPostMessage: action.newText
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

export const updatePostText = text => ({
	type: UPDATE_TEXT_POSTS,
	newText: text
})

export const addPost = () => ({ type: ADD_POST })

export const setProfileInfo = profileInfo => ({
	type: SET_PROFILE_INFO,
	profileInfo
})

export const setStatus = status => ({
	type: SET_STATUS,
	status
})

export const getInfo = userId => {
	return dispatch => {
		getUserInfo(userId).then(data => {
			dispatch(setProfileInfo(data))
		})
	}
}

export const getStatus = userId => {
	return dispatch => {
		profileApi.getStatus(userId).then(data => {
			if (data.data) dispatch(setStatus(data.data))
		})
	}
}

export const updateStatus = status => {
	return dispatch => {
		profileApi.updateStatus(status).then(data => {
			if (data.data.resultCode === 0) {
				dispatch(setStatus(status.status))
			}
		})
	}
}

export default profileReducer
