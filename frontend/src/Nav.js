import React from "react";
import "../src/app/globals.css";
function Nav() {
  return (
    <div className="navbar">
      <div className="logo">
        <h3>Logo</h3>
      </div>
      <div className="nav-list">
        <div>
          <li>about us</li>
        </div>
        <div>
          <li>Buy Food</li>
        </div>
        <div>
          <li>Contact us</li>
        </div>
      </div>
      <div className="login-sec">
        <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold  px-1 border border-gray-400 rounded shadow">
          Sign up
        </button>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold  px-3 border-b-4 border-white-700 hover:border-green-500 rounded ">
          Login
        </button>
      </div>
    </div>
  );
}

export default Nav;
