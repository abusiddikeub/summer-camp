import React, { useContext } from "react";
import logo from "../../../assets/logo-header.webp";
import { Link, NavLink } from "react-router-dom";
import ProfilePhoto from "./ProfilePhoto";
import Container from "./Container";
import { AuthContext } from "../../../Routers/AuthProvider/AuthProvider";
import useAdmin from "../../../Component/Hooks/useAdmin";
import { FaShoppingCart } from "react-icons/fa";
import useSelect from "../../../Component/Hooks/UseSelectClass";



const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [select]  = useSelect()
  const [isAdmin] = useAdmin();



  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <Container>
      <div className="navbar  z-10 bg-opacity-30 bg-black text-white w-[1100px] ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-2 text-black mb-4 shadow bg-base-100 rounded-box w-52 scale-0"
            >
              <li>
                <Link to="/">
                  <a>Home</a>
                </Link>
              </li>
           
              <li>
                <Link to="/instructor">
                  <a>Instructors</a>
                </Link>
              </li>
              <li>
                <Link to="/classes">
                  <a>Classes</a>
                </Link>
              </li>
             
              {user ? (
                <>
                  <div>
                    <Link
                      to="/dashboard"
                      className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                    >
                      Dashboard
                    </Link>
                  </div>

                  <div className="ml-5 p-2">
                    <ProfilePhoto></ProfilePhoto>
                  </div>

                  <div
                    onClick={handleLogOut}
                    className="px-4 py-3 hover:bg-neutral-100 transition font-semibold cursor-pointer"
                  >
                    Logout
                  </div>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
                  >
                    Login
                  </Link>
                </>
              )}
            </ul>
          </div>
          <img src={logo} alt="" />
        </div>
        <div className="navbar-center hidden lg:flex md:flex">
          <ul className="menu menu-horizontal px-1">
            <li className="mt-3">
              <Link to="/">
                <a>Home</a>
              </Link>
            </li>
            <li className="mt-3">
              <Link to="/instructor">
                <a>Instructors</a>
              </Link>
            </li>
            <li className="mt-3">
              <Link to="/classes">
                <a>Classes</a>
              </Link>
            </li>
            <li>
                <Link to="/">
                 <button className="btn ">
                  <FaShoppingCart></FaShoppingCart>
                  <div className="badge badge-accent">+{select?.length || 0}</div>
                 </button>
                </Link>
              </li>
          </ul>
        </div>

        {user ? (
          <>
        
            <div>
              {isAdmin ?   <Link
                to='/dashboard/adminHome'
                className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
              >
                Dashboard
              </Link> :   <Link
                to='/dashboard/userHome'
                className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
              >
                Dashboard
              </Link>
              
              }
      
            </div>

            <div>
              <ProfilePhoto></ProfilePhoto>
            </div>

            <div
              onClick={handleLogOut}
              className="px-4 py-3 hover:bg-neutral-100 transition font-semibold cursor-pointer"
            >
              Logout
            </div>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
            >
              Login
            </Link>
          </>
        )}
      </div>
    </Container>
  );
};

export default Navbar;
