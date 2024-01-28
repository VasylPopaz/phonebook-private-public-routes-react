import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { logIn } from 'state/auth/authOperations';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const { register, handleSubmit, reset } = useForm();

  const submit = data => {
    dispatch(logIn(data));
    reset();
  };
  return (
    <div className="mx-auto w-96 p-4 ">
      <form
        onSubmit={handleSubmit(submit)}
        className="py-12 rounded bg-teal-50 mx-auto flex flex-col gap-6  items-center font-bold text-lg "
      >
        <label className="flex flex-col gap-1 ">
          Email
          <input
            {...register('email')}
            type="email"
            placeholder="..."
            className=" input input-bordered input-accent w-full max-w-xs text-lg h-auto py-1"
            required
          />
        </label>
        <label className="flex flex-col gap-1">
          Password
          <input
            {...register('password')}
            type="password"
            placeholder="..."
            className=" input input-bordered input-accent w-full max-w-xs text-lg h-auto py-1"
            required
          />
        </label>
        <button type="submit" className="btn btn-outline btn-accent w-40 h-12">
          Log In
        </button>
      </form>
    </div>
  );
};
