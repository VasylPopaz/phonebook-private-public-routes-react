import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <div className="flex gap-4">
      <NavLink to={'/'}>Home</NavLink>
      {isLoggedIn && <NavLink to={'contacts'}>Contacts</NavLink>}
    </div>
  );
};
