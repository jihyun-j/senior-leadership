import React from "react";

import { Link } from "react-router-dom";
import { useFetchCategory } from "../../hooks/useFetchCategory";

const CategoryCard: React.FC = () => {
  const categories = useFetchCategory();

  return (
    <div className="grid grid-cols-3">
      {categories?.map((category) => {
        return (
          <Link
            to={`/leadership-competencies${category.path}`}
            key={category.title}>
            <img src={`${category.image}`} alt="" />
            <h3>{category.title}</h3>
            <p>{category.description}</p>
          </Link>
        );
      })}
    </div>
  );
};
export default CategoryCard;
