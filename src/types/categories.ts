// Fetch Categories
export type ResourceType = {
  type: string;
  url: string;
  progress: number;
};

export type SubCategoriesType = {
  title: string;
  description: string;
  progress: number;
  resource: ResourceType[];
};

export interface CategoriesType {
  title: string;
  description: string;
  definition: string[];
  path: string;
  image: string;
  headerImage: string;
  subCategories: SubCategoriesType[];
}

// SubCategoryHeader

export interface SubCategoryHeaderType {
  headerImg: string[] | undefined;
}
