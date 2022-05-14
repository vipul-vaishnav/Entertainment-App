import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.svg';
import HomeIcon from '../assets/icon-nav-home.svg';
import MoviesIcon from '../assets/icon-nav-movies.svg';
import TvseriesIcon from '../assets/icon-nav-tv-series.svg';
import Avatar from '../assets/avatar-placeholder-2.png';

const Navbar = () => {
  return (
    <div className="w-full px-4 py-4 shadow-xl bg-semi_dark_blue">
      <div className="flex items-center justify-between">
        <div>
          <Link to="/">
            <img src={Logo} alt="logo" />
          </Link>
        </div>
        <ul className="flex items-center justify-between gap-6">
          <li>
            <Link to="/">
              <img src={HomeIcon} alt="home" className="hover:brightness-[2000]" />
            </Link>
          </li>
          <li>
            <Link to="/movies">
              <img src={MoviesIcon} alt="movies" className="hover:brightness-[2000]" />
            </Link>
          </li>
          <li>
            <Link to="/tv-series">
              <img src={TvseriesIcon} alt="tv-series" className="hover:brightness-[2000]" />
            </Link>
          </li>
        </ul>
        <Link
          to="/profile"
          className="w-8 overflow-hidden bg-transparent border-0 rounded-full outline-0"
        >
          <img src={Avatar} alt="avatar" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
