import {
	follow,
	unfollow,
	setUsers,
	setCurrentPage,
	setTotalCount,
	toggleFetching
} from '../../redux/usersPageReducer'
import Users from './Users'
import { connect } from 'react-redux'
import React from 'react'
import Preloader from '../common/Preloader/Preloader'
import { usersApi } from '../../api/api'
class UsersContainer extends React.Component {
	componentDidMount() {
		this.props.toggleFetching(true)
		usersApi
			.getUsers(this.props.usersPage.currentPage, this.props.usersPage.pageSize)
			.then(data => {
				this.props.toggleFetching(false)
				this.props.setUsers(data.items)
				this.props.setTotalCount(data.totalCount)
			})
	}

	onPageChanged(pageNum) {
		this.props.setCurrentPage(pageNum)

		this.props.toggleFetching(true)
		usersApi
			.getUsers(this.props.usersPage.currentPage, this.props.usersPage.pageSize)
			.then(data => {
				this.props.toggleFetching(false)

				this.props.setUsers(data.items)
			})
	}

	render() {
		return (
			<div style={{ flex: 80 }}>
				{this.props.isFetching ? (
					<Preloader />
				) : (
					<Users
						currentPage={this.props.currentPage}
						totalUsersCount={this.props.totalUsersCount}
						pageSize={this.props.pageSize}
						onPageChanged={this.onPageChanged.bind(this)}
						usersPage={this.props.usersPage}
						follow={this.props.follow}
						unfollow={this.props.unfollow}
					/>
				)}
			</div>
		)
	}
}

let mapStateToProps = state => {
	return {
		usersPage: state.usersPage,
		pageSize: state.usersPage.pageSize,
		totalUsersCount: state.usersPage.totalUsersCount,
		currentPage: state.usersPage.currentPage,
		isFetching: state.usersPage.isFetching
	}
}

export default connect(mapStateToProps, {
	follow,
	unfollow,
	setUsers,
	setCurrentPage,
	setTotalCount,
	toggleFetching
})(UsersContainer)
