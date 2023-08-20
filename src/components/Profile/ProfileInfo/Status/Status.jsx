import React, { useEffect, useState } from 'react'

import edit from '../../../../assets/images/edit.png'
import done from '../../../../assets/images/done.png'

import s from './Status.module.css'

export const StatusHooks = props => {
	let [status, setStatus] = useState('')
	let [editMode, setEditMode] = useState(false)

	useEffect(() => {
		setStatus(props.status)
	}, [props.status])

	let editModeEnable = () => {
		console.log(this)
		setEditMode(true)
	}

	let editModeDisable = () => {
		setEditMode(false)
		let statusObj = {
			status: status
		}
		props.updateStatus(statusObj)
	}

	return (
		<>
			<div className={s.status}>
				{editMode ? (
					<>
						<div>
							<input
								type='text'
								value={status}
								autoFocus={true}
								className={s.input}
								onChange={e => setStatus(e.currentTarget.value)}
							/>
						</div>
						<div className={s.inputContainer}>
							<button onClick={editModeDisable} className={s.buttonSend}>
								<img src={done} alt='No img :(' className={s.editPicture} />
							</button>
						</div>
					</>
				) : (
					<>
						<span>{props.status === '' ? 'null' : props.status}</span>
						<div className={s.editContainer}>
							<button onClick={editModeEnable} className={s.buttonEdit}>
								<img src={edit} alt='No img :(' className={s.editPicture} />
							</button>
						</div>
					</>
				)}
			</div>
		</>
	)
}

export default StatusHooks
