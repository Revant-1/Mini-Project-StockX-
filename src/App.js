import React from 'react';
import './App.css';

import { BrowserRouter } from 'react-router-dom';
import Pages from './pages/pages'; // Correct the import path

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;
