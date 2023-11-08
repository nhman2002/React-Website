import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from 'react-router-dom';    // in react-router-dom v6, Switch turn to Routes, need to update that info
import { Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact/>
      </Routes>
    </Router>
    
  );
}

export default App;
