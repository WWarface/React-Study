import React, { useState } from 'react';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import SideBar from './components/SideBar/SideBar';

const App = () => {
  return (
    <div className='wrapper'>
      <Header />
      <div className='main-content-wrapper'>
        <SideBar />
        {/* <Profile /> */}
        <Dialogs />        
      </div>
    </div>
  );
}



export default App;
