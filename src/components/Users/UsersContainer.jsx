import { follow, unfollow, setUsers, setCurrentPage, setTotalCount, toggleFetching } from "../../redux/usersPageReducer";
import Users from "./Users"
import { connect } from "react-redux";
import axios from 'axios';
import React from "react";
import Preloader from "../common/Preloader/Preloader";
class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.toggleFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.usersPage.currentPage}&count=${this.props.usersPage.pageSize}`).then(response => {
            this.props.toggleFetching(false);

            this.props.setUsers(response.data.items);
            this.props.setTotalCount(response.data.totalCount)
        });
    }

    onPageChanged(pageNum) {

        this.props.setCurrentPage(pageNum);

        this.props.toggleFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNum}&count=${this.props.usersPage.pageSize}`).then(response => {
            this.props.toggleFetching(false);

            this.props.setUsers(response.data.items)
        });
    }

    render() {

        return (
            <div style={{ flex: 80 }}>
                {this.props.isFetching ? <Preloader /> : <Users
                    currentPage={this.props.currentPage}
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    onPageChanged={this.onPageChanged.bind(this)}
                    usersPage={this.props.usersPage}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                />}

            </div>

        );
    }
}

let mapStateToProps = (state) => {
    return {
        usersPage: state.usersPage,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

export default connect(mapStateToProps, { follow, unfollow, setUsers, setCurrentPage, setTotalCount, toggleFetching })(UsersContainer);

