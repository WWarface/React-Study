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
import SideBarContainer from './components/SideBar/SideBarContainer';

const App = (props) => { 
  
  return (
      <div className='wrapper'>
        <Header />
        <div className='main-content-wrapper'>
          <SideBarContainer  />
          <Routes>
            <Route path='/profile' element={<Profile  />}/>
            <Route path='/dialogs/*' element={<DialogsContainer />} />
            <Route path='/news' element={<News />} />
            <Route path='/music' element={<Music />} />
            <Route path='/settings' element={<Settings />} />
          </Routes>
        </div>
      </div>     

  );  
}


export default App;
