import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { setUserLoginData } from '../../redux/authReducer';
import Header from './Header';



class HeaderContainer extends React.Component{
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials:true
        }).then(response => {
       
            let {id,login,email}=response.data.data;
            this.props.setUserLoginData(id,login,email);
            
        });
    }

    render() {
        return (
            <Header {...this.props}/>            
        );
        
    }
    
}



let mapStateToProps= (state) => ({
    isAuth: state.auth.isLogged,
    login: state.auth.login
});

export default connect(mapStateToProps, {setUserLoginData})(HeaderContainer);