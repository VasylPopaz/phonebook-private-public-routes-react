import { NavLink } from 'react-router-dom';

export const AuthNav = () => {
  return (
    <div className="flex gap-4">
      <NavLink to={'register'}>Sign up</NavLink>
      <NavLink to={'login'}>Login</NavLink>
    </div>
  );
};
