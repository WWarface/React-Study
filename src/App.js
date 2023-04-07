import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Music from './components/Music/Music';
import News from './components/News/News';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Settings';
import SideBar from './components/SideBar/SideBar';

const App = (props) => {  
debugger
  return (
      <div className='wrapper'>
        <Header />
        <div className='main-content-wrapper'>
          <SideBar  state={props.store.getState().friendsPage}/>
          <Routes>
            <Route path='/profile' element={<Profile profilePage={props.store.getState().profilePage} />} />
            <Route path='/dialogs/*' element={<Dialogs dialogPage={props.store.getState().dialogPage}             
            dispatch={props.store.dispatch.bind(props.store)}/>} />
            <Route path='/news' element={<News />} />
            <Route path='/music' element={<Music />} />
            <Route path='/settings' element={<Settings />} />
          </Routes>
        </div>
      </div>     

  );  
}


export default App;
