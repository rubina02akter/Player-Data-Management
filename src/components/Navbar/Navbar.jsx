
// import { ToastContainer, toast,Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Navbar = ({coins}) => {
  return (
    <div className="container mb-6 bg-opacity-60  sticky top-0 bg-transparent  bg-opacity-60 backdrop-blur-lg py-4 z-10 ">
      <div className="navbar flex justify-between">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
          
          </div>
          <a className="btn btn-ghost text-xl ml-0 lg:ml-12">
            <img src="logo.png" alt="" />
          </a>
        </div>
        <div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Fixture</a>
            </li>
            <li>
              <a>Teams</a>
            </li>
            <li>
              <a>Schedules</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end ">
         <button className="btn border-2 mr-10 bg-white">
        <span>{coins}</span>Coin
          <img className="w-5" src="coin.png" alt="" />
          </button>
        </div>
        </div>

      </div>

    </div>
  );
};

export default Navbar;
