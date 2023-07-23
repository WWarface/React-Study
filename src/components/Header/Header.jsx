import React from 'react'
import s from './Header.module.css'

const Header = props => {
	debugger
	return (
		<header className={s.headerContainer}>
			<img
				className={s.img}
				src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/C.P._Company_logo.svg/1280px-C.P._Company_logo.svg.png'
				alt='No img'
			></img>
			{props.isAuth ? (
				<div с={s.loginContainer}>{props.login}</div>
			) : (
				<div с={s.loginContainer}>Login</div>
			)}
		</header>
	)
}

export default Header
