import { useLocation } from "react-router";
import { navMenu } from "../util/nav";

const PageTitle = () => {
  const { pathname } = useLocation();
  return (
    <div>
      {navMenu
        .filter((item) => item.navLink === pathname)
        .map((item) => {
          return <h2 className="text-h2">{item.navName}</h2>;
        })}
    </div>
  );
};

export default PageTitle;
