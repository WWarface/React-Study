import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import Music from './Music'
import { connect } from 'react-redux'

let mapStateToProps = state => {
	return {}
}

const MusicContainer = withAuthRedirect(connect(mapStateToProps)(Music))

export default MusicContainer
