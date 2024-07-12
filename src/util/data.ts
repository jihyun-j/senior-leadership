import axios from "axios";
import { useEffect, useState } from "react";

// Types

type ResourceType = {
  type: string;
  url: string;
  progress: number;
};

type SubCategoriesType = {
  title: string;
  description: string;
  progress: number;
  resource: ResourceType[];
};

interface Categories {
  title: string;
  description: string;
  definition: string[];
  path: string;
  image: string;
  headerImage: string;
  subCategories: SubCategoriesType[];
}

// API
const baseUrl = "http://localhost:3000/categories";

const fetchCategoryData = async (): Promise<Categories[]> => {
  try {
    const response = await axios.get<Categories[]>(baseUrl);
    return response.data;
  } catch (error) {
    return [];
  }
};

// CUSTOM HOOK
export const useFetchCategory = () => {
  const [data, setData] = useState<Categories[] | null>(null);

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
