"use client";
import React, { useState } from 'react';

function Filters() {
  // Manage the active state of the filter pills
  const [activeFilter, setActiveFilter] = useState('All');
  
  // Array of categories makes it easy to add or remove filters later
  const filters = ['All', 'Business', 'Customer', 'Enterprise', 'Leads'];

  return (
    <section className="flex flex-col w-full max-w-7xl mx-auto gap-4 p-4">
      
      {/* Scrollable Filter Pills Row */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`whitespace-nowrap px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 border ${
              activeFilter === filter
                ? "bg-[#0B0B1A] border-[#0B0B1A] text-white shadow-md" // Active state
                : "bg-white border-gray-200 text-gray-600 hover:border-gray-300 hover:bg-gray-50" // Inactive state
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Advanced Search Bar */}
      <form 
        onSubmit={(e) => e.preventDefault()} 
        className="relative flex items-center w-full bg-white border border-gray-200 rounded-full shadow-sm transition-all focus-within:border-black focus-within:ring-1 focus-within:ring-black p-1.5"
      >
        {/* Search Icon */}
        <div className="pl-4 pr-2 text-gray-400">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
        </div>

        {/* Input Field */}
        <input 
          type="text" 
          placeholder="Search records, names, or IDs..." 
          className="flex-1 bg-transparent py-2.5 outline-none text-gray-700 placeholder-gray-400 text-sm md:text-base w-full"
        />

        {/* Action Button */}
        <button 
          type="submit" 
          className="bg-[#0B0B1A] text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-gray-800 transition-colors shrink-0"
        >
          See Results
        </button>
      </form>

    </section>
  );
}

export default Filters;