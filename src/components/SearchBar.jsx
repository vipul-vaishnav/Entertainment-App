import React from 'react';
import SearchIcon from '../assets/icon-search.svg';
import { useLocation } from 'react-router-dom';

const SearchBar = () => {
  const location = useLocation();

  const placeholderText = () => {
    let text = '';
    switch (location.pathname) {
      case '/':
        text = 'Search for movies and TV series';
        break;
      case '/movies':
        text = 'Search for movies';
        break;
      case '/tv-series':
        text = 'Search for TV series';
        break;
      default:
        text = 'Search...';
        break;
    }
    return text;
  };

  return (
    <div className="flex items-center justify-start px-4 my-4">
      <div className="w-1/6">
        <img src={SearchIcon} alt="search-icon" className="h-full scale-90" />
      </div>
      <form className="w-5/6">
        <div className="w-full">
          <input
            className="w-full pt-2 pb-3 font-sans text-white placeholder-gray-500 bg-transparent border-b border-transparent outline-0 focus:border-greyish_blue focus:caret-logo_red"
            type="text"
            placeholder={placeholderText()}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
