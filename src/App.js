import React, { useEffect } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Settings from './components/Settings/Settings'
import DialogsContainer from './components/Dialogs/DialogsContainer'
import SideBarContainer from './components/SideBar/SideBarContainer'
import UsersContainer from './components/Users/UsersContainer'
import ProfileContainer from './components/Profile/ProfileContainer'
import HeaderContainer from './components/Header/HeaderContainer'
import Login from './components/Login/login'
import MusicContainer from './components/Music/MusicContainer'
import { connect, useSelector } from 'react-redux'
import { InitializeApp } from './redux/appReducer'
import Preloader from './components/common/Preloader/Preloader'

const App = props => {
	useEffect(() => {
		props.InitializeApp()
		document.body.id = theme
	}, [props.theme])

	const theme = useSelector(state => state.environment.theme)

	if (!props.initialized) return <Preloader />

	return (
		<div className='wrapper' id={theme}>
			<HeaderContainer id={theme} />
			<div className='main-content-wrapper'>
				<SideBarContainer />
				<Routes>
					<Route path='/' element={<Navigate to='/profile' />} />
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

const mapStateToProps = state => ({
	initialized: state.app.initialized,
	theme: state.environment.theme
})

export default connect(mapStateToProps, { InitializeApp })(App)
