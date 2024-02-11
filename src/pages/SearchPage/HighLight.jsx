import React, { useState, useEffect } from 'react';
import axios from 'axios';

function HighLight() {

  const [message, setMessage] = useState('');
  const [name, setName] = useState('');

  useEffect(() => {
    // Fetch data from the backend
    axios.get('http://localhost:3001/portfolio-performance-tracking')
      .then(response => {
        setMessage(response.data.message);
        setName(response.data.name);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);



  return (
    <div><section className="bg-white">
    <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">{name}</h2>
  
        <p className="mt-4 text-gray-500 sm:text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione dolores laborum labore
          provident impedit esse recusandae facere libero harum sequi.Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione dolores laborum labore
          provident impedit esse recusandae facere libero harum sequi.Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione dolores laborum labore
          provident impedit esse recusandae facere libero harum sequi.Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione dolores laborum labore
          provident impedit esse recusandae facere libero harum sequi.Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione dolores laborum labore
          provident impedit esse recusandae facere libero harum sequi.Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione dolores laborum labore
          provident impedit esse recusandae facere libero harum sequi.Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione dolores laborum labore
          provident impedit esse recusandae facere libero harum sequi.Lorem
        </p>
      </div>
  
      <div className="mt-8 sm:mt-12">
        <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="flex flex-col rounded-lg bg-blue-100 px-4 py-8 text-center">
            <dt className="order-last text-lg font-medium text-gray-500">Market Value</dt>
  
            <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">$4.8m</dd>
          </div>
  
          <div className="flex flex-col rounded-lg bg-blue-100 px-4 py-8 text-center">
            <dt className="order-last text-lg font-medium text-gray-500">Volume</dt>
  
            <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">24</dd>
          </div>
  
          <div className="flex flex-col rounded-lg bg-blue-100 px-4 py-8 text-center">
            <dt className="order-last text-lg font-medium text-gray-500">Book Value</dt>
  
            <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">86</dd>
          </div>
        </dl>
      </div>
    </div>
  </section></div>
  )
}

export default HighLight