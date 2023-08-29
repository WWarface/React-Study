import React from 'react'
import { NavLink } from 'react-router-dom'
import Friends from '../Friends/Friends'
import s from './SideBar.module.css'
import { useSelector } from 'react-redux'

const SideBar = props => {
	const theme = useSelector(state => state.environment.theme)

	return (
		<aside id={theme}>
			<div className={s.link}>
				<NavLink
					to={'/profile'}
					className={navData => (navData.isActive ? s.active : s.item)}
				>
					<span>Profile</span>
				</NavLink>
			</div>
			<div className={s.link}>
				<NavLink
					to={'/dialogs'}
					className={navData => (navData.isActive ? s.active : s.item)}
				>
					<span>Messages</span>
				</NavLink>
				<br></br>
			</div>
			<div className={s.link}>
				<NavLink
					to={'/users'}
					className={navData => (navData.isActive ? s.active : s.item)}
				>
					<span>Users</span>
				</NavLink>
				<br></br>
			</div>
			<div className={s.link}>
				<NavLink
					to={'/music'}
					className={navData => (navData.isActive ? s.active : s.item)}
				>
					<span>Music</span>
				</NavLink>
				<br></br>
			</div>
			<div className={s.link}>
				<NavLink
					to={'/settings'}
					className={navData => (navData.isActive ? s.active : s.item)}
				>
					<span>Settings</span>
				</NavLink>
				<br></br>
			</div>

			<Friends friendDialogs={props.friendsPage.friendDialogs} />
		</aside>
	)
}

export default SideBar
