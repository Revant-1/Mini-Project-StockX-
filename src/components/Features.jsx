import React from 'react';
import '../components/homepage.css';
import { useNavigate } from 'react-router-dom';

function Features() {
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
    console.log("clicked")
  };

 
  return (

    
    <div>
 
<div class="mt-3 flex space-x-12">
    
    <button><div class="bg-[#f8f9fa] shadow-md rounded-lg px-2 py-1" 
    onClick={() => handleClick('/portfolio-performance-tracking')}>Portfolio Performance Tracking</div></button>
    
    <button><div class="bg-[#f8f9fa] shadow-md rounded-lg  px-2 py-1"
    onClick={() => handleClick('/financial-news')}>Financial News</div></button>

    <button><div class="bg-[#f8f9fa] shadow-md rounded-lg px-2 py-1"
    onClick={() => handleClick('/stock-price-trend-prediction')}>Stock Price/Trend Prediction</div></button>
</div>
    </div>
  );
}

export default Features;
