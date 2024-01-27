import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { FormInput, FormLabel } from 'components/Phonebook/Phonebook.styled';
import { changeFilter } from 'state/filterSlice';

export const Filter = ({ onChange }) => {
  const dispatch = useDispatch();
  const { register } = useForm();

  return (
    <FormLabel>
      Find contacts by name
      <FormInput
        {...register('filter', {
          onChange: event => {
            dispatch(changeFilter(event.target.value.trim()));
          },
        })}
        type="text"
      />
    </FormLabel>
  );
};
