import React, { useEffect, useState } from "react";
import { FaCartPlus, FaSearch } from "react-icons/fa";
import "./header.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [scroll, setScroll] = useState(false);
  const handleScroll = () => {
    const offset = window.screenY;

    if (offset > 200) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);
  return (
    <header
      className={`bg-gray-800 text-white shadow ${scroll ? "sticky" : ""}`}
    >
      <nav className="container mx-auto flex items-center justify-between flex-wrap p-4">
        {/* Left */}
        <div className="flex items-center flex-shrink-0 mr-6">
          <div className="ml-4 flex">
            <Link to={"/"} className="mr-4">
              Home
            </Link>
            <a href="#about" className="mr-4">
              About
            </a>
            <a href="#categories">Categories</a>
          </div>
        </div>

        {/* Center */}
        <div className="flex justify-center flex-grow">
          <span className="font-semibold text-xl tracking-tight">
            <Link to={"/"}>Ramesh Shop</Link>
          </span>
        </div>

        {/* Right */}
        <div className="flex items-center">
          <button className="mr-4">
            <Link to={"/cart"}>
              <FaCartPlus className="text-white" size={20} />
            </Link>
          </button>
          <button className="mr-4">
            <FaSearch className="text-white" size={20} />
          </button>
          <div className="flex items-center bg-gray-700 p-2 rounded">
            <span className="text-white">Another Field</span>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
