import { addPostActionCreator, updatePostTextActionCreator } from '../../../redux/profileReducer';
import Posts from './Posts';
import {connect} from "react-redux"

let mapStateToProps =(state)=>{
    return {
        profilePage: state.profilePage
    }
}

let mapDispatchToProps = (dispatch) => {
    return{
        updateText: (text) =>{
            dispatch(updatePostTextActionCreator(text));
        },
        addPost: () => {
            dispatch(addPostActionCreator());
        }
    }
}

const PostsContainer = connect(mapStateToProps,mapDispatchToProps)(Posts);

export default PostsContainer