import { SubCategoryHeaderPropsType } from "../../types/categories";

const SubCategoryHeader: React.FC<SubCategoryHeaderPropsType> = ({
  headerImg,
}) => {
  return (
    <div>
      <img src={`${headerImg}`} alt="" />
    </div>
  );
};

export default SubCategoryHeader;
