import { useAuth } from 'hooks/useAuth';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logIn } from 'state';

export const LoginForm = () => {
  const { isRefreshing } = useAuth();
  const dispatch = useDispatch();

  const { register, handleSubmit, reset } = useForm();
  const submit = data => {
    dispatch(logIn(data));
    reset();
  };

  const inputStyle =
    'px-2  h-12 border-2 border-violet-400 rounded-lg outline-none  text-lg w-full max-w-xs focus:border-violet-600';

  return (
    <>
      {!isRefreshing && (
        <div className="flex justify-center items-center">
          <div className="hero-content flex-col gap-8">
            <div className="text-center lg:text-left">
              <h2 className="text-violet-800 text-5xl font-bold">Login</h2>
            </div>
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form
                onSubmit={handleSubmit(submit)}
                className="card-body text-lg font-bold"
              >
                <div className="form-control">
                  <label className="label">Email</label>
                  <input
                    {...register('email')}
                    type="email"
                    placeholder="..."
                    className={inputStyle}
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">Password</label>
                  <input
                    {...register('password')}
                    type="password"
                    placeholder="..."
                    className={inputStyle}
                    required
                  />
                </div>
                <div className="form-control mt-6">
                  <button className="btn bg-violet-400 hover:bg-violet-700 hover:text-white">
                    Log in
                  </button>
                </div>
                <p>
                  Don't have an account ?
                  <Link
                    to={'/register'}
                    className="underline text-violet-400 hover:text-violet-700"
                  >
                    {' '}
                    Sign up
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
