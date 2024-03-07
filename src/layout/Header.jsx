import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-white">
      <div className="flex justify-between items-center max-w-6cl mx-auto p-2 pb-4 px-9">
        <Link to="/">
          <img
            src="./Images/KoinX.jpg"
            alt="KoinX"
            style={{ height: "20px" }}
          />
        </Link>
        <ul className="flex gap-8">
          <Link to="/crypto_taxes">
            <li>Crypto Taxes</li>
          </Link>
          <Link to="free_tools">
            <li>Free Tools</li>
          </Link>
          <Link to="/resource_center">
            <li>Resource Center</li>
          </Link>
          <button className="rounded-lg bg-blue-700 p-1 px-4 text-white">
            Get Started
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
