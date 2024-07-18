import React from "react";

const Header: React.FC = () => {
  return (
    <div>
      <div className="relative">
        <img src="../assets/home-header.png" alt="home-header image" />
        <div className="absolute top-1/2 left-28">
          <span className="uppercase bg-black text-white px-4 py-2">
            resources for directors, vps &l25
          </span>
          <h1 className="text-h1 text-white">Leading@Autodesk</h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
