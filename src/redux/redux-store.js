import { combineReducers, legacy_createStore as createStore } from "redux";
import dialogPageReducer from "./dialogPageReducer";
import profileReducer from "./profileReducer";
import friendsReducer from "./friendsReducer";
import usersReducer from "./usersPageReducer";



let reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogPageReducer,
    friendsPage: friendsReducer,
    usersPage: usersReducer
});


let store = createStore(reducers);

window.store=store;

export default store;