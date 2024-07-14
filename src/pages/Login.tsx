import "firebase/compat/auth";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "firebase/compat/app";
import { auth } from "../firebase/config";
import { useEffect } from "react";

const Login: React.FC = () => {
  const uiConfig = {
    signInSuccessUrl: "/",
    signInOptions: [firebase.auth.EmailAuthProvider.PROVIDER_ID],
  };

  useEffect(() => {
    const authObserver = auth.onAuthStateChanged(async (user) => {
      if (user) {
        try {
          const token = await auth.currentUser?.getIdToken();
          if (token) {
            localStorage.setItem("user_token", token);
          }
        } catch (error) {
          console.log(error);
        }
      } else {
        localStorage.removeItem("user_token");
      }
    });
    return () => authObserver();
  }, []);

  return (
    <div>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
    </div>
  );
};

export default Login;
