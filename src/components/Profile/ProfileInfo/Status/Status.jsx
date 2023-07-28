import React from 'react'

import edit from '../../../../assets/images/edit.png'
import done from '../../../../assets/images/done.png'

import s from './Status.module.css'

export class Status extends React.Component {
	state = {
		editMode: false,
		status: this.props.status
	}

	editModeEnable = () => {
		console.log(this)
		this.setState({
			editMode: true
		})
	}

	editModeDisable = () => {
		this.setState({
			editMode: false
		})
		let status = {
			status: this.state.status
		}
		this.props.updateStatus(status)
	}

	updateStatus = e => {
		const text = e.currentTarget.value

		this.setState({
			status: text
		})
	}

	render() {
		return (
			<>
				<div className={s.status}>
					{this.state.editMode ? (
						<>
							<div onBlur={this.editModeDisable}>
								<input
									type='text'
									value={this.state.status}
									autoFocus={true}
									className={s.input}
									onChange={this.updateStatus}
								/>
							</div>
							<div className={s.inputContainer}>
								<button onClick={this.editModeDisable} className={s.buttonSend}>
									<img src={done} alt='No img :(' className={s.editPicture} />
								</button>
							</div>
						</>
					) : (
						<>
							<span>
								{this.props.status === '' ? 'null' : this.props.status}
							</span>
							<div className={s.editContainer}>
								<button onClick={this.editModeEnable} className={s.buttonEdit}>
									<img src={edit} alt='No img :(' className={s.editPicture} />
								</button>
							</div>
						</>
					)}
				</div>
			</>
		)
	}
}

export default Status
