import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';

const App = () => {
  return (
    <div>
      <Navigation />
      <Home />
      <About />
      <Projects />
    </div>
  );
};

export default App;
