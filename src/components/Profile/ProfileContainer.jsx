import React from 'react';
import axios from 'axios';
import Profile from './Profile';
import { connect } from 'react-redux';
import { setProfileInfo } from '../../redux/profileReducer';
import { withRouter } from './WithRouter';



class ProfileContainer extends React.Component{
    componentDidMount() {
        let userId=this.props.router.params.userId;
        
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+userId).then(response => {
            
            this.props.setProfileInfo(response.data);
            
        });
    }

    render() {
        return (
            <Profile {...this.props} />
        );
        
    }
    
}

let ProfileContainerWithUrl=withRouter(ProfileContainer);

let mapStateToProps= (state) => {
    return{
        profileInfo:state.profilePage.profileInfo
    }
};

export default connect(mapStateToProps, {setProfileInfo})(ProfileContainerWithUrl);