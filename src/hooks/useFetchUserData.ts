import { useEffect, useState } from "react";
import { getUserData } from "../util/api";
import { UsersDataType } from "../types/users";

export const useFetchUserData = () => {
  const [data, setData] = useState<UsersDataType | null>(null);
  const uid = localStorage.getItem("user_uid");

  useEffect(() => {
    const fetchUserData = async () => {
      if (uid) {
        try {
          const result = await getUserData(uid);
          setData(result);
        } catch (error) {
          console.log(error);
        }
      }
    };

    fetchUserData();
  }, []);

  return data;
};
