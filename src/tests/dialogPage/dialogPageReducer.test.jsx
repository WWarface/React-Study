import dialogPageReducer, {
	addDialog,
	addMessage
} from '../../redux/dialogPageReducer'

let state = {
	dialogs: [
		{
			id: '0',
			name: 'Hrtntrue',
			url: 'https://samequizy.pl/wp-content/uploads/2018/03/filing_images_6ef20837c84b.jpeg',
			isActive: true
		},
		{
			id: '1',
			name: 'Slava',
			url: 'https://pbs.twimg.com/media/El_euloXEAEhl4X.jpg:large',
			isActive: false
		},
		{
			id: '2',
			name: 'Ivakhiv1',
			url: 'https://preview.redd.it/this-looks-like-irl-uncle-kesseli-v0-ye2ppfghqmj81.jpg?auto=webp&s=bdd454d4df1340c951c1401f852c4b972d92aae3',
			isActive: false
		},
		{
			id: '3',
			name: 'Custom4mo',
			url: 'https://www.racedepartment.com/attachments/fleetari3-png.430600/',
			isActive: false
		}
	],
	messages: [
		{
			message: 'Hi everyone!',
			id: '0'
		},
		{
			message: 'Hi im Alex!',
			id: '1'
		},
		{
			message: 'I like sushi!!!!!',
			id: '2'
		}
	]
}

test('adding new message', () => {
	let action = addMessage('new new new Message!')

	let newState = dialogPageReducer(state, action)

	expect(newState.messages.length).toBe(4)
})

test('adding new dialog', () => {
	let action = addDialog('Maks')

	let newState = dialogPageReducer(state, action)

	expect(newState.dialogs.length).toBe(5)
})
