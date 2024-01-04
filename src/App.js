import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; // Import BrowserRouter
import './App.css';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Projects from './components/Projects';
import Play from './components/Play';
import About from './components/About';

function App() {
  return (
    <BrowserRouter> {/* Wrap your app with BrowserRouter */}
      <div className='gradient-background'> {/* Add the gradient-background class */}
        <div className='App'>
          <Navigation/>
          <Routes>
            <Route path="/" element={<Home />} /> 
            <Route path="/projects" element={<Projects />} />
            <Route path="/play" element={<Play />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
        </div>
    </BrowserRouter>
  );
}

export default App;
