export type CategoriesType = {
  title: string;
  description: string;
  definition: string[];
  path: string;
  image: string;
  headerImage: string;
  progress: number;
  subjects: SubjectType[];
};

export type SubjectType = {
  title: string;
  description: string;
  completed: boolean;
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
