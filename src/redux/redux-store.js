import {
	combineReducers,
	legacy_createStore as createStore,
	applyMiddleware,
	compose
} from 'redux'
import dialogPageReducer from './dialogPageReducer'
import profileReducer from './profileReducer'
import friendsReducer from './friendsReducer'
import usersReducer from './usersPageReducer'
import authReducer from './authReducer'
import thunk from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'
import appReducer from './appReducer'
import environmentReducer from './environmentReducer'

let reducers = combineReducers({
	profilePage: profileReducer,
	dialogPage: dialogPageReducer,
	friendsPage: friendsReducer,
	usersPage: usersReducer,
	auth: authReducer,
	app: appReducer,
	environment: environmentReducer,
	form: formReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)))

window.store = store

export default store
