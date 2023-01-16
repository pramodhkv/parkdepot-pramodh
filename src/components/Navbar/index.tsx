import React from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="h-24 border-b border-b-thin-white w-full bg-body-bg">
      <div className="flex items-center py-6 px-8">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
