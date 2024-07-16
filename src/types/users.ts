export type UsersDataType = {
  id: string;
  email: string | null;
  categories: UserLearningCategoriesType[];
};

export type UserLearningCategoriesType = {
  title: string;
  progress: number;
  path: string;
  subjects: UserLearningSubjectsType[];
};

export type UserLearningSubjectsType = {
  title: string;
  description: string;
  completed: boolean;
};

export type UserLearningSubjectsProps = {
  subjects: UserLearningCategoriesType[] | undefined;
};
