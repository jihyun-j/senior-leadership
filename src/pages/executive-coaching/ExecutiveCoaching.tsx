import React from "react";
import PageHeader from "../../components/PageHeader";
import ExecutiveCoachingMain from "../../components/executive-coaching/ExecutiveCoachingMain";
import PageTitle from "../../components/PageTitle";

const ExecutiveCoaching: React.FC = () => {
  return (
    <main>
      <PageHeader />
      <div className="max-w-screen-lg my-0 mx-auto">
        <PageTitle />
        <ExecutiveCoachingMain />
      </div>
    </main>
  );
};

export default ExecutiveCoaching;
