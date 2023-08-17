import { compose } from 'redux'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import Music from './Music'
import { connect } from 'react-redux'

export default compose(withAuthRedirect, connect({}))(Music)
