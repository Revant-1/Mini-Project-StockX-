import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Table() {
  return (
    <div><div class="flow-root">
    <dl class="-my-3 divide-y divide-gray-100 text-sm">

    <div class="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
        <dt class="font-medium text-gray-900">Industry Discription</dt>
        <dd class="text-gray-700 sm:col-span-2">
          Lorem ipsum dolor
        </dd>
      </div>

      <div class="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
        <dt class="font-medium text-gray-900">Sector</dt>
        <dd class="text-gray-700 sm:col-span-2">Mr</dd>
      </div>
  
      <div class="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
        <dt class="font-medium text-gray-900">Website</dt>
        <dd class="text-gray-700 sm:col-span-2">John Frusciante</dd>
      </div>
  
      <div class="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
        <dt class="font-medium text-gray-900">Symbol</dt>
        <dd class="text-gray-700 sm:col-span-2">Guitarist</dd>
      </div>
  
      <div class="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
        <dt class="font-medium text-gray-900">Total Employs</dt>
        <dd class="text-gray-700 sm:col-span-2">$1,000,000+</dd>
      </div>
  
    
    </dl>
  </div></div>
  )
}

export default Table