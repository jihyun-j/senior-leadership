import React from "react";
import SubCategoryHeader from "../../components/leadership-competencies/SubCategoryHeader";
import { useFetchCategory } from "../../util/data";
import { useParams } from "react-router";
import LearningResources from "../../components/leadership-competencies/LearningResources";

const SubCategories: React.FC = () => {
  const categories = useFetchCategory();
  const { subCategory } = useParams();

  // 헤더 이미지만 추출해서 넣기
  const headerImg = categories
    ?.filter((category) => category.path === `/${subCategory}`)
    .map((category) => category.headerImage);

  // 러닝 리소스만 추출해서 넣기

  // path와 param 매치 시켜 필터

  return (
    <div>
      <SubCategoryHeader headerImg={headerImg} />
      {/* <LearningResources categories={categories} path={subCategory} />  */}
    </div>
  );
};

export default SubCategories;
