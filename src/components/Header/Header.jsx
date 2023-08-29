import React, { useState } from 'react'
import s from './Header.module.css'
import ThemeSwitch from '../common/ThemeSwitch/ThemeSwitch'
import { useDispatch, useSelector } from 'react-redux'
import { toggleTheme } from '../../redux/environmentReducer'

import logo from './../../camera.svg'

const Header = props => {
	const theme = useSelector(state => state.environment.theme)
	const dispatch = useDispatch()

	const forceToggleTheme = () => {
		dispatch(toggleTheme())
	}
	return (
		<header className={s.headerContainer} id={theme}>
			<img
				className={theme === 'dark' ? `${s.darkImg} ${s.img}` : s.img}
				src={logo}
				alt='No img'
			></img>
			<ThemeSwitch
				handleChange={forceToggleTheme}
				checked={theme === 'light'}
			/>
			{props.isAuth ? (
				<>
					<div className={s.loginContainer}>
						<span className={s.loginSpan}>{props.login}</span>
					</div>
					<div className={s.logoutContainer} onClick={props.logout}>
						<div className={s.logoutContainerButton} onClick={props.logout}>
							<span className={s.logoutSpan}>Logout</span>
						</div>
					</div>
				</>
			) : (
				<div с={s.loginContainer}>
					<span className={s.loginWord}>Login</span>
				</div>
			)}
		</header>
	)
}

export default Header
