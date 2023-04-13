const ADD_MESSAGE = "ADD_MESSAGE";
const UPDATE_MESSAGE_TEXT = "UPDATE_MESSAGE_TEXT";

const ADD_POST = "ADD_POST";
const UPDATE_TEXT_POSTS = "UPDATE_TEXT_POSTS";

let store = {
    _state: {
        profilePage: {
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
        },

        dialogPage: {
            dialogs: [
                {
                    id: '0',
                    name: 'Hrtntrue',
                    url: 'https://samequizy.pl/wp-content/uploads/2018/03/filing_images_6ef20837c84b.jpeg',
                    isActive: true
                }, {
                    id: '1',
                    name: 'Slava',
                    url: 'https://pbs.twimg.com/media/El_euloXEAEhl4X.jpg:large',
                    isActive: false
                }, {
                    id: '2',
                    name: 'Ivakhiv1',
                    url: 'https://preview.redd.it/this-looks-like-irl-uncle-kesseli-v0-ye2ppfghqmj81.jpg?auto=webp&s=bdd454d4df1340c951c1401f852c4b972d92aae3',
                    isActive: false
                }, {
                    id: '3',
                    name: 'Custom4mo',
                    url: 'https://www.racedepartment.com/attachments/fleetari3-png.430600/',
                    isActive: false
                }
            ],

            messages: [
                {
                    message: "Hi negros!",
                    id: "0"
                }, {
                    message: "Hi negros AXE!",
                    id: "1"
                }, {
                    message: "Ubili nekra!",
                    id: "2"
                }
            ],

            newMessageText: 'type text here'
        },


        friendsPage: {
            friendDialogs: [
                {
                    id: '0',
                    name: 'Hrtntrue',
                    url: 'https://samequizy.pl/wp-content/uploads/2018/03/filing_images_6ef20837c84b.jpeg'
                },
                {
                    id: '1',
                    name: 'Slava',
                    url: 'https://pbs.twimg.com/media/El_euloXEAEhl4X.jpg:large'
                },
                {
                    id: '2',
                    name: 'Ivakhiv1',
                    url: 'https://preview.redd.it/this-looks-like-irl-uncle-kesseli-v0-ye2ppfghqmj81.jpg?auto=webp&s=bdd454d4df1340c951c1401f852c4b972d92aae3'
                },
                {
                    id: '3',
                    name: 'Kasha',
                    url: 'https://i.pinimg.com/280x280_RS/87/3d/46/873d46ee85823fd0da288476969b6fbc.jpg'
                }, {
                    id: '4',
                    name: 'Masha',
                    url: 'https://assets1.ignimgs.com/2018/06/21/hollowknight-1280-1529623462572.jpg'
                }, {
                    id: '5',
                    name: 'Natasha',
                    url: 'https://preview.redd.it/y4delam4f5t51.jpg?width=1920&format=pjpg&auto=webp&s=36ffc9624bbcc62f3ae265954bc640eadf7aee73'
                }, {
                    id: '6',
                    name: 'Omega',
                    url: 'https://i.redd.it/39o99a40cln61.jpg'
                }
            ]
        }
    },

    _callSubscriber() {
        console.log("no handler");
    },

    // addMessage() {
    //     let message = {
    //         message: this._state.dialogPage.newMessageText,
    //         id: this._state.dialogPage.messages.length + 1
    //     };

    //     this._state.dialogPage.messages.push(message);

    //     this._state.dialogPage.newMessageText = '';

    //     this._callSubscriber(this);
    // },

    // updateMessageText(newText){
    //     this._state.dialogPage.newMessageText=newText;
    //     this._callSubscriber(this);
    // },

    dispatch(action) {
        if (action.type === ADD_MESSAGE) {
            let message = {
                message: this._state.dialogPage.newMessageText,
                id: this._state.dialogPage.messages.length + 1
            };

            this._state.dialogPage.messages.push(message);

            this._state.dialogPage.newMessageText = '';

            this._callSubscriber(this);
        } else if (action.type === UPDATE_MESSAGE_TEXT) {
            if(action.newText === undefined) alert("text is undefined")
            this._state.dialogPage.newMessageText = action.newText;
            this._callSubscriber(this); // _callSubscriber це по суті RerenderEntireTree(state);
        }else if(action.type === ADD_POST){
            let post = {
                message: this._state.profilePage.newPostMessage,
                id: this._state.profilePage.posts.length + 1
            };

            this._state.profilePage.posts.push(post);

            this._state.profilePage.newPostMessage = '';

            this._callSubscriber(this);
        }else if(action.type === UPDATE_TEXT_POSTS){
            if(action.newText === undefined) alert("text is undefined")
            this._state.profilePage.newPostMessage = action.newText;
            this._callSubscriber(this);
        }
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    getState() {
        return this._state;
    }

}

export const updateMessageTextActionCreator = (text) => ({type: UPDATE_MESSAGE_TEXT, newText: text});

export const addMessageActionCreator = () => ({type: ADD_MESSAGE});

export const updatePostTextActionCreator = (text) => ({type: UPDATE_TEXT_POSTS, newText: text});

export const addPostActionCreator = () => ({type: ADD_POST});



window.store = store;


export default store
