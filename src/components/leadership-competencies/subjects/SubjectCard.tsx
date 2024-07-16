import React, { useState } from "react";
import VideoResource from "./VideoResource";
// import { useParams } from "react-router";
import { UserLearningSubjectsProps } from "../../../types/users";

const SubjectCard: React.FC<UserLearningSubjectsProps> = ({ subjects }) => {
  const [completedVideos, setCompletedVideos] = useState(true);
  // const uid = localStorage.getItem("user_token");
  // const { categoryName } = useParams();
  // const replaceCategoryName = categoryName?.replace(/\b\w/g, (match) =>
  //   match.toUpperCase()
  // );

  const onEndedHandler = async () => {
    console.log("end");
    setCompletedVideos(completedVideos);
    // await updateSubjectCompletion(uid, categoryTitle, subjectTitle);
  };

  return (
    <div className="grid grid-cols-3 gap-10">
      {subjects?.map((subject) =>
        subject.subjects.map((subject) => {
          return (
            <div>
              <VideoResource
                url={subject.resource.map((resource) => resource.url)}
                onEnded={onEndedHandler}
              />

              <span>{subject.completed ? "Completed" : "Not Compeleted"}</span>
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
