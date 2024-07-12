import React from "react";
import SubjectCard from "./SubjectCard";
import { SubjectPropsType } from "../../../types/categories";

const SubjectList: React.FC<SubjectPropsType> = ({ subjects }) => {
  return (
    <div>
      <SubjectCard subjects={subjects} />
    </div>
  );
};

export default SubjectList;
