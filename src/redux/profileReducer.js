const ADD_POST = "ADD_POST";
const UPDATE_TEXT_POSTS = "UPDATE_TEXT_POSTS";

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
    newPostMessage: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let copyState = { ...state };
            copyState.posts = [...state.posts]

            let post = {
                message: copyState.newPostMessage,
                id: copyState.posts.length + 1
            };

            copyState.posts.push(post);

            copyState.newPostMessage = '';

            return copyState;
        }
        case UPDATE_TEXT_POSTS: {
            let copyState = { ...state };

            if (action.newText === undefined) alert("text is undefined")
                copyState.newPostMessage = action.newText;
            return copyState;
        }
        default:
            return state;
    }

}

export const updatePostTextActionCreator = (text) => ({ type: UPDATE_TEXT_POSTS, newText: text });

export const addPostActionCreator = () => ({ type: ADD_POST });


export default profileReducer;

