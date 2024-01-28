import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { signUp } from 'state/auth/authOperations';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const { register, handleSubmit, reset } = useForm();

  const submit = data => {
    dispatch(signUp(data));
    reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(submit)}>
        <label>
          Username
          <input {...register('name')} type="text" required />
        </label>
        <label>
          Email
          <input {...register('email')} type="email" required />
        </label>
        <label>
          Password
          <input
            {...register('password')}
            type="password"
            minLength={7}
            required
          />
        </label>
        <button type="submit">Sign up</button>
        <p>
          Already have an account? Login <Link to={'/login'}>here</Link>
        </p>
      </form>
    </div>
  );
};
