import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Settings from './components/Settings/Settings'
import DialogsContainer from './components/Dialogs/DialogsContainer'
import SideBarContainer from './components/SideBar/SideBarContainer'
import UsersContainer from './components/Users/UsersContainer'
import ProfileContainer from './components/Profile/ProfileContainer'
import HeaderContainer from './components/Header/HeaderContainer'
import Login from './components/Login/login'
import MusicContainer from './components/Music/MusicContainer'

const App = props => {
	return (
		<div className='wrapper'>
			<HeaderContainer />
			<div className='main-content-wrapper'>
				<SideBarContainer />
				<Routes>
					<Route path='/profile/:userId?' element={<ProfileContainer />} />
					<Route path='/dialogs/*' element={<DialogsContainer />} />
					<Route path='/users' element={<UsersContainer />} />
					<Route path='/music' element={<MusicContainer />} />
					<Route path='/settings' element={<Settings />} />
					<Route path='/login' element={<Login />} />
				</Routes>
			</div>
		</div>
	)
}

export default App
