import axios from "axios";
import { useEffect, useState } from "react";
import { CategoriesType } from "../types/categories";

// API
const baseUrl = "http://localhost:3000/categories";

const fetchCategoryData = async (): Promise<CategoriesType[]> => {
  try {
    const response = await axios.get<CategoriesType[]>(baseUrl);
    return response.data;
  } catch (error) {
    return [];
  }
};

// CUSTOM HOOK
export const useFetchCategory = () => {
  const [data, setData] = useState<CategoriesType[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchCategoryData();
        setData(result);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return data;
};
