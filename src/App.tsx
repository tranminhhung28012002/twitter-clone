import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './client/login/Login'; 
import Homepage from './client/homepage';
import './App.css';
import Profile from './client/profile';
import ProfilePage from './client/profilePage';
import Explore from './client/Search';

const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/Explore" element={<Explore />} />
        <Route path="/profilePage" element={<ProfilePage/>}/>
      </Routes>
    </div>
  );
};

export default App;
