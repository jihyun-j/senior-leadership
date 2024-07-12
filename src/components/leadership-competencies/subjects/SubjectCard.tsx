import React from "react";
import { SubjectPropsType } from "../../../types/categories";
import VideoResource from "./VideoResource";

const SubjectCard: React.FC<SubjectPropsType> = ({ subjects }) => {
  return (
    <div className="grid grid-cols-3 gap-10">
      {subjects?.map((subject) =>
        subject.map((subject) => {
          return (
            <div key={subject.title}>
              <VideoResource
                url={subject.resource.map((resource) => resource.url)}
              />
              <span>
                {subject.resource.map((resource) => resource.progress)}
              </span>
              <p>{subject.title}</p>
              <p>{subject.description}</p>
            </div>
          );
        })
      )}
    </div>
  );
};

export default SubjectCard;
