const ADD_MESSAGE = 'ADD_MESSAGE'

let initialState = {
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
			message: 'Hi negros!',
			id: '0'
		},
		{
			message: 'Hi negros AXE!',
			id: '1'
		},
		{
			message: 'Ubili nekra!',
			id: '2'
		}
	]
}

const dialogPageReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_MESSAGE: {
			return {
				...state,
				newMessageText: '',
				messages: [
					...state.messages,
					{ message: action.messageText, id: state.messages.length + 1 }
				]
			}
		}
		default:
			return state
	}
}

export const addMessage = messageText => ({ type: ADD_MESSAGE, messageText })

export default dialogPageReducer
