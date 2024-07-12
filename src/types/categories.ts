// Fetch Categories
export type ResourceType = {
  type: string;
  url: string;
  progress: number;
};

export type SubjectType = {
  title: string;
  description: string;
  progress: number;
  resource: ResourceType[];
};

export type CategoriesType = {
  title: string;
  description: string;
  definition: string[];
  path: string;
  image: string;
  headerImage: string;
  subjects: SubjectType[];
};

// SubCategoryHeader

export type CategoryHeaderPropsType = {
  headerImg: string[] | undefined;
};

export type SubjectPropsType = {
  subjects: SubjectType[][] | undefined;
};

export type VideoResourcePropsType = {
  url: string[];
  onEnded: () => void;
};
