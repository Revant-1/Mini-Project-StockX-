import React, { useState, useEffect } from 'react';
import './style/portfolio.css';
import axios from 'axios';

const Tracker = () => {
  const [name, setName] = useState('');

  useEffect(() => {
    // Fetch data from the backend
    axios.get('http://localhost:3001/portfolio-performance-tracking')
      .then(response => {
        setName(response.data.name);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h1>Testing Backend Connection : {name}</h1>
    </div>
  );
};

export default Tracker;
