import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../components/homepage.css';

function Search() {
  const [input, setInput] = useState("");
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  const handleChange = async (e) => {
    setInput(e.target.value);
    if (e.target.value.trim() === "") {
      setResults([]);
      return;
    }
    const res = await fetch(`http://localhost:3001/search?query=${e.target.value}`);
    const data = await res.json();
    setResults(data.results);
  };

  const directTo = (symbol) => {
    window.location.href = 'http://localhost:8501/';  };


  const handleClick = (symbol) => {
    navigate(`/searched/${symbol}`);
  };

  const handleClick1 = (path) => {
    navigate(path);
    console.log("clicked");
  };

  return (
    <div className="h-screen overflow-hidden flex flex-col items-center justify-center" style={{ background: "#e1e4e8" }}>
      <form>
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
            onChange={handleChange}
            value={input}
          />
        </div>
      </form>
      <div className="mt-3 flex flex-col space-y-2 w-96">
        {results.map((result) => (
          <button key={result.symbol} onClick={() => handleClick(result.symbol)}>
            <div className="bg-[#f8f9fa] shadow-md rounded-lg px-2 py-1">{result.name} ({result.symbol})</div>
          </button>
        ))}
      </div>

        <div className="mt-3 flex space-x-12">
        <button><div className="bg-[#f8f9fa] shadow-md rounded-lg px-2 py-1" onClick={() =>directTo()}>Portfolio Performance Tracking</div></button>
        <button><div className="bg-[#f8f9fa] shadow-md rounded-lg px-2 py-1" onClick={() => handleClick1('/financial-news')}>Financial News</div></button>
        <button><div className="bg-[#f8f9fa] shadow-md rounded-lg px-2 py-1" onClick={() => handleClick1('/stock-price-trend-prediction')}>Stock Price/Trend Prediction</div></button>
      </div>


    </div>
  );
}

export default Search;
