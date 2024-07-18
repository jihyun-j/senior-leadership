import React, { useState } from "react";
import VideoResource from "./VideoResource";
import { UserDataTypeProps } from "../../../types/users";
import { updateLearningData } from "../../../util/api";

const SubjectCard: React.FC<UserDataTypeProps> = ({ subjects }) => {
  const [completedVideos, setCompletedVideos] = useState(true);
  const uid = localStorage.getItem("user_uid");

  const onEndedHandler = async (
    uid: string | null,
    categoryTitle: string,
    subjectTitle: string
  ) => {
    setCompletedVideos(completedVideos);
    await updateLearningData(uid, categoryTitle, subjectTitle);
  };

  return (
    <div className="grid grid-cols-3 gap-10">
      {subjects?.map((categories) =>
        categories.subjects.map((subject) => {
          const videoUrl = subject.resource.map((resource) => resource.url);
          const subjectTitle = subject.title;
          const categoryTitle = categories.title;
          return (
            <div key={subjectTitle}>
              <VideoResource
                url={videoUrl}
                onEnded={() => onEndedHandler(uid, categoryTitle, subjectTitle)}
              />
              <div>{subject.title}</div>
              <div>{subject.completed ? "Completed" : "Not Completed"}</div>
              <div>{subject.description}</div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default SubjectCard;
