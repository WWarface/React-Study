import React from 'react'
import Dialog from './Dialog/Dialog'
import s from './Dialogs.module.css'
import Message from './Message/Message.jsx'
import { Field, reduxForm } from 'redux-form'

const Dialogs = props => {
	let dialogsElements = props.dialogPage.dialogs.map(d => (
		<Dialog isActive={d.isActive} name={d.name} url={d.url} key={d.id} />
	))

	let messageElements = props.dialogPage.messages.map(m => (
		<Message message={m.message} key={m.id} />
	))

	let AddPost = formData => {
		props.addMessage(formData.textArea)
	}

	return (
		<div className={s.wrapper}>
			<div className={s.dialogs}>{dialogsElements}</div>
			<div className={s.messages}>
				{messageElements}
				<div className={s.submissionContainer}>
					<DialogsReduxForm onSubmit={AddPost} />
				</div>
			</div>
		</div>
	)
}

const DialogsForm = props => {
	return (
		<form onSubmit={props.handleSubmit}>
			<Field name='textArea' component='textarea' className={s.textArea} />
			<button className={s.textAreaButton}>Send Message</button>
		</form>
	)
}

const DialogsReduxForm = reduxForm({
	form: 'dialogsForm'
})(DialogsForm)

export default Dialogs
