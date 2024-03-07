import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const strings = useSelector((state) => state.platformSettings.strings);
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
            <li>{strings.header.crypto_taxes}</li>
          </Link>
          <Link to="free_tools">
            <li>{strings.header.free_tools}</li>
          </Link>
          <Link to="/resource_center">
            <li>{strings.header.resource_center}</li>
          </Link>
          <button className="rounded-lg bg-blue-700 p-1 px-4 text-white">
            {strings.header.get_started}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
