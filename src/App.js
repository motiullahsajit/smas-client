import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import ReactGa from 'react-ga';

import HomeScreen from './components/HomeScreen/HomeScreen';
import Auth from './components/Auth/Auth';
import SeriesPage from './components/SeriesPage/SeriesPage';
import Profile from './components/Profile/Profile';
import Subscription from './components/Subscription/Subscription';
import Page404 from './components/Page404/Page404';
import RequireAuth from './components/RequireAuth/RequireAuth';

import './App.css';

function App() {
  // useEffect(() => {
  //   ReactGa.initialize('G-L9GLGJKDW5')
  //   ReactGa.pageview('/')
  // }, [])

  return (
    <div className="app">
      <Router>
        <Routes>
          <Route exact path="/" element={
            <RequireAuth>
              <HomeScreen />
            </RequireAuth>
          } />
          <Route exact path="/home" element={
            <RequireAuth>
              <HomeScreen />
            </RequireAuth>
          } />
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
