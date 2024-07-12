import React from "react";
import { SubCategoriesPropsType } from "../../types/categories";

const LearningResources: React.FC<SubCategoriesPropsType> = ({
  subCategories,
}) => {
  return (
    <div>
      {subCategories?.map((subCategory) => {
        return (
          <div>
            {subCategory.map((category) => {
              return <div>{category.title}</div>;
            })}
          </div>
        );
      })}
    </div>
  );
};

export default LearningResources;
