import { getUsers, unFollow, follow } from '../../redux/usersPageReducer'
import Users from './Users'
import { connect } from 'react-redux'
import React from 'react'
import Preloader from '../common/Preloader/Preloader'
import { compose } from 'redux'
import {
	getCurrentPage,
	getIsFetching,
	getIsFollowing,
	getIsLogged,
	getPageSize,
	getTotalUsersCount,
	getUsersPage
} from '../../redux/Selectors/UsersSelectors'
class UsersContainer extends React.Component {
	componentDidMount() {
		this.props.getUsers(
			this.props.usersPage.currentPage,
			this.props.usersPage.pageSize
		)
	}

	onPageChanged(pageNum) {
		this.props.getUsers(pageNum, this.props.usersPage.pageSize)
	}

	render() {
		return (
			<>
				{this.props.isFetching ? (
					<Preloader sx={{ width: 'auto', height: 'auto' }} />
				) : (
					<Users
						currentPage={this.props.currentPage}
						totalUsersCount={this.props.totalUsersCount}
						pageSize={this.props.pageSize}
						onPageChanged={this.onPageChanged.bind(this)}
						usersPage={this.props.usersPage}
						follow={this.props.follow}
						unFollow={this.props.unFollow}
						isFollowing={this.props.isFollowing}
					/>
				)}
			</>
		)
	}
}

let mapStateToProps = state => {
	return {
		usersPage: getUsersPage(state),
		pageSize: getPageSize(state),
		totalUsersCount: getTotalUsersCount(state),
		currentPage: getCurrentPage(state),
		isFetching: getIsFetching(state),
		isFollowing: getIsFollowing(state),
		isLogged: getIsLogged(state)
	}
}

export default compose(
	connect(mapStateToProps, {
		getUsers,
		unFollow,
		follow
	})
)(UsersContainer)
