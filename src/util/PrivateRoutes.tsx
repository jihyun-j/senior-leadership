import { Navigate, Outlet } from "react-router";

const PrivateRoutes = () => {
  const user = localStorage.getItem("user_token");

  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
