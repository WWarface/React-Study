import React from 'react'
import styles from './SingleInfo.module.css'

const SingleInfo = props => {
	return (
		<div className={styles.infoHolder}>
			<img className={styles.icon} src={props.icon} alt='no img' />
			{props.info}
		</div>
	)
}

export default SingleInfo
