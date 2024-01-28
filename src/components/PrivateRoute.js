import { useAuth } from 'hooks/useAuth';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ redirectTo = '/', component: Component }) => {
  const { isRefreshing, isLoggedIn } = useAuth();
  return isLoggedIn || isRefreshing ? Component : <Navigate to={redirectTo} />;
};
