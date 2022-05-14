import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.svg';

const SignUp = () => {
  return (
    <div className="px-4 mt-12">
      <div className="mx-auto text-center w-max">
        <img src={Logo} alt="logo" />
      </div>
      <h1 className="my-6 text-4xl font-semibold text-center text-white">Welcome!</h1>
      <div className="w-full px-4 py-6 mt-8 text-white rounded-md shadow-md bg-semi_dark_blue sm:max-w-md sm:px-6 sm:mx-auto">
        <h2 className="my-3 text-2xl font-semibold text-white">Create New Account</h2>
        <form className="w-full my-6 mb-8">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="John Doe"
            className="w-full py-2 pb-4 pl-2 mb-5 text-white bg-transparent border-b placeholder-greyish_blue border-greyish_blue outline-0 caret-logo_red focus:border-white"
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="example@email.com"
            className="w-full py-2 pb-4 pl-2 mb-5 text-white bg-transparent border-b placeholder-greyish_blue border-greyish_blue outline-0 caret-logo_red focus:border-white"
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="********"
            className="w-full py-2 pb-4 pl-2 mb-5 text-white bg-transparent border-b placeholder-greyish_blue border-greyish_blue outline-0 caret-logo_red focus:border-white"
          />
          <button
            type="submit"
            className="block w-full px-6 py-2 pb-3 mt-6 text-base font-normal text-white rounded-md shadow-xl bg-logo_red hover:scale-95 hover:text-dark_blue hover:bg-white"
          >
            Create your new account
          </button>
        </form>
        <div className="flex items-center justify-center gap-4 mb-2">
          <p>
            <strong>Already have an account?</strong>
          </p>
          <Link to="/sign-in" className="text-logo_red">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
