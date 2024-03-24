import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Footer from './components/Footer';
import './components/Style.css';
import Home from './components/Home';
import Survey from './components/Survey';
import Feed from './components/Feed';
import UserList from './components/UserList';
import { useState } from 'react';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true)
  }

  const handleLogout = () => {
    setLoggedIn(false)
  }

  return (
    <div>
      <Router>
        <Header loggedIn={loggedIn} handleLogout={handleLogout}/>
        <Routes>
          <Route path="/login" element={<Login handleLogin={handleLogin}/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/Home" element={<Home/>}/>
          <Route path="/survey" element={<Survey/>}/>
          <Route path="/feed" element={<Feed/>}/>
          <Route path="/users" element={<UserList />}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
