import React from "react";
import SubjectCard from "./SubjectCard";
import { UserDataTypeProps } from "../../../types/users";

const SubjectList: React.FC<UserDataTypeProps> = ({ subjects }) => {
  return (
    <div>
      <SubjectCard subjects={subjects} />
    </div>
  );
};

export default SubjectList;
