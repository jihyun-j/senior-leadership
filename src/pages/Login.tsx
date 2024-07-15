import "firebase/compat/auth";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "firebase/compat/app";
import { auth } from "../firebase/config";
import { useEffect } from "react";
import { addUserData, getUserData } from "../util/api";
import { useFetchCategory } from "../hooks/useFetchCategory";
import { UserLearningCategoriesType } from "../types/users";

const Login: React.FC = () => {
  const uiConfig = {
    signInSuccessUrl: "/",
    signInOptions: [firebase.auth.EmailAuthProvider.PROVIDER_ID],
  };

  const categoriesData = useFetchCategory();
  const categoryResults = categoriesData?.map((category) => ({
    title: category.title,
    progress: category.progress ?? 0,
    subjects: category.subjects.map((subject) => ({
      title: subject.title,
      completed: subject.completed ?? false,
    })),
  })) as UserLearningCategoriesType[];

  useEffect(() => {
    const authObserver = auth.onAuthStateChanged(async (user) => {
      if (user) {
        try {
          const token = await auth.currentUser?.getIdToken();
          if (token) {
            localStorage.setItem("user_token", token);
            const userData = await getUserData(user.uid);
            if (!userData) {
              await addUserData({
                id: user.uid,
                email: user.email,
                categories: categoryResults,
              });
            } else {
              console.log(user.email);
            }
          }
        } catch (error) {
          console.log(error);
        }
      } else {
        localStorage.removeItem("user_token");
      }
    });
    return () => authObserver();
  }, [categoriesData]);

  return (
    <div>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
    </div>
  );
};

export default Login;
