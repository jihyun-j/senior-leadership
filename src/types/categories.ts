export type CategoriesType = {
  title: string;
  description: string;
  definition: string[];
  path: string;
  image: string;
  headerImage: string;
  subjects: SubjectType[];
};

export type SubjectType = {
  title: string;
  description: string;
  resource: ResourceType[];
};

export type ResourceType = {
  type: string;
  url: string;
};

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
