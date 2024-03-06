import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-white">
      <div className="flex justify-between items-center max-w-6cl mx-auto p-3 px-8">
        <Link to="/">
          <img src='./Images/KoinX.jpg' alt='KoinX' style={{height: '20px'}}/>
        </Link>
        <ul className="flex gap-12">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/About">
            <li>About</li>
          </Link>
          <Link to="/profile">
            <li>About</li>
          </Link>
          <button className="rounded-lg bg-blue-700 p-1 px-4 text-white">Get Started</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
