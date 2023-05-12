import { followAC, unfollowAc, setUsersAc, setCurrentPageAc, setTotalCountAc } from "../../redux/usersPageReducer";
import Users from "./Users"
import { connect } from "react-redux";
import axios from 'axios';
import React from "react";


class UsersContainer extends React.Component {
    
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.usersPage.currentPage}&count=${this.props.usersPage.pageSize}`).then(response => {

            this.props.setUsers(response.data.items);
            this.props.setTotalCount(response.data.totalCount)
        });
    }

    onPageChanged(pageNum) {
        debugger
        this.props.setPage(pageNum);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNum}&count=${this.props.usersPage.pageSize}`).then(response => {

            this.props.setUsers(response.data.items)
        });
    }

    render() {
        
        return (
            <Users
                currentPage={this.props.currentPage}
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                onPageChanged={this.onPageChanged.bind(this)}
                usersPage={this.props.usersPage}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
            />
        );
    }
}

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
        follow: (userId) => {
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
        setTotalCount: (totalCount) => {
            dispatch(setTotalCountAc(totalCount))
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);

