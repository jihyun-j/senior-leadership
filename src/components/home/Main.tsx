import React from "react";
import { Link } from "react-router-dom";
import { navMenu } from "../../util/nav";

const Main: React.FC = () => {
  return (
    <main className="grid grid-cols-2 max-w-screen-lg">
      <div>
        <h3 className="text-h3">Welcome to Leading@Autodesk</h3>
        <p>
          Here you will find resources and information to support the learning
          and development of Autodesk senior leaders, including
        </p>
      </div>
      <div className="flex flex-col w-full h-full gap-5">
        {navMenu.map((nav) => (
          <>
            <div key={nav.navName}>
              <h2>{nav.navName}</h2>
              <p>{nav.description}</p>
            </div>
            <Link to={`${nav.navLink}`}>Learn More</Link>
          </>
        ))}
      </div>
    </main>
  );
};

export default Main;
