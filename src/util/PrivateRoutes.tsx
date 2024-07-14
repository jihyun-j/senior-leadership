import { Navigate, Outlet } from "react-router";

const PrivateRoutes = () => {
  const user = null;

  return user ? <Outlet /> : <Navigate to="/login " />;
};

export default PrivateRoutes;
