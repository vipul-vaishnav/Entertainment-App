import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.svg';
import HomeIcon from '../assets/icon-nav-home.svg';
import MoviesIcon from '../assets/icon-nav-movies.svg';
import TvseriesIcon from '../assets/icon-nav-tv-series.svg';
import Avatar from '../assets/avatar-placeholder-2.png';

const Navbar = () => {
  return (
    <div className="bg-semi_dark_blue py-4 px-4 w-full">
      <div className="flex justify-between items-center">
        <div>
          <Link to="/">
            <img src={Logo} alt="logo" />
          </Link>
        </div>
        <ul className="flex justify-between items-center gap-6">
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
        <div className="w-8 rounded-full overflow-hidden">
          <img src={Avatar} alt="avatar" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
