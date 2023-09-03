import React from 'react'
import s from '../Users.module.css'
import userPhoto from '../../../assets/images/NoAvatar.png'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

let User = props => {
	let u = props.user
	const theme = useSelector(state => state.environment.theme)

	return (
		<div className={s.userWrapper}>
			<NavLink to={'/profile/' + u.id}>
				<img
					src={u.photos.small != null ? u.photos.small : userPhoto}
					className={theme === 'light' ? s.avaLight : s.ava}
					alt='no img(nop'
				></img>
			</NavLink>
			<div className={s.description}>
				<p className={s.name}>{u.name}</p>
				<p className={s.status}>{'u.location.city'}</p>
				<p className={s.info}>{'u.location.country'}</p>
			</div>
			{u.followed ? (
				<button
					disabled={props.isFollowing.some(id => id === u.id)}
					onClick={() => {
						props.unFollow(u.id)
					}}
					className={s.buttonUnfollow}
				>
					UnFollow
				</button>
			) : (
				<button
					disabled={props.isFollowing.some(id => id === u.id)}
					onClick={() => {
						props.follow(u.id)
					}}
					className={s.buttonFollow}
				>
					Subscribe
				</button>
			)}
		</div>
	)
}

export default User
