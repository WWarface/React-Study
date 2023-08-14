export let getUsersPage = state => {
	return state.usersPage
}
export let getPageSize = state => {
	return state.usersPage.pageSize
}
export let getTotalUsersCount = state => {
	return state.usersPage.totalUsersCount
}
export let getCurrentPage = state => {
	return state.usersPage.currentPage
}
export let getIsFetching = state => {
	return state.usersPage.isFetching
}
export let getIsFollowing = state => {
	return state.usersPage.isFollowing
}
export let getIsLogged = state => {
	return state.auth.isLogged
}
