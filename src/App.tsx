import React from 'react';
import NavBar from './components/NavBar'
import { Routes, Route, Navigate } from "react-router-dom";
import './App.css';
import AuctionPage from './pages/AuctionPage';
import CreateAuctionsPage from './pages/CreateAuctionsPage';
import LandingPage from './pages/LandingPage';
import RequireAuth from './components/RequireAuth';

const App = () => {

  return (
    <div className='bg-cyan-100'>
      <NavBar/>
      <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route
        path="/auctions"
        element={
          <RequireAuth redirectTo="/">
            <AuctionPage />
          </RequireAuth>
        }
      />
      <Route
        path="/bid"
        element={
          <RequireAuth redirectTo="/">
            <CreateAuctionsPage />
          </RequireAuth>
        }
      />
    </Routes>
    </div>
  );
}



export default App;
