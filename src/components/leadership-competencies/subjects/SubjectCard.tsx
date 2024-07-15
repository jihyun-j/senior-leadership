import React, { useState } from "react";
import { SubjectPropsType } from "../../../types/categories";
import VideoResource from "./VideoResource";

const SubjectCard: React.FC<SubjectPropsType> = ({ subjects }) => {
  const [completedVideos, setCompletedVideos] = useState(true);

  const onEndedHandler = async () => {
    setCompletedVideos(completedVideos);
  };

  return (
    <div className="grid grid-cols-3 gap-10">
      {subjects?.map((subject) =>
        subject.map((subject) => {
          return (
            <div key={subject.title}>
              <VideoResource
                url={subject.resource.map((resource) => resource.url)}
                onEnded={() => onEndedHandler()}
              />
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
