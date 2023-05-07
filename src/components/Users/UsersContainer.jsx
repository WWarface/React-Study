import { followAC, unfollowAc,setUsersAc, setCurrentPageAc, setTotalCountAc } from "../../redux/usersPageReducer";
import Users from "./Users"
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        usersPage: state.usersPage,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) =>{            
            dispatch(followAC(userId))
        },
        unfollow: (userid) => {
            dispatch(unfollowAc(userid))
        },
        setUsers: (users) => {
            dispatch(setUsersAc(users));
        },
        setPage: (pageNum) => {            
            dispatch(setCurrentPageAc(pageNum));
        },
        setTotalCount: (totalCount) =>{
            dispatch(setTotalCountAc(totalCount))
        }
    };
}

const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(Users);

export default UsersContainer;