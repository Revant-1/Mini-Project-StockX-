import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../components/homepage.css';

function Search() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/searched/" + input);
    console.log(input);
  };
  
  const handleClick = (path) => {
    navigate(path);
    console.log("clicked");
  };

  return (
    <div className="h-screen overflow-hidden flex flex-col items-center justify-center" style={{ background: "#e1e4e8" }}>
      <form onSubmit={submitHandler}>
        <div className="flex items-center justify-center">
          <img className="h-[89px] w-[273px]" src="https://i.postimg.cc/vHJXT7jB/ideogram-1-removebg-preview.png" alt="google Logo" />
        </div>
        <div className="md:w-[584px] mx-auto mt-7 flex w-[92%] items-center rounded-full border hover:shadow-md" style={{ background: "#ffffff" }}>
          <div className="pl-5">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            type="text"
            className="w-full bg-transparent rounded-full py-[14px] pl-4 outline-none"
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
          <button type="submit" />
          <div className="pr-5">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
            </svg>
          </div>
        </div>
      </form>
      <div className="mt-3 flex space-x-12">
        <button><div className="bg-[#f8f9fa] shadow-md rounded-lg px-2 py-1" onClick={() => handleClick('/portfolio-performance-tracking')}>Portfolio Performance Tracking</div></button>
        <button><div className="bg-[#f8f9fa] shadow-md rounded-lg px-2 py-1" onClick={() => handleClick('/financial-news')}>Financial News</div></button>
        <button><div className="bg-[#f8f9fa] shadow-md rounded-lg px-2 py-1" onClick={() => handleClick('/stock-price-trend-prediction')}>Stock Price/Trend Prediction</div></button>
      </div>
    </div>
  );
}

export default Search;
