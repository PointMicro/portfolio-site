import React from 'react';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Skills from './components/Skills';
import Projects from './components/Projects';
import GameRoom from './components/GameRoom';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Navbar />
      <Intro />
      <Skills />
      <Projects />
      <GameRoom />
      <Footer />
    </div>
  );
};

export default App;
