import axios from "axios";
import { CategoriesType } from "../types/categories";
import {
  UserLearningCategoriesType,
  UserLearningSubjectsType,
  UsersDataType,
} from "../types/users";

const categoryUrl = "http://localhost:3000/categories";
const userUrl = "http://localhost:3000/users";

// 카테고리 데이터 가져오기
export const getCategoryData = async (): Promise<CategoriesType[]> => {
  try {
    const response = await axios.get<CategoriesType[]>(categoryUrl);
    return response.data;
  } catch (error) {
    return [];
  }
};

// 유저 데이터 추가하기
export const addUserData = async (user: UsersDataType): Promise<void> => {
  try {
    const response = await axios.get(userUrl);
    const existingUsers: UsersDataType[] = response.data;
    const userExists = existingUsers.some(
      (existingUser) => existingUser.id === user.id
    );

    if (!userExists) {
      await axios.post(userUrl, user);
    }
  } catch (error) {
    console.log(error);
  }
};

// 유저 데이터 가져오기
export const getUserData = async (
  uid: string
): Promise<UsersDataType | null> => {
  try {
    const response = await axios.get<UsersDataType>(`${userUrl}/${uid}`);
    return response.data ? response.data : null;
  } catch (error) {
    return null;
  }
};

// 유저 데이터 업데이트
export const updateLearningData = async (
  uid: string | null,
  categoryTitle: string,
  subjectTitle: string
) => {
  try {
    const response = await axios.get<UsersDataType>(`${userUrl}/${uid}`);
    const userData = response.data;

    if (userData) {
      const updatedCategories = userData.categories.map(
        (category: UserLearningCategoriesType) => {
          if (category.title === categoryTitle) {
            const updatedSubjects = category.subjects.map(
              (subject: UserLearningSubjectsType) =>
                subject.title === subjectTitle
                  ? { ...subject, completed: true }
                  : subject
            );

            const completedCount = updatedSubjects.filter(
              (subject) => subject.completed
            ).length;
            const totalSubjects = updatedSubjects.length;
            const newProgress = (completedCount / totalSubjects) * 100;

            return {
              ...category,
              progress: newProgress,
              subjects: updatedSubjects,
            };
          }
          return category;
        }
      );

      await axios.patch(`${userUrl}/${uid}`, { categories: updatedCategories });
      return updatedCategories;
    }
  } catch (error) {
    console.log(error);
  }
};
