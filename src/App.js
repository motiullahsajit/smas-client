import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeScreen from './components/HomeScreen/HomeScreen';
import Auth from './components/Auth/Auth';

import './App.css';
import SeriesPage from './components/SeriesPage/SeriesPage';

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route exact path="/" element={<HomeScreen />} />
          <Route path="/login" element={<Auth />} />
          <Route path="/series/:type/:name" element={<SeriesPage />} />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
