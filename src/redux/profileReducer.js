import { getUserInfo, profileApi } from '../api/api'

const ADD_POST = 'ADD_POST'
const SET_PROFILE_INFO = 'SET_PROFILE_INFO'
const SET_STATUS = 'SET_STATUS'
const UPLOAD_PHOTOS = 'UPLOAD_PHOTOS'

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
		case UPLOAD_PHOTOS: {
			return {
				...state,
				profileInfo: { ...state.profileInfo, photos: action.photos.photos }
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
export const setPhotos = photos => ({
	type: UPLOAD_PHOTOS,
	photos
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

export const uploadPhoto = photo => {
	return async dispatch => {
		let response = await profileApi.savePhoto(photo)
		if (response.resultCode === 0) {
			dispatch(setPhotos(response.data))
		} else {
			console.log(response.messages)
		}
	}
}

export default profileReducer
