import React from "react";
import { useFetchCategory } from "../../util/data";
import { useParams } from "react-router";
import CategoryHeader from "../../components/CategoryHeader";
import SubjectList from "../../components/leadership-competencies/subjects/SubjsectList";

const SubjectsPage: React.FC = () => {
  const categories = useFetchCategory();
  const { categoryName } = useParams();

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
