import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <>
      <Link
        to="//"
        className="inline-block p-1 ml-4 mt-4 text-lg text-violet-950 bg-violet-400 hover:text-white hover:border-white hover:bg-violet-700 border-2 border-violet-900 rounded-md "
      >
        Go home
      </Link>
      <div className="hero-content text-center text-neutral-content mx-auto">
        <div className="">
          <h1 className="title">Sorry... Page is not found!</h1>
        </div>
      </div>
    </>
  );
};

export default NotFound;
