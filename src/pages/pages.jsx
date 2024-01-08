import React from 'react';
import SearchResult from './searched'; // Import the correct component
import Home from './Home';
import { Route, Routes } from 'react-router-dom';
import News from './News';
import Tracker from './Tracker';
import Prediction from './Prediction';

function Pages() {
  return (
    <Routes>
         <Route path="*" element={<Home />} />
      <Route path="/searched/:search" element={<SearchResult />} />
      <Route path="/portfolio-performance-tracking" element={<Tracker />} />
      <Route path="/financial-news" element={<News />} />
      <Route path="/stock-price-trend-prediction" element={<Prediction />} />
    </Routes>
  );
}

export default Pages;
