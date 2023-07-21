import {
	combineReducers,
	legacy_createStore as createStore,
	applyMiddleware
} from 'redux'
import dialogPageReducer from './dialogPageReducer'
import profileReducer from './profileReducer'
import friendsReducer from './friendsReducer'
import usersReducer from './usersPageReducer'
import authReducer from './authReducer'
import thunk from 'redux-thunk'

let reducers = combineReducers({
	profilePage: profileReducer,
	dialogPage: dialogPageReducer,
	friendsPage: friendsReducer,
	usersPage: usersReducer,
	auth: authReducer
})

let store = createStore(reducers, applyMiddleware(thunk))

window.store = store

export default store
