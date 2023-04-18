import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Music from './components/Music/Music';
import News from './components/News/News';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Settings';
import SideBar from './components/SideBar/SideBar';
import DialogsContainer from './components/Dialogs/DialogsContainer';

const App = (props) => { 
  debugger
  return (
      <div className='wrapper'>
        <Header />
        <div className='main-content-wrapper'>
          <SideBar  friendsPage={props.store.getState().friendsPage}/>
          <Routes>
            <Route path='/profile' element={<Profile store={props.store} />}/>
            <Route path='/dialogs/*' element={<DialogsContainer store={props.store}/>} />
            <Route path='/news' element={<News />} />
            <Route path='/music' element={<Music />} />
            <Route path='/settings' element={<Settings />} />
          </Routes>
        </div>
      </div>     

  );  
}


export default App;
