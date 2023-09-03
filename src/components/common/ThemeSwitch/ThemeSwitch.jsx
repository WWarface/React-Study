import React from 'react'
import Switch from 'react-switch'
import s from './ThemeSwitch.module.css'
import { useMediaQuery } from 'react-responsive'

const ThemeSwitch = ({ checked, handleChange = null }) => {
	const isSmallScreen = useMediaQuery({ query: '(max-width: 768px)' })
	const switchWidth = isSmallScreen ? 40 : 60
	const switchHeight = isSmallScreen ? 24 : 32
	const handleDiameter = isSmallScreen ? 14 : 20

	return (
		<div className={s.switchWrapper}>
			<label>
				<Switch
					onChange={handleChange}
					checked={checked}
					checkedHandleIcon={<Sun />}
					uncheckedHandleIcon={<Moon />}
					className={s.Switch}
					height={switchHeight}
					width={switchWidth}
					onHandleColor={'#f0e9ef'}
					onColor={'#f0e9ef'}
					offColor={'#aaa7a4'}
					offHandleColor={'#aaa7a4'}
					uncheckedIcon={false}
					checkedIcon={false}
					handleDiameter={handleDiameter}
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
