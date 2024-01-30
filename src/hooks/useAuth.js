import { useSelector } from 'react-redux';
//
import {
  selectUserName,
  selectIsLoggedIn,
  selectIsRefreshing,
  selectAuthError,
} from 'state';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectUserName);
  const error = useSelector(selectAuthError);

  return {
    isLoggedIn,
    isRefreshing,
    user,
    error,
  };
};
