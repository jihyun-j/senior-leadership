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
