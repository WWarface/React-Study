import React from 'react'
import Switch from 'react-switch'
import s from './ThemeSwitch.module.css'

const ThemeSwitch = ({ checked, handleChange = null }) => {


	return (
		<div className={s.switchWrapper}>
			<label>
				<Switch
					onChange={handleChange}
					checked={checked}
					checkedHandleIcon={<Sun />}
					uncheckedHandleIcon={<Moon />}
					className={s.Switch}
					height={32}
					width={60}
					onHandleColor={'#f0e9ef'}
					onColor={'#f0e9ef'}
					offColor={'#aaa7a4'}
					offHandleColor={'#aaa7a4'}
					uncheckedIcon={false}
					checkedIcon={false}
					handleDiameter={20}
				/>
			</label>
		</div>
	)
}

const Sun = () => {
	return (
		<div className={s.LightModeIcon}>
			<label className={s.label}>🌞</label>
		</div>
	)
}

const Moon = () => {
	return (
		<div className={s.LightModeIcon}>
			<label className={s.label}>🌑</label>
		</div>
	)
}
export default ThemeSwitch
