import { combineReducers, legacy_createStore as createStore } from "redux";
import dialogPageReducer from "./dialogPageReducer";
import profileReducer from "./profileReducer";
import friendsReducer from "./friendsReducer";



let reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogPageReducer,
    friendsPage: friendsReducer
});


let store = createStore(reducers);

export default store;