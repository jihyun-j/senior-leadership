import React, { useEffect, useState } from "react";
import { SubjectPropsType } from "../../../types/categories";
import VideoResource from "./VideoResource";

const SubjectCard: React.FC<SubjectPropsType> = ({ subjects }) => {
  const onEndedHandler = () => {
    // 비디오 시청이 끝나면 해당 주제에 대한 progress가 100%가 된다.
    console.log("End!");
  };

  return (
    <div className="grid grid-cols-3 gap-10">
      {subjects?.map((subject) =>
        subject.map((subject) => {
          return (
            <div key={subject.title}>
              <VideoResource
                url={subject.resource.map((resource) => resource.url)}
                onEnded={onEndedHandler}
              />
              <span>{subject.progress}</span>
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
