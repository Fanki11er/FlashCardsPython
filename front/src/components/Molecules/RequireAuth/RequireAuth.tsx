import { Outlet, useLocation, Navigate } from 'react-router';
import useAuth from '../../../Hooks/useAuth';
import routes from '../../../Routes/routes';

const RequireAuth = () => {
  const { auth } = useAuth();
  const location = useLocation();
  const { login } = routes;
  return auth?.name && auth.settings ? <Outlet /> : <Navigate to={login} state={{ from: location }} replace />;
};

export default RequireAuth;
