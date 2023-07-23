import { getUsers, unFollow, follow } from '../../redux/usersPageReducer'
import Users from './Users'
import { connect } from 'react-redux'
import React from 'react'
import Preloader from '../common/Preloader/Preloader'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
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
						unFollow={this.props.unFollow}
						isFollowing={this.props.isFollowing}
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
		isFetching: state.usersPage.isFetching,
		isFollowing: state.usersPage.isFollowing,
		isLogged: state.auth.isLogged
	}
}

export default withAuthRedirect(
	connect(mapStateToProps, {
		getUsers,
		unFollow,
		follow
	})(UsersContainer)
)
