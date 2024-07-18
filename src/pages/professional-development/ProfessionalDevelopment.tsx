import React from "react";
import PageHeader from "../../components/PageHeader";
import CategoryCard from "../../components/professional-development/CategoryCards";
import Header from "../../components/professional-development/Header";

const ProfessionalDevelopment: React.FC = () => {
  return (
    <>
      <PageHeader />

      <Header />
      <CategoryCard />
    </>
  );
};

export default ProfessionalDevelopment;
