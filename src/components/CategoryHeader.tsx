import React from "react";
import { useLocation } from "react-router";
import { navMenu } from "../util/nav";

const CategoryHeader = () => {
  const { pathname } = useLocation();

  return (
    <div>
      {navMenu
        .filter((item) => item.navLink === pathname)
        .map((item) => {
          return (
            <div key={item.navName}>
              <img src={`${item.navImage}`} alt="" />
            </div>
          );
        })}
    </div>
  );
};

export default CategoryHeader;
