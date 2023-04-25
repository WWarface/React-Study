import { updateMessageTextActionCreator, addMessageActionCreator } from '../../redux/dialogPageReducer';
import Dialogs from './Dialogs';
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        dialogPage: state.dialogPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateText: (text) => {
            dispatch(updateMessageTextActionCreator(text));
        },
        addPost: () => {
            dispatch(addMessageActionCreator());
        }
    }
}

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);

export default DialogsContainer;