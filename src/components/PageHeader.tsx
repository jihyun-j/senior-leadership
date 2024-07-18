import { useLocation } from "react-router";
import { navMenu } from "../util/nav";

const PageHeader: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <div>
      {navMenu
        .filter((item) => item.navLink === pathname)
        .map((item) => {
          return (
            <div key={item.navName}>
              <img
                src={`${item.navImage}`}
                alt={`${item.navName} header image`}
              />
              <h2>{item.navName}</h2>
            </div>
          );
        })}
    </div>
  );
};

export default PageHeader;
