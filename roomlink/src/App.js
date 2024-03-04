import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Footer from './components/Footer';
import './components/Style.css';
import Home from './components/Home';

function App() {
  return (
    <div>
      <Router>
        <Header/>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/SignUp" element={<SignUp/>}/>
        </Routes>
        <Home/>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
