import axios from "axios";
import { CategoriesType } from "../types/categories";

const baseUrl = "http://localhost:3000/categories";

export const fetchCategoryData = async (): Promise<CategoriesType[]> => {
  try {
    const response = await axios.get<CategoriesType[]>(baseUrl);
    return response.data;
  } catch (error) {
    return [];
  }
};

// export const updateSubjectCompletion = async (
//   title: string,
//   completed: boolean
// ): Promise<void> => {
//   try {
//     await axios.post(baseUrl, {
//       title,
//       completed,
//     });
//   } catch (error) {
//     console.log(error);
//     return;
//   }
// };
