import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as ArrowIcon } from '../assets/left-arrow-svgrepo-com.svg';

const NotFound = () => {
  return (
    <div className="px-4 my-12 text-center text-white">
      <h1 className="mb-4 text-4xl font-bold uppercase text-logo_red">Whoops!</h1>
      <h3 className="mb-4 text-xl font-bold">404 Page Not Found</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi atque autem excepturi
        adipisci dignissimos mollitia iusto corrupti velit illo provident saepe, iste fugit dolorem
        ipsum.
      </p>
      <Link
        to="/"
        className="flex items-center justify-center gap-4 px-4 py-2 pb-3 mx-auto mt-6 text-white rounded-md shadow-lg w-max bg-logo_red hover:scale-95 hover:text-black"
      >
        <ArrowIcon width="16px" height="16px" />
        <p className="font-semibold">Back Home</p>
      </Link>
    </div>
  );
};

export default NotFound;
