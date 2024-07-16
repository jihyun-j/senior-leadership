import React from "react";
import { useParams } from "react-router";
import CategoryHeader from "../../components/CategoryHeader";
import SubjectList from "../../components/leadership-competencies/subjects/SubjsectList";
import { useFetchCategory } from "../../hooks/useFetchCategory";
import { useFetchUserData } from "../../hooks/useFetchUserData";

const SubjectsPage: React.FC = () => {
  const categories = useFetchCategory();
  const { categoryName } = useParams();
  const userData = useFetchUserData();

  console.log(userData);
  // 카테고리 헤더 이미지만 추출
  const headerImg = categories
    ?.filter((category) => category.path === `/${categoryName}`)
    .map((category) => category.headerImage);

  // 각 카테고리별 주제 추출
  const subjects = categories
    ?.filter((category) => category.path === `/${categoryName}`)
    .map((category) => category.subjects);

  return (
    <div>
      <CategoryHeader headerImg={headerImg} />
      <SubjectList subjects={subjects} />
    </div>
  );
};

export default SubjectsPage;
