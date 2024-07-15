import { useEffect, useState } from "react";
import { CategoriesType } from "../types/categories";
import { getCategoryData } from "../util/api";

export const useFetchCategory = () => {
  const [data, setData] = useState<CategoriesType[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getCategoryData();
        setData(result);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return data;
};
