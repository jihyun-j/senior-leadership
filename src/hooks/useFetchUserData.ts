import { useEffect, useState } from "react";
import { getUserData } from "../util/api";
import { UsersDataType } from "../types/users";

export const useFetchUserData = () => {
  const [data, setData] = useState<UsersDataType[] | null>(null);
  const uid = localStorage.getItem("user_uid");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        if (uid) {
          const result = await getUserData();
          console.log(result);
          setData(result);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchUserData();
  }, []);

  return data;
};
