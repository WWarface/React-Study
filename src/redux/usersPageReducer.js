const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";
const TOGGLE_FETCHING = "TOGGLE_FETCHING";


let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
                return {
                    ...state,
                    users: state.users.map(u => {
                        if (u.id === action.userId) {
                            return {
                                ...u,
                                isFollowed: false
                            }
                        }
                        return u;
                    })
                };
            }
        case UNFOLLOW: {
                return {
                    ...state,
                    users: state.users.map(u => {
                        if (u.id === action.userId) {
                            return {
                                ...u,
                                isFollowed: true
                            }
                        }
                        return u;
                    })
                };
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
        default:
            return state;
    }

}


export const follow = (userId) => ({type: FOLLOW, userId});

export const unfollow = (userId) => ({type: UNFOLLOW, userId});

export const setUsers = (users) => ({type: SET_USERS, users});

export const setCurrentPage = (pageNum) => ({type: SET_CURRENT_PAGE, pageNum});

export const setTotalCount = (totalCount) => ({type: SET_TOTAL_COUNT, totalCount});

export const toggleFetching = (isFetching) => ({type: TOGGLE_FETCHING, toggle:isFetching});

export default usersReducer;
