import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { changeFilter } from 'state/contacts/contactsSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const { register } = useForm();

  return (
    <label>
      Find contacts by name
      <input
        {...register('filter', {
          onChange: event => {
            dispatch(changeFilter(event.target.value.trim()));
          },
        })}
        type="text"
      />
    </label>
  );
};
