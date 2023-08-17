import React from 'react'
import styles from './Users.module.css'
import Paginator from './Paginator/Paginator'
import User from './User/User'

let Users = props => {
	return (
		<div className={styles.wrapper}>
			<Paginator
				totalUsersCount={props.totalUsersCount}
				pageSize={props.pageSize}
				currentPage={props.currentPage}
				onPageChanged={props.onPageChanged}
			/>

			{props.usersPage.users.map(u => (
				<div key={u.id} className={styles.Wrapper}>
					<User
						user={u}
						follow={props.follow}
						unFollow={props.unFollow}
						isFollowing={props.isFollowing}
					/>
				</div>
			))}
		</div>
	)
}

export default Users
