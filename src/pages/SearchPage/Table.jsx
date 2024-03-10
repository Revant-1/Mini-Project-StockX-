// Table.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Table() {
  const { search } = useParams();

  const [industryDisc, setIndustryDisc] = useState('');
  const [sector, setSector] = useState('');
  const [Website, setWebsite] = useState('');
  const [sign, setSymbol] = useState('');
  const [employs, setEmploys] = useState('');

  useEffect(() => {
    axios.get(`http://localhost:3001/searched/${search}`)
      .then(response => {
        const data = response.data;
        setIndustryDisc(data.industryDisc);
        setSector(data.sector);
        setWebsite(data.Website);
        setSymbol(data.sign);
        setEmploys(data.employs);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [search]);

  return (
    <div>
      <div className="flow-root">
        <dl className="-my-3 divide-y divide-gray-100 text-sm">
          <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium text-gray-900">Industry Description</dt>
            <dd className="text-gray-700 sm:col-span-2">{industryDisc}</dd>
          </div>
          <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium text-gray-900">Sector</dt>
            <dd className="text-gray-700 sm:col-span-2">{sector}</dd>
          </div>
          <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium text-gray-900">Website</dt>
            <dd className="text-gray-700 sm:col-span-2"><a href={Website}>{Website}</a></dd>
          </div>
          <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium text-gray-900">Symbol</dt>
            <dd className="text-gray-700 sm:col-span-2">{sign}</dd>
          </div>
          <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
            <dt className="font-medium text-gray-900">Total Employs</dt>
            <dd className="text-gray-700 sm:col-span-2">{employs}</dd>
          </div>
        </dl>
      </div>
    </div>
  );
}

export default Table;

