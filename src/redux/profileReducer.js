const ADD_POST = "ADD_POST";
const UPDATE_TEXT_POSTS = "UPDATE_TEXT_POSTS";
const SET_PROFILE_INFO = "SET_PROFILE_INFO";

let initialState = {
    posts: [
        {
            message: "Ya segodnya seriy",
            id: "0"
        }, {
            message: "ee kak rulit",
            id: "1"
        }, {
            message: "a zalubku ce zroblu a zalubky",
            id: "2"
        }
    ],
    newPostMessage: '',
    profileInfo: null
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {            
            return {
                ...state,
                posts: [...state.posts,{message: state.newPostMessage,id: state.posts.length + 1}],
                newPostMessage: ''
            };
        }
        case UPDATE_TEXT_POSTS: {     
            return {
                ...state,
                newPostMessage: action.newText
            };
        }
        case SET_PROFILE_INFO: {     
            return {
                ...state,
                profileInfo: action.profileInfo
            };
        }
        default:
            return state;
    }

}

export const updatePostTextActionCreator = (text) => ({ type: UPDATE_TEXT_POSTS, newText: text });

export const addPostActionCreator = () => ({ type: ADD_POST });

export const setProfileInfo = (profileInfo) => ({ type: SET_PROFILE_INFO, profileInfo});


export default profileReducer;

