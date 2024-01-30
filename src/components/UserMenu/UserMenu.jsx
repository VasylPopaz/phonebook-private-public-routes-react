import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
//
import { useAuth } from 'hooks';
import { logOut } from 'state';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const handleLogOutClick = () => {
    dispatch(logOut()).catch(() =>
      toast.error('Sorry, something went wrong. Please try again.')
    );
  };

  return (
    <div className="flex gap-4 items-center sm:flex-col sm:items-end ">
      <p>
        Welcome , <span className="font-bold">{user}</span>
      </p>
      <button
        className="text-white text-lg bg-violet-400 hover:text-violet-950  border-2 border-violet-900 rounded-md p-1"
        type="button"
        onClick={handleLogOutClick}
      >
        Logout
      </button>
    </div>
  );
};
