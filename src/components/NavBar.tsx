import React from "react";
import { FaRegCircleUser } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase/config";

const NavBar: React.FC = () => {
  const user = localStorage.getItem("user_token");
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await auth.signOut();
      localStorage.removeItem("user_token");
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <nav className="flex justify-between items-center bg-black h-20 text-white">
      <Link to="/">Senior Learning</Link>

      {user ? (
        <>
          <FaRegCircleUser className="text-2xl" />
          <button onClick={handleSignOut}>Sign Out</button>
        </>
      ) : (
        <Link to="/login">Sign-in</Link>
      )}
    </nav>
  );
};

export default NavBar;
