import React from "react";
import { FaRegCircleUser } from "react-icons/fa6";
import { auth } from "../firebase/config";
import { Link } from "react-router-dom";

const NavBar: React.FC = () => {
  const user = localStorage.getItem("user");
  const userName = auth.currentUser?.displayName;

  return (
    <nav className="flex justify-between items-center bg-black h-20 text-white">
      <Link to="/">Senior Learning</Link>
      <div className="flex">
        {user && (
          <div className="flex justify-center items-center gap-3">
            <FaRegCircleUser />
            <span>{userName}</span>
          </div>
        )}
        {!user && <Link to="/login">Sign-in</Link>}
      </div>
    </nav>
  );
};

export default NavBar;
