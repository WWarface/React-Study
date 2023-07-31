import { compose } from 'redux'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { addMessage } from '../../redux/dialogPageReducer'
import Dialogs from './Dialogs'
import { connect } from 'react-redux'

let mapStateToProps = state => {
	return {
		dialogPage: state.dialogPage
	}
}

export default compose(
	withAuthRedirect,
	connect(mapStateToProps, {
		addMessage
	})
)(Dialogs)
