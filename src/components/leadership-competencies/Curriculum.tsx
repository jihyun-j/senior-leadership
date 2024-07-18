import { Link } from "react-router-dom";
import { useFetchCategory } from "../../hooks/useFetchCategory";
import { FaArrowRightLong } from "react-icons/fa6";

const Curriculum = () => {
  const curriculumInfo = useFetchCategory();
  return (
    <div>
      <h2 className="text-h3">Leadership is a journey -</h2>
      <p>
        and the journey starts with clarity on what it means to be a leader. On
        this page, you will find more information on our Leadership Competency
        Framework. See the Leadership Competency Framework below and discuss
        with your manager key areas where you would like to develop and focus
        this year.
      </p>

      {curriculumInfo?.map((info) => {
        return (
          <div className="border border-light-slate p-5 mb-5 hover:bg-iris">
            <h4 className="text-h4">{info.title}</h4>
            <ul key={info.title}>
              {info.definition.map((definition) => (
                <li className="list-disc pl-5">{definition}</li>
              ))}
            </ul>
            <Link
              to={`/professional-development${info.path}`}
              className="flex justify-end items-center gap-2">
              <span>Learn more </span>
              <FaArrowRightLong />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Curriculum;
