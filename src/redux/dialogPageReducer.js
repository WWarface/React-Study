const ADD_MESSAGE = "ADD_MESSAGE";
const UPDATE_MESSAGE_TEXT = "UPDATE_MESSAGE_TEXT";

const dialogPageReducer =(state,action)=>{
    switch (action.type){
        case ADD_MESSAGE:
            let message = {
                message: state.newMessageText,
                id: state.messages.length + 1
            };
        
            state.messages.push(message);
        
            state.newMessageText = '';

            return state;
        case UPDATE_MESSAGE_TEXT:
            if(action.newText === undefined) alert("text is undefined")
            state.newMessageText = action.newText;
            return state;
        default:
            return state;        
    }
    
}


export const updateMessageTextActionCreator = (text) => ({type: UPDATE_MESSAGE_TEXT, newText: text});

export const addMessageActionCreator = () => ({type: ADD_MESSAGE});

export default dialogPageReducer;

