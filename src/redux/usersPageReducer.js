import { usersApi } from '../api/api'
import { updateObjectInArray } from '../utils/objectChanger'

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'
const TOGGLE_FETCHING = 'TOGGLE_FETCHING'
const TOGGLE_FOLLOWING = 'IS_FOLLOWING'

let initialState = {
	users: [],
	pageSize: 10,
	totalUsersCount: 0,
	currentPage: 1,
	isFetching: true,
	isFollowing: []
}

const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case FOLLOW: {
			return {
				...state,
				users: updateObjectInArray(state.users, action.userId, 'id', {
					followed: true
				})
			}
		}
		case UNFOLLOW: {
			return {
				...state,
				users: updateObjectInArray(state.users, action.userId, 'id', {
					followed: false
				})
			}
		}
		case SET_USERS: {
			return {
				...state,
				users: [...action.users]
			}
		}
		case SET_CURRENT_PAGE: {
			return {
				...state,
				currentPage: action.pageNum
			}
		}
		case SET_TOTAL_COUNT: {
			return {
				...state,
				totalUsersCount: action.totalCount
			}
		}
		case TOGGLE_FETCHING: {
			return {
				...state,
				isFetching: action.toggle
			}
		}
		case TOGGLE_FOLLOWING: {
			return {
				...state,
				isFollowing: action.toggle
					? [...state.isFollowing, action.userId]
					: state.isFollowing.filter(id => id !== action.userId)
			}
		}
		default:
			return state
	}
}

export const makeFollow = userId => ({ type: FOLLOW, userId })

export const makeUnfollow = userId => ({ type: UNFOLLOW, userId })

export const setUsers = users => ({ type: SET_USERS, users })

export const setCurrentPage = pageNum => ({ type: SET_CURRENT_PAGE, pageNum })

export const setTotalCount = totalCount => ({
	type: SET_TOTAL_COUNT,
	totalCount
})

export const toggleFetching = isFetching => ({
	type: TOGGLE_FETCHING,
	toggle: isFetching
})

export const toggleFollowing = (isFollowing, userId) => ({
	type: TOGGLE_FOLLOWING,
	toggle: isFollowing,
	userId: userId
})

export const getUsers = (currentPage, pageSize) => {
	return async dispatch => {
		dispatch(toggleFetching(true))
		let data = await usersApi.getUsers(currentPage, pageSize)
		dispatch(setCurrentPage(currentPage))
		dispatch(toggleFetching(false))
		dispatch(setUsers(data.items))
		dispatch(setTotalCount(data.totalCount))
	}
}

export const unFollow = userId => {
	return async dispatch => {
		makeSubUnSubOperation(
			dispatch,
			userId,
			makeUnfollow,
			usersApi.serverSubscriptionDelete.bind(usersApi)
		)
	}
}

export const follow = userId => {
	return async dispatch => {
		makeSubUnSubOperation(
			dispatch,
			userId,
			makeFollow,
			usersApi.serverSubscriptionPost.bind(usersApi)
		)
	}
}

const makeSubUnSubOperation = async (dispatch, userId, action, apiMethod) => {
	dispatch(toggleFollowing(true, userId))
	let data = await apiMethod(userId)
	if (data.resultCode === 0) dispatch(action(userId))
	dispatch(toggleFollowing(false, userId))
}

export default usersReducer
