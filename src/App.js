import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HomeScreen from './components/HomeScreen/HomeScreen';
import Auth from './components/Auth/Auth';
import SeriesPage from './components/SeriesPage/SeriesPage';
import Profile from './components/Profile/Profile';
import Subscription from './components/Subscription/Subscription';

import './App.css';
import Page404 from './components/Page404/Page404';

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route exact path="/" element={<HomeScreen />} />
          <Route path="/login" element={<Auth />} />
          <Route path="/series/:type/:name" element={<SeriesPage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/subscription" element={<Subscription />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
