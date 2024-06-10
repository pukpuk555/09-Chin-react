import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="flex justify-end items-center h-16 bg-gray-500">
      <div className="mr-6 gap-6 flex">
        <Link to="/" className="font-bold text-3xl text-white">
          Home
        </Link>
        <Link to="/owner" className="font-bold text-3xl text-white">
          Owner
        </Link>
      </div>
    </div>
  );
}

export default Nav;
