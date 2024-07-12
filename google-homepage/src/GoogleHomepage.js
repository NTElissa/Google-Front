import React, { useState } from 'react';
import { Search, Mic, Camera, Grid } from 'lucide-react';

const GoogleClone = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#202124] text-[#e8eaed]">
      <header className="p-4">
        <nav className="flex justify-end items-center space-x-4">
          <a href="#" className="text-sm hover:underline">Gmail</a>
          <a href="#" className="text-sm hover:underline">Images</a>
          <button className="p-2 rounded-full hover:bg-[#303134]">
            <Grid size={20} />
          </button>
          <button className="w-8 h-8 rounded-full bg-[#8ab4f8] text-[#202124] flex items-center justify-center font-medium">
            A
          </button>
        </nav>
      </header>

      <main className="flex-grow flex flex-col items-center justify-center px-4">
        <h1 className="text-[90px] font-light mb-8">Google</h1>
        <form onSubmit={handleSearch} className="w-full max-w-[584px]">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full p-3 pl-12 pr-20 rounded-full bg-[#303134] text-white border border-[#5f6368] focus:outline-none focus:border-[#8ab4f8] hover:bg-[#303134] hover:shadow-md"
              placeholder="Search Google or type a URL"
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#9aa0a6]" size={20} />
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex items-center space-x-4">
              <svg className="w-6 h-6 cursor-pointer" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z" fill="#4285F4"/>
                <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z" fill="#34A853"/>
              </svg>
              <svg className="w-6 h-6 cursor-pointer" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="3.2" fill="#4285F4"/>
                <path d="M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z" fill="#FBBC05"/>
              </svg>
            </div>
          </div>
        </form>
        <div className="mt-8 space-x-2">
          <button className="px-4 py-2 bg-[#303134] hover:bg-[#3c4043] rounded text-sm">
            Google Search
          </button>
          <button className="px-4 py-2 bg-[#303134] hover:bg-[#3c4043] rounded text-sm">
            I'm Feeling Lucky
          </button>
        </div>
        <p className="mt-6 text-sm text-[#999da2]">
          Google offered in: 
          <a href="#" className="text-[#8ab4f8] hover:underline ml-1">Français</a>
          <a href="#" className="text-[#8ab4f8] hover:underline ml-1">Kiswahili</a>
          <a href="#" className="text-[#8ab4f8] hover:underline ml-1">Ikinyarwanda</a>
        </p>
      </main>

      <footer className="bg-[#171717] text-[#999da2] text-sm">
        <div className="px-4 py-3 border-b border-[#3c4043]">
          Rwanda
        </div>
        <div className="px-4 py-3 flex flex-col sm:flex-row justify-between">
          <div className="space-x-4 mb-2 sm:mb-0">
            <a href="#" className="hover:underline">About</a>
            <a href="#" className="hover:underline">Advertising</a>
            <a href="#" className="hover:underline">Business</a>
            <a href="#" className="hover:underline">How Search works</a>
          </div>
          <div className="space-x-4">
            <a href="#" className="hover:underline">Privacy</a>
            <a href="#" className="hover:underline">Terms</a>
            <a href="#" className="hover:underline">Settings</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default GoogleClone;