import React from 'react'
import Post from './Post/Post'
import s from './Posts.module.css'
import { Field, reduxForm } from 'redux-form'
import { FormControls } from '../../common/FormControls/FormControls'
import { requiredField } from '../../../utils/validators'

const Posts = React.memo(
	props => {
		console.log(props.profilePage)

		let postsElements = props.profilePage.posts.map(p => (
			<Post
				key={p.id}
				message={p.message}
				profilePhoto={
					props.profilePage.profileInfo
						? props.profilePage.profileInfo.photos.small
						: null
				}
			/>
		))

		let addPost = formData => {
			props.addPost(formData.textArea)
		}

		return (
			<div className={s.postsContainer}>
				<h3 className={s.text}>My posts</h3>
				<PostsReduxForm onSubmit={addPost} />
				{postsElements}
			</div>
		)
	},
	(props, nextProps) => {
		return (
			props.profilePage.posts === nextProps.profilePage.posts &&
			props.profilePage.profileInfo === nextProps.profilePage.profileInfo
		)
	}
)

const PostsForm = props => {
	return (
		<form onSubmit={props.handleSubmit} className={s.submissionContainer}>
			<Field
				name='textArea'
				component={FormControls}
				child='input'
				validate={requiredField}
				className={s.textArea}
			/>
			<button className={s.textAreaButton}>Send Message</button>
		</form>
	)
}

const PostsReduxForm = reduxForm({
	form: 'postsForm'
})(PostsForm)

export default Posts
