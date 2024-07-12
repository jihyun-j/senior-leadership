import { SubCategoryHeaderType } from "../../types/categories";

const SubCategoryHeader: React.FC<SubCategoryHeaderType> = ({ headerImg }) => {
  return (
    <div>
      <img src={`${headerImg}`} alt="" />
    </div>
  );
};

export default SubCategoryHeader;
