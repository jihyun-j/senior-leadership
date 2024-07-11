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
    const unregisterAuthObserver = auth.onAuthStateChanged((user) => {
      localStorage.setItem("user", JSON.stringify(user?.uid));
    });
    return () => unregisterAuthObserver();
  }, []);

  return (
    <div>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
    </div>
  );
};

export default Login;
