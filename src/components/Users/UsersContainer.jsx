import { followAC, unfollowAc,setUsersAc } from "../../redux/usersPageReducer";
import Users from "./Users"
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        usersPage: state.usersPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) =>{
            debugger
            dispatch(followAC(userId))
        },
        unfollow: (userid) => {
            dispatch(unfollowAc(userid))
        },
        setUsers: (users) => {
            dispatch(setUsersAc(users));
        }
    };
}

const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(Users);

export default UsersContainer;