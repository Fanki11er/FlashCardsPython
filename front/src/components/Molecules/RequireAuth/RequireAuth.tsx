import { Navigate, Outlet } from "react-router-dom";
import UserProvider from "../../../Providers/AuthProvider";
import routes from "../../../Routes/routes";

const RequireAuth = () => {
  const { login } = routes;

  const token = sessionStorage.getItem("access");

  return token ? (
    <UserProvider>
      <Outlet />
    </UserProvider>
  ) : (
    <Navigate to={login} />
  );
};

export default RequireAuth;
