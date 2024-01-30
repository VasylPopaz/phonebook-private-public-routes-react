import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
//
import { Input } from 'components';
//
import { logIn } from 'state';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const { register, handleSubmit, reset } = useForm();

  const submit = data => {
    dispatch(logIn(data))
      .unwrap()
      .then(() => reset())
      .catch(error => {
        switch (String(error)) {
          case '400':
            toast.error('Wrong email or password!');
            break;
          case '404':
            toast.error('Sorry, something went wrong. Please try again.');
            break;
          default:
            break;
        }
      });
  };

  return (
    <div className="flex justify-center items-center">
      <div className="hero-content flex-col gap-8">
        <div className="text-center lg:text-left">
          <h2 className="text-violet-800 text-5xl font-bold">Login</h2>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form
            onSubmit={handleSubmit(submit)}
            className="card-body text-lg font-bold text-black  bg-white"
          >
            <Input
              register={register}
              name="email"
              label="Email"
              type="email"
            />
            <Input
              register={register}
              name="password"
              label="Password"
              type="password"
              minLength={7}
            />
            <div className="form-control mt-6">
              <button className="btn text-black bg-violet-400 hover:bg-violet-700 hover:text-white">
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
  );
};
