


// function Search() {
 
//   const [input, setInput] = useState("");

//   const submitHandler = (e) => {
//     e.preventDefault(); // Prevent the form from being submitted (which is the default behavior)
//     console.log(input);
//   };

//   return (
//     <div>
//       <div className="searchBox">
//         <form className="form" onSubmit={submitHandler}>
//           <input
//             className="searchInput"
//             type="text"
//             placeholder="Type Ticker Name Of Stock"
//             style={{ width: "600px", paddingLeft: "10px" }}
//             onChange={(e) => setInput(e.target.value)}
//             value={input}
//           />

//     <button className="searchButton" type="submit" href="#" onSubmit={submitHandler}>
           
        
//  <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29" fill="none">
// <g clip-path="url(#clip0_2_17)">
// <g filter="url(#filter0_d_2_17)">
// <path d="M23.7953 23.9182L19.0585 19.1814M19.0585 19.1814C19.8188 18.4211 20.4219 17.5185 20.8333 16.5251C21.2448 15.5318 21.4566 14.4671 21.4566 13.3919C21.4566 12.3167 21.2448 11.252 20.8333 10.2587C20.4219 9.2653 19.8188 8.36271 19.0585 7.60242C18.2982 6.84214 17.3956 6.23905 16.4022 5.82759C15.4089 5.41612 14.3442 5.20435 13.269 5.20435C12.1938 5.20435 11.1291 5.41612 10.1358 5.82759C9.1424 6.23905 8.23981 6.84214 7.47953 7.60242C5.94407 9.13789 5.08145 11.2204 5.08145 13.3919C5.08145 15.5634 5.94407 17.6459 7.47953 19.1814C9.01499 20.7168 11.0975 21.5794 13.269 21.5794C15.4405 21.5794 17.523 20.7168 19.0585 19.1814Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" shape-rendering="crispEdges"></path>
// </g>
// </g>
// <defs>
// <filter id="filter0_d_2_17" x="-0.418549" y="3.70435" width="29.7139" height="29.7139" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
// <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
// <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
// <feOffset dy="4"></feOffset>
// <feGaussianBlur stdDeviation="2"></feGaussianBlur>
// <feComposite in2="hardAlpha" operator="out"></feComposite>
// <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
// <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2_17"></feBlend>
// <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2_17" result="shape"></feBlend>
// </filter>
// <clipPath id="clip0_2_17">
// <rect width="28.0702" height="28.0702" fill="white" transform="translate(0.403503 0.526367)"></rect>
// </clipPath>
// </defs>
//  </svg>
             

//  </button>
//  </form>
// </div>


// </div>
//   )
// }

// export default Search;

import React, { useState } from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import '../components/homepage.css';


function Search() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
     navigate("/searched/" + input);
    // // console.log(e);
   console.log(input);
  };

  return (
    <FormStyle onSubmit={submitHandler}>
      <div className="searchBox">
     
        <input
         style={{ width: "600px", paddingLeft: "10px" }}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          value={input}
        />
        
        
     <button className="searchButton" type="submit" href="#" onSubmit={submitHandler}>
           
        
             <svg style={{right:"75%"}} xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29" fill="none">
            <g clip-path="url(#clip0_2_17)">
            <g filter="url(#filter0_d_2_17)">
            <path d="M23.7953 23.9182L19.0585 19.1814M19.0585 19.1814C19.8188 18.4211 20.4219 17.5185 20.8333 16.5251C21.2448 15.5318 21.4566 14.4671 21.4566 13.3919C21.4566 12.3167 21.2448 11.252 20.8333 10.2587C20.4219 9.2653 19.8188 8.36271 19.0585 7.60242C18.2982 6.84214 17.3956 6.23905 16.4022 5.82759C15.4089 5.41612 14.3442 5.20435 13.269 5.20435C12.1938 5.20435 11.1291 5.41612 10.1358 5.82759C9.1424 6.23905 8.23981 6.84214 7.47953 7.60242C5.94407 9.13789 5.08145 11.2204 5.08145 13.3919C5.08145 15.5634 5.94407 17.6459 7.47953 19.1814C9.01499 20.7168 11.0975 21.5794 13.269 21.5794C15.4405 21.5794 17.523 20.7168 19.0585 19.1814Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" shape-rendering="crispEdges"></path>
            </g>
            </g>
            <defs>
            <filter id="filter0_d_2_17" x="-0.418549" y="3.70435" width="29.7139" height="29.7139" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
            <feOffset dy="4"></feOffset>
            <feGaussianBlur stdDeviation="2"></feGaussianBlur>
            <feComposite in2="hardAlpha" operator="out"></feComposite>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2_17"></feBlend>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2_17" result="shape"></feBlend>
            </filter>
            <clipPath id="clip0_2_17">
            <rect width="28.0702" height="28.0702" fill="white" transform="translate(0.403503 0.526367)"></rect>
            </clipPath>
            </defs>
             </svg>
                        
           
             </button>

      </div>
    </FormStyle>
  );
}

export default Search;

const FormStyle = styled.form`
  width: 85%;

  div {
    position: relative;
    width: 100%;
  }
  input {
    border: none;
    background: none;
    outline: none;
    color: white;
    font-size: 15px;
    padding: 24px 46px 24px 26px;
    font-size: 1.2rem;
    /* padding: 1rem 3rem; */
    border-radius: 1rem;
    outline: none;
    width: 100%;
  }
  svg {
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(100%, -50%);
    color: white;
  }
`;