export const requiredField = value => {
	if (!value || value === '') return 'This field is required'
	return null
}

export const maxLengthField = maxLength => value => {
	if (value.length > maxLength) return `maximum field length is ${maxLength}`
}
