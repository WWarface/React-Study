import SideBar from './SideBar'
import { connect } from 'react-redux'

let mapStateToProps = state => {
	return {
		friendsPage: state.friendsPage
	}
}

const SideBarContainer = connect(mapStateToProps)(SideBar)

export default SideBarContainer
