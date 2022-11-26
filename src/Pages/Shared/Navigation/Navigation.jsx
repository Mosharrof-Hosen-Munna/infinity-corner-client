import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";


const Navigation = () => {
  const { user,logOut } = useAuth();
  return (
   <>
    
   <nav className="font-semibold  shadow-md shadow-slate-300 bg-white sticky top-0 z-50">
   <div className="navbar  py-2 container mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
      <li>
                <Link to="/home">HOME</Link>
              </li>
              <li>
                <Link to="/services">PRODUCTS</Link>
              </li>
              <li>
                <Link to="/blog">BLOG</Link>
              </li>
              
              {
              !user&&<>
              <li><Link
                to="/login"
                className="bg-primary py-3 mb-4 px-6 mx-2 rounded-full text-white"
              >
                Login
              </Link></li>
              <li> <Link
                to="/register"
                className="bg-infinity py-3 px-6 mx-2 rounded-full text-white"
              >
                Signup
              </Link></li></>
            
            }
              
             {user&& <li>
              <div
              onClick={logOut}
                  className="bg-purple-700 cursor-pointer py-3 px-6 mx-2 rounded-full text-white"
                >
                  Logout
                </div>
              </li>}
      </ul>
    </div>
    <div className="flex">
            <Link to='/' className=" normal-case text-cyan-700 text-4xl font-bold">
              Infinity<span className="text-infinity">Corner</span>
            </Link>
          </div>
  </div>
  <div className="navbar-end">
  <div className="navbar-center hidden lg:flex font-semibold">
  <div className="flex-none">
            <ul className="menu menu-horizontal p-0 text-md text-infinity">
              <li>
                <Link to="/home">HOME</Link>
              </li>
              <li>
                <Link to="/services">PRODUCTS</Link>
              </li>
              
              <li>
                <Link to="/blog">BLOG</Link>
              </li>
              {
                user&&<li>
                <Link to="/dashboard">DASHBOARD</Link>
              </li>
              }
            </ul>
          </div>
  </div>
  <div className="flex items-center">
            {
              !user&&<div className="text-lg hidden md:block">
              <Link
                to="/login"
                className="bg-infinity  py-2 px-4 mx-2 rounded-full text-white"
              >
                LOGIN
              </Link>
              <Link
                to="/register"
                className="bg-gradient-to-r from-purple-500 to-pink-500 py-2 px-4 mx-2 rounded-full text-white"
              >
                REGISTER
              </Link>
            </div>
            }
            {
              user&&<div className="flex items-center">
              <div
              onClick={logOut}
                  className="bg-pink-700 hidden md:block cursor-pointer py-2 px-4 mx-2 rounded-full text-white"
                >
                  Logout
                </div>
              <div className="avatar ml-4">
                <div className="w-12 rounded-full">
                  <img src={user.photoURL ? user.photoURL : 'https://placeimg.com/192/192/people'} />
                </div>
              </div>
              </div>
            }
          </div>
  </div>
</div>
</nav></>
  );
};

export default Navigation;
