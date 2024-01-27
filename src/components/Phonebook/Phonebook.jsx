import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { selectContacts } from 'state/selectors';
import { addContact } from 'state/operations';
import { AddButton, Form, FormInput, FormLabel } from './Phonebook.styled';

export function Phonebook() {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const { register, handleSubmit, reset } = useForm();
  const submit = data => {
    if (
      contacts.find(elem => elem.name.toLowerCase() === data.name.toLowerCase())
    )
      return toast.warning(`${data.name} is already in contacts!`);

    dispatch(addContact(data));
    reset();
  };

  return (
    <Form onSubmit={handleSubmit(submit)}>
      <FormLabel>
        Name
        <FormInput {...register('name')} type="text" required />
      </FormLabel>
      <FormLabel>
        Number
        <FormInput {...register('number')} type="tel" required />
      </FormLabel>
      <AddButton type="submit">Add contact</AddButton>
    </Form>
  );
}
