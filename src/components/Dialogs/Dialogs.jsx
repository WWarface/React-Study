import React from 'react'
import Dialog from './Dialog/Dialog'
import s from './Dialogs.module.css'
import Message from './Message/Message.jsx'
import { Field, reduxForm, reset } from 'redux-form'
import { useDispatch, useSelector } from 'react-redux'

const Dialogs = props => {
	const theme = useSelector(state => state.environment.theme)

	const dispatch = useDispatch()
	let dialogsElements = props.dialogPage.dialogs.map(d => (
		<Dialog isActive={d.isActive} name={d.name} url={d.url} key={d.id} />
	))

	let messageElements = props.dialogPage.messages.map(m => (
		<Message message={m.message} key={m.id} />
	))

	let AddPost = formData => {
		props.addMessage(formData.textArea)

		dispatch(reset('dialogsForm'))
	}

	return (
		<div className={s.wrapper}>
			<div className={s.dialogs}>{dialogsElements}</div>
			<div className={s.messages}>
				{messageElements}
				<div className={s.submissionContainer}>
					<DialogsReduxForm theme={theme} onSubmit={AddPost} />
				</div>
			</div>
		</div>
	)
}

const DialogsForm = props => {
	return (
		<form onSubmit={props.handleSubmit}>
			<div className={s.inputContainer}>
				<Field name='textArea' component='input' className={props.theme === 'light' ? s.textAreaLight : s.textArea} />
				<button className={s.textAreaButton}>Send</button>
			</div>
		</form>
	)
}

const DialogsReduxForm = reduxForm({
	form: 'dialogsForm'
})(DialogsForm)

export default Dialogs
