import { SubjectType } from "./categories";

export type UsersDataType = {
  id: string;
  email: string | null;
  categories: UserLearningCategoriesType[];
};

export type UserLearningCategoriesType = {
  title: string;
  progress: number;
  subjects: UserLearningSubjectsType[];
};

export type UserLearningSubjectsType = Omit<
  SubjectType,
  "description" | "resource"
>;
