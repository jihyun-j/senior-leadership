import React from "react";
import { Link } from "react-router-dom";
import { navMenu } from "../../util/nav";

const Header: React.FC = () => {
  return (
    <div>
      <img src="../assets/home-header.png" alt="" />
      <div className="flex flex-row">
        {navMenu.map((nav) => (
          <Link
            to={`${nav.navLink}`}
            className="bg-black text-white"
            key={nav.navName}>
            {nav.navName}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Header;
