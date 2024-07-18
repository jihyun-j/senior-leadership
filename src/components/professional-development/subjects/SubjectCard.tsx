import React from "react";
import { UserDataTypeProps } from "../../../types/users";
import { Link } from "react-router-dom";

const SubjectCard: React.FC<UserDataTypeProps> = ({ subjects }) => {
  return (
    <div className="max-w-screen-lg my-0 mx-auto ">
      <p>{subjects?.map((subject) => subject.progress)}</p>
      {subjects?.map((categories) =>
        categories.subjects.map((subject) => {
          const subjectTitle = subject.title;
          return (
            <div key={subjectTitle} className="grid grid-cols-3 gap-5 mb-10">
              <div className="col-span-2">
                <h5 className="text-h5">{subject.title}</h5>
                <p>{subject.description}</p>
                <span>{subject.completed ? "Completed" : "Not Completed"}</span>
                {subject.completed ? (
                  <Link
                    to={`/professional-development${categories.path}/${subject.title}`}>
                    Watch Again
                  </Link>
                ) : (
                  <Link
                    to={`/professional-development${categories.path}/${subject.title}`}>
                    Watch Now
                  </Link>
                )}
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default SubjectCard;
