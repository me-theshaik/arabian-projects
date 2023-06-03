import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' Component={Home}/>
        <Route path='/projects' Component={Projects}/>
        <Route path='/about' Component={About}/>
        <Route path='/contact' Component={Contact}/>
      </Routes>
    </Router>
  );
}

export default App;
