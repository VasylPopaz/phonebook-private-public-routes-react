import { Link } from 'react-router-dom';
import heroImg from '../images/bg-hero.jpg';

const Home = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${heroImg})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className=" mb-12 text-violet-800 text-5xl font-bold  ">
            Your phonebook
          </h1>
          <Link
            to={'/contacts'}
            className="btn bg-violet-400 hover:bg-violet-700 hover:text-white"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
