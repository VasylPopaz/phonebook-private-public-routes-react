import { NavLink } from 'react-router-dom';

export const AuthNav = () => {
  return (
    <ul className="flex gap-4 ">
      <li>
        <NavLink className="nav-link" to={'register'}>
          Sign up
        </NavLink>
      </li>
      <li>
        <NavLink className="nav-link" to={'login'}>
          Sign in
        </NavLink>
      </li>
    </ul>
  );
};
