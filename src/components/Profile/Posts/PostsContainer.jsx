import { compose } from 'redux'
import { addPost } from '../../../redux/profileReducer'
import Posts from './Posts'
import { connect } from 'react-redux'

let mapStateToProps = state => {
	return {
		profilePage: state.profilePage
	}
}

const PostsContainer = compose(connect(mapStateToProps, { addPost }))(Posts)

export default PostsContainer
