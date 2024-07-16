import React, { useState } from "react";
import { SubjectPropsType } from "../../../types/categories";
import VideoResource from "./VideoResource";
// import { updateSubjectCompletion } from "../../../util/api";
import { useParams } from "react-router";

const SubjectCard: React.FC<SubjectPropsType> = ({ subjects }) => {
  const [completedVideos, setCompletedVideos] = useState(true);
  const uid = localStorage.getItem("user_token");
  const { categoryName } = useParams();
  const replaceCategoryName = categoryName?.replace(/\b\w/g, (match) =>
    match.toUpperCase()
  );

  // const onEndedHandler = async (
  //   uid: string | null,
  //   categoryTitle: string | undefined,
  //   subjectTitle: string
  // ) => {
  //   console.log("end");
  //   setCompletedVideos(completedVideos);
  //   // await updateSubjectCompletion(uid, categoryTitle, subjectTitle);
  // };

  return (
    <div className="grid grid-cols-3 gap-10">
      {subjects?.map((subject) =>
        subject.map((subject) => {
          return (
            <div key={subject.title}>
              {/* <VideoResource
                url={subject.resource.map((resource) => resource.url)}
                onEnded={() =>
                  onEndedHandler(uid, replaceCategoryName, subject.title)
                }
              /> */}
              <p>{subject.completed ? "true" : "false"}</p>
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
