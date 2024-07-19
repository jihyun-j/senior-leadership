import React from "react";
import { useParams } from "react-router";
import CategoryHeader from "../../components/CategoryHeader";
import SubjectList from "../../components/professional-development/subjects/SubjsectList";
import { useFetchCategory } from "../../hooks/useFetchCategory";
import { useFetchUserData } from "../../hooks/useFetchUserData";

const SubjectsPage: React.FC = () => {
  const categories = useFetchCategory();
  const { categoryPath } = useParams();
  const userData = useFetchUserData();

  // 카테고리 헤더 이미지만 추출
  const headerImg = categories
    ?.filter((category) => category.path === `/${categoryPath}`)
    .map((category) => category.headerImage);

  // 각 카테고리별 주제 추출
  const currentUserSubjects = userData?.categories
    .filter((category) => category.path === `/${categoryPath}`)
    .map((categories) => categories);

  return (
    <div>
      <CategoryHeader headerImg={headerImg} />
      <SubjectList subjects={currentUserSubjects} />
    </div>
  );
};

export default SubjectsPage;
