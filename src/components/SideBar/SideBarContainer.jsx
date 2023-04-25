import SideBar from './SideBar';
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        friendsPage: state.friendsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {};
}

const SideBarContainer = connect(mapStateToProps)(SideBar);

export default SideBarContainer;