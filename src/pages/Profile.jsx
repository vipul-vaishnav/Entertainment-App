import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.svg';

const Profile = () => {
  return (
    <div className="px-4 my-24 text-center text-white">
      <div className="mx-auto text-center w-max">
        <img src={Logo} alt="logo" className="brightness-[1000]" />
      </div>
      <h1 className="px-3 py-3 text-2xl font-bold rounded-md text-logo_red">No User Found!</h1>
      <div className="mt-5">
        <p className="text-lg text-white">Either sign in or create a new account to continue.</p>
        <div className="mt-8">
          <div className="my-4">
            <Link
              to="/sign-up"
              className="block px-6 py-2 mx-auto text-lg font-semibold text-white rounded-md shadow-xl bg-logo_red hover:scale-95 hover:text-dark_blue hover:bg-white w-max"
            >
              Sign Up to continue
            </Link>
          </div>
          <div className="my-6">
            <Link to="/sign-in" className="text-logo_red">
              or Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
