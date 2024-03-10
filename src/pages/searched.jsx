import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import Section from './SearchPage/Section';
import Table from "./SearchPage/Table";
import HighLight from "./SearchPage/HighLight";
import CandleStickChart from './SearchPage/Chart/LineChart';
import axios from 'axios'; // Import axios for making HTTP requests

function SearchResult() {
  const { search } = useParams();

  // Use useEffect to fetch data from the backend when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/stock-information?search=${search}`);
        console.log(response.data);
        // Handle the response data as needed
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [search]);

    // Use useEffect to fetch data from the backend when the component mounts
    useEffect(() => {
      const fetchData = async () => {
        try {
          await axios.post('http://localhost:8502/', { search });
        } catch (error) {
          console.error('Error sending search param to port 8502:', error);
        }
      };
  
      fetchData();
    }, [search]);

  return (
    <div>
      {/* <CandleStickChart /> */}
      <HighLight />
      <Table />
      <Section />
    </div>
  );
}

export default SearchResult;
