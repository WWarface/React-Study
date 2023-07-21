import { updateMessageText, addMessage } from '../../redux/dialogPageReducer'
import Dialogs from './Dialogs'
import { connect } from 'react-redux'

let mapStateToProps = state => {
	return {
		dialogPage: state.dialogPage
	}
}

const DialogsContainer = connect(mapStateToProps, {
	updateMessageText,
	addMessage
})(Dialogs)

export default DialogsContainer
