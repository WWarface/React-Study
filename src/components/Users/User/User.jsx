import React from 'react'
import styles from '../Users.module.css'
import userPhoto from '../../../assets/images/NoAvatar.png'
import { NavLink } from 'react-router-dom'

let User = props => {
	let u = props.user
	return (
		<div className={styles.userWrapper}>
			<NavLink to={'/profile/' + u.id}>
				<img
					src={u.photos.small != null ? u.photos.small : userPhoto}
					className={styles.ava}
					alt='no img(nop'
				></img>
			</NavLink>
			<div className={styles.description}>
				<p className={styles.name}>{u.name}</p>
				<p className={styles.status}>{'u.location.city'}</p>
				<p className={styles.info}>{'u.location.country'}</p>
			</div>
			{u.followed ? (
				<button
					disabled={props.isFollowing.some(id => id === u.id)}
					onClick={() => {
						props.unFollow(u.id)
					}}
					className={styles.buttonUnfollow}
				>
					UnFollow
				</button>
			) : (
				<button
					disabled={props.isFollowing.some(id => id === u.id)}
					onClick={() => {
						props.follow(u.id)
					}}
					className={styles.buttonFollow}
				>
					Subscribe
				</button>
			)}
		</div>
	)
}

export default User
