import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import GameRoomPage from './pages/GameRoomPage';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Router basename="/portfolio-site">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/game-room-page" element={<GameRoomPage />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
