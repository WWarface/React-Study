const ADD_MESSAGE = "ADD_MESSAGE";
const UPDATE_MESSAGE_TEXT = "UPDATE_MESSAGE_TEXT";

let initialState = {
    dialogs: [
        {
            id: '0',
            name: 'Hrtntrue',
            url: 'https://samequizy.pl/wp-content/uploads/2018/03/filing_images_6ef20837c84b.jpeg',
            isActive: true
        }, {
            id: '1',
            name: 'Slava',
            url: 'https://pbs.twimg.com/media/El_euloXEAEhl4X.jpg:large',
            isActive: false
        }, {
            id: '2',
            name: 'Ivakhiv1',
            url: 'https://preview.redd.it/this-looks-like-irl-uncle-kesseli-v0-ye2ppfghqmj81.jpg?auto=webp&s=bdd454d4df1340c951c1401f852c4b972d92aae3',
            isActive: false
        }, {
            id: '3',
            name: 'Custom4mo',
            url: 'https://www.racedepartment.com/attachments/fleetari3-png.430600/',
            isActive: false
        }
    ],

    messages: [
        {
            message: "Hi negros!",
            id: "0"
        }, {
            message: "Hi negros AXE!",
            id: "1"
        }, {
            message: "Ubili nekra!",
            id: "2"
        }
    ],

    newMessageText: 'type text here'
}

const dialogPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: let message = {
                message: state.newMessageText,
                id: state.messages.length + 1
            };

            state.messages.push(message);

            state.newMessageText = '';

            return state;
        case UPDATE_MESSAGE_TEXT: if (action.newText === undefined) 
                alert("text is undefined")
            
            state.newMessageText = action.newText;
            return state;
        default:
            return state;
    }

}


export const updateMessageTextActionCreator = (text) => ({type: UPDATE_MESSAGE_TEXT, newText: text});

export const addMessageActionCreator = () => ({type: ADD_MESSAGE});

export default dialogPageReducer;