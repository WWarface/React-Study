import React from 'react'
import s from './Header.module.css'

const Header = props => {
	return (
		<header className={s.headerContainer}>
			<img
				className={s.img}
				src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/C.P._Company_logo.svg/1280px-C.P._Company_logo.svg.png'
				alt='No img'
			></img>
			{props.isAuth ? (
				<>
					<div className={s.loginContainer}>{props.login}</div>
					<div className={s.logoutContainer} onClick={props.logout}>
						Logout
					</div>
				</>
			) : (
				<div с={s.loginContainer}>Login</div>
			)}
		</header>
	)
}

export default Header
