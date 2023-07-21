import axios from 'axios'

const instance = axios.create({
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	withCredentials: true,
	headers: {
		'API-KEY': '868a0dd9-a097-443d-9cf8-7cc1c9eeb484'
	}
})

export const usersApi = {
	getUsers(currentPage, pageSize) {
		return instance
			.get(`users?page=${currentPage}&count=${pageSize}`)
			.then(response => response.data)
	},

	serverSubscriptionDelete(id) {
		return instance.delete(`follow/${id}`).then(response => response.data)
	},

	serverSubscriptionPost(id) {
		return instance.post(`follow/${id}`).then(response => response.data)
	}
}

export const authApi = {
	authUser() {
		return instance.get('auth/me').then(response => response.data)
	}
}

export const getUserInfo = userId => {
	debugger
	return axios
		.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
		.then(response => response.data)
}
