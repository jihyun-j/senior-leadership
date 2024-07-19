import React from "react";
import PageHeader from "../../components/PageHeader";
import Curriculum from "../../components/leadership-competencies/Curriculum";
import Faq from "../../components/leadership-competencies/Faq";
import PageTitle from "../../components/PageTitle";

const LeadershipCompetencies: React.FC = () => {
  return (
    <main>
      <PageHeader />
      <div className="max-w-screen-lg my-0 mx-auto">
        <PageTitle />
        <Curriculum />
        <Faq />
      </div>
    </main>
  );
};

export default LeadershipCompetencies;
