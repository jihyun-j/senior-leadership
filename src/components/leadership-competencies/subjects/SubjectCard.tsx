import React, { useState } from "react";
import { SubjectPropsType } from "../../../types/categories";
import VideoResource from "./VideoResource";
// import { useUpdateCompletion } from "../../../hooks/useUpdateCompletion";

const SubjectCard: React.FC<SubjectPropsType> = ({ subjects }) => {
  const [completedVideos, setCompletedVideos] = useState(true);
  // const { updateCompletion } = useUpdateCompletion();

  const onEndedHandler = async (title: string) => {
    setCompletedVideos(completedVideos);
    console.log(title, completedVideos);

    // await updateCompletion(title, completedVideos);
  };

  return (
    <div className="grid grid-cols-3 gap-10">
      {subjects?.map((subject) =>
        subject.map((subject) => {
          return (
            <div key={subject.title}>
              <VideoResource
                url={subject.resource.map((resource) => resource.url)}
                onEnded={() => onEndedHandler(subject.title)}
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
