import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import auth from '../firebase.config';
import Logo from '../assets/logo.svg';

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const navigate = useNavigate();

  const onChange = (e) => {
    const newData = {
      [e.target.id]: e.target.value,
    };
    setFormData((prev) => {
      return {
        ...prev,
        ...newData,
      };
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredentials = await signInWithEmailAndPassword(auth, email, password);

      if (userCredentials.user) {
        navigate('/');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="px-4 mt-12">
      <div className="mx-auto text-center w-max">
        <img src={Logo} alt="logo" />
      </div>
      <h1 className="my-6 text-4xl font-semibold text-center text-white">Welcome Back!</h1>
      <div className="w-full px-4 py-6 mt-8 text-white rounded-md shadow-md bg-semi_dark_blue sm:max-w-md sm:px-6 sm:mx-auto">
        <h2 className="my-3 text-2xl font-semibold text-white">Login</h2>
        <form className="w-full my-6 mb-8" onSubmit={onSubmit}>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={onChange}
            placeholder="example@email.com"
            autoComplete="off"
            className="w-full py-2 pb-4 pl-2 mb-5 text-white bg-transparent border-b placeholder-greyish_blue border-greyish_blue outline-0 caret-logo_red focus:border-white"
          />
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={onChange}
            placeholder="********"
            autoComplete="off"
            className="w-full py-2 pb-4 pl-2 mb-5 text-white bg-transparent border-b placeholder-greyish_blue border-greyish_blue outline-0 caret-logo_red focus:border-white"
          />
          <button
            type="submit"
            className="block w-full px-6 py-2 pb-3 mt-6 text-base font-normal text-white rounded-md shadow-xl bg-logo_red hover:scale-95 hover:text-dark_blue hover:bg-white"
          >
            Login to your account
          </button>
        </form>
        <div className="flex items-center justify-center gap-4 mb-2">
          <p>
            <strong>Don't have an account?</strong>
          </p>
          <Link to="/sign-up" className="text-logo_red">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
