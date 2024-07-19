import { CategoryHeaderPropsType } from "../types/categories";

const CategoryHeader: React.FC<CategoryHeaderPropsType> = ({ headerImg }) => {
  return <img src={`${headerImg}`} alt="" />;
};

export default CategoryHeader;
