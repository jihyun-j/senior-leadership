import React from "react";
import { FaRegCircleUser } from "react-icons/fa6";
import { Link } from "react-router-dom";

const NavBar: React.FC = () => {
  const user = localStorage.getItem("user_token");

  return (
    <nav className="flex justify-between items-center bg-black h-20 text-white">
      <Link to="/">Senior Learning</Link>

      {user ? (
        <FaRegCircleUser className="text-2xl" />
      ) : (
        <Link to="/login">Sign-in</Link>
      )}
    </nav>
  );
};

export default NavBar;
