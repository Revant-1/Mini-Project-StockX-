import React from 'react';
import '../components/homepage.css';
import { useNavigate } from 'react-router-dom';

function Features() {
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
    console.log("clicked")
  };

  const handleClick1 = () => {
    // Use the navigate function to redirect to the external URL
    window.open('http://localhost:8501', '_blank');
  };

  return (
    <div>
      <button class="card" onClick={() => handleClick1()}>
        <div class="pop" />
        <h5>Portfolio Performance Tracking</h5>
      </button>
      <button class="card1" onClick={() => handleClick('/financial-news')}>
        <div class="pop1" />
        <h5>Financial News</h5>
      </button>
      <button class="card2" onClick={() => handleClick('/stock-price-trend-prediction')}>
        <div class="pop2" />
        <h5>Stock Price/Trend Prediction</h5>
      </button>
    </div>
  );
}

export default Features;
