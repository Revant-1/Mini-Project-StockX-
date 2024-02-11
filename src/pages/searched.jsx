import React from "react";
import { useParams } from "react-router-dom";
import Section from './SearchPage/Section';
import Table from "./SearchPage/Table";
import HighLight from "./SearchPage/HighLight";
import axios from 'axios';

function SearchResult() {
  const { search } = useParams();

  function Clicked(params) {
    console.log("working")
  }

  return (
    <div>
      {/* <h1>Search Results for: {search}</h1>
      <button onClick={Clicked} >Press</button> */}
      <HighLight />
      <Table />
      <Section />
      
      
    </div>
  );
}

export default SearchResult;