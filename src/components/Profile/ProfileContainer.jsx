import React from 'react';
import axios from 'axios';
import Profile from './Profile';
import { connect } from 'react-redux';
import { setProfileInfo } from '../../redux/profileReducer';

class ProfileContainer extends React.Component{
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
            
            this.props.setProfileInfo(response.data);
            
        });
    }

    render() {
        return (
            <Profile {...this.props} />
        );
        
    }
    
}

let mapStateToProps= (state) => {
    return{
        profileInfo:state.profilePage.profileInfo
    }
};

export default connect(mapStateToProps, {setProfileInfo})(ProfileContainer);