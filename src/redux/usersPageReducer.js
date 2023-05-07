const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";

let initialState = {
    users: [
    ],
    pageSize: 10,
    totalUsersCount: 45 ,
    currentPage: 5
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
            return{
                ...state,
                currentPage: action.pageNum
            }
        }
        case SET_TOTAL_COUNT: {
            return {
                ...state,
                totalUsersCount:action.totalCount
            }
        }
        default:
            return state;
    }

}


export const followAC = (userId) => ({type: FOLLOW, userId});

export const unfollowAc = (userId) => ({type: UNFOLLOW, userId});

export const setUsersAc = (users) => ({type: SET_USERS, users});

export const setCurrentPageAc = (pageNum) => ({type: SET_CURRENT_PAGE, pageNum});

export const setTotalCountAc = (totalCount) => ({type: SET_TOTAL_COUNT, totalCount});

export default usersReducer;
