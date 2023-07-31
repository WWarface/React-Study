import axios from 'axios'

const instance = axios.create({
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	withCredentials: true,
	headers: {
		'API-KEY': '9a4f16a6-1656-4cd2-97c8-064d7ef48013'
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

export const profileApi = {
	getStatus(userId) {
		return instance.get('/profile/status/' + userId)
	},
	updateStatus(status) {
		return instance.put('/profile/status', status)
	}
}

export const loginApi = {
	login(credentials) {
		return instance.post('/auth/login/', credentials)
	},
	unLogin(credentials) {
		return instance.delete('/auth/login')
	}
}

export const getUserInfo = userId => {
	return axios
		.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
		.then(response => response.data)
}
