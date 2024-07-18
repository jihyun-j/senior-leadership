import React from "react";
import { useFetchCategory } from "../../hooks/useFetchCategory";
import Faq from "./Faq";

const Curriculum = () => {
  const curriculumInfo = useFetchCategory();
  return (
    <div>
      <h2>Leadership is a journey -</h2>
      <p>
        and the journey starts with clarity on what it means to be a leader. On
        this page, you will find more information on our Leadership Competency
        Framework. See the Leadership Competency Framework below and discuss
        with your manager key areas where you would like to develop and focus
        this year.
      </p>

      {curriculumInfo?.map((info) => {
        return (
          <div>
            <p>{info.title}</p>
            <ul>
              {info.definition.map((definition) => (
                <li>{definition}</li>
              ))}
            </ul>
          </div>
        );
      })}

      <Faq />
    </div>
  );
};

export default Curriculum;
