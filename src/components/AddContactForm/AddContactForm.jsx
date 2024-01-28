import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { selectContacts } from 'state/contacts/contactsSelectors';
import { addContact } from 'state/contacts/contactsOperations';

export function AddContactForm() {
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
    <form onSubmit={handleSubmit(submit)}>
      <label>
        Name
        <input {...register('name')} type="text" required />
      </label>
      <label>
        Number
        <input {...register('number')} type="tel" required />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
}
