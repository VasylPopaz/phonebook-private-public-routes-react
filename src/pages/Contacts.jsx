import { ContactsList, Filter } from 'components';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'state/contacts/contactsOperations';

const Contacts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      {/* <AddContactForm /> */}
      <Filter />
      <ContactsList />
    </div>
  );
};

export default Contacts;
