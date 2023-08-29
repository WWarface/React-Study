import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Dialog.module.css'
import { useSelector } from 'react-redux'

const Dialog = props => {
	const theme = useSelector(state => state.environment.theme)

	return (
		<NavLink to={'/dialogs/' + props.name} className={s.linkName}>
			<div className={s.dialog} id={theme}>
				<div className={s.avatarContainer}>
					<img className={s.avatar} src={props.url} alt='not' />
				</div>
				<div className={s.name}>
					<span className={s.textName}>{props.name}</span>
				</div>
			</div>
		</NavLink>
	)
}

export default Dialog
