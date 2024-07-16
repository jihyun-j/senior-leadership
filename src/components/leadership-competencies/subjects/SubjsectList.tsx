import React from "react";
import SubjectCard from "./SubjectCard";
import { UserLearningSubjectsProps } from "../../../types/users";

const SubjectList: React.FC<UserLearningSubjectsProps> = ({ subjects }) => {
  return (
    <div>
      <SubjectCard subjects={subjects} />
    </div>
  );
};

export default SubjectList;
