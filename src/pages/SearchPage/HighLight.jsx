// HighLight.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function HighLight() {
  const { search } = useParams();

  const [summary, setSummary] = useState('');
  const [name, setName] = useState('');
  const [bookValue, setBookValue] = useState('');
  const [volume, setVolume] = useState('');
  const [marketCap, setMarketCap] = useState('');

  useEffect(() => {
    axios.get(`http://localhost:3001/searched/${search}`)
      .then(response => {
        const data = response.data;
        setSummary(data.summary);
        setName(data.name);
        setBookValue(data.bookValue);
        setVolume(data.volume);
        setMarketCap(data.marketCap);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [search]);

  return (
    <div>
      <section className="bg-white">
        <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">{name}</h2>
            <h1>Symbol : {search}</h1>
            <p className="mt-4 text-gray-500 sm:text-xl">{summary}</p>
          </div>
          <div className="mt-8 sm:mt-12">
            <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="flex flex-col rounded-lg bg-blue-100 px-4 py-8 text-center">
                <dt className="order-last text-lg font-medium text-gray-500">Market Value</dt>
                <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">{marketCap}</dd>
              </div>
              <div className="flex flex-col rounded-lg bg-blue-100 px-4 py-8 text-center">
                <dt className="order-last text-lg font-medium text-gray-500">Volume</dt>
                <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">{volume}</dd>
              </div>
              <div className="flex flex-col rounded-lg bg-blue-100 px-4 py-8 text-center">
                <dt className="order-last text-lg font-medium text-gray-500">Book Value</dt>
                <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">{bookValue}</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HighLight;

