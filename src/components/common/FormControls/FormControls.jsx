import s from './FormControls.module.css'

export const FormControls = ({ input, meta, ...props }) => {
	let hasError =
		meta.error && meta.touched && (meta.touched || input.value.trim() !== '')
	return (
		<div className={s.formControl}>
			<props.child
				{...input}
				placeholder={props.placeholder}
				className={hasError ? s.error : ''}
				type={props.type}
			/>
			{hasError && <span className={s.errorText}>{meta.error}</span>}
		</div>
	)
}
