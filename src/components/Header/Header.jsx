import React, { useState } from 'react'
import s from './Header.module.css'
import ThemeSwitch from '../common/ThemeSwitch/ThemeSwitch'
import { useDispatch, useSelector } from 'react-redux'
import { toggleTheme } from '../../redux/environmentReducer'
import { useMediaQuery } from 'react-responsive'

import logo from './../../camera.svg'
import AccountMenu from '../common/AccountMenu/AccountMenu'
import { NavLink, Navigate } from 'react-router-dom'
import MaterialUISwitch from '../common/muiSwitch/Switch'

const Header = props => {
	const isSmallScreen = useMediaQuery({ query: '(max-width: 480px)' })
	const theme = useSelector(state => state.environment.theme)
	const dispatch = useDispatch()

	const forceToggleTheme = () => {
		dispatch(toggleTheme())
	}
	return (
		<header className={s.headerContainer} id={theme}>
			{isSmallScreen && props.isAuth ? (
				<AccountMenu
					className={theme === 'dark' ? `${s.darkImg} ${s.img}` : s.img}
				/>
			) : (
				<img
					className={theme === 'dark' ? `${s.darkImg} ${s.img}` : s.img}
					src={logo}
					alt='No img'
				></img>
			)}

			{isSmallScreen ? (
				<MaterialUISwitch onChange={() => {
					forceToggleTheme()
				}} />
			) : (
				<ThemeSwitch
					handleChange={forceToggleTheme}
					checked={theme === 'light'}
					className={s.themeSwitch}
				/>
			)}

			{props.isAuth ? (
				<>
					<div className={s.loginContainer}>
						<span className={s.loginSpan}>{props.login}</span>
					</div>
					<div className={s.logoutContainer} onClick={props.logout}>
						<div
							className={
								theme === 'light'
									? s.logoutContainerButtonLight
									: s.logoutContainerButton
							}
							onClick={props.logout}
						>
							<span className={s.logoutSpan}>Logout</span>
						</div>
					</div>
				</>
			) : (
				<div className={s.loginContainer}>
					<span ><NavLink to={'/login'} className={theme === 'light' ? s.loginWordLight : s.loginWord}>Login</NavLink></span>
				</div>
			)}
		</header>
	)
}

export default Header
