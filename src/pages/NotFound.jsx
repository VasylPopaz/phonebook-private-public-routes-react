import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <>
      <Link to="/" className="  inline-block ml-4  mt-4 underline">
        Go home...
      </Link>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="title">Sorry... Page is not found!</h1>
        </div>
      </div>
    </>
  );
};

export default NotFound;
