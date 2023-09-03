import React, { useEffect, useState } from 'react'
import s from './Post.module.css'

const Post = props => {
	const [picture, setPicture] = useState(null)

	useEffect(() => {
		setPicture(props.profilePhoto)
	}, [props.profilePhoto])
	return (
		<div className={s.sentContainer}>
			{picture ? (
				<div className={s.circleImageBlock}>
					<img src={picture} className={s.circleImage} alt='no img'></img>
				</div>
			) : (
				<div className={s.circle}></div>
			)}
			<p className={s.messageText}>{props.message}</p>
		</div>
	)
}

export default Post
