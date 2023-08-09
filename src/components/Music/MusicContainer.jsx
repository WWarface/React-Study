import { compose } from 'redux'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import Music from './Music'
import { connect } from 'react-redux'

let mapStateToProps = state => {
	return {}
}

export default compose(withAuthRedirect, connect(mapStateToProps))(Music)
