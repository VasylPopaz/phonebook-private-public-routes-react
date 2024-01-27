import { useEffect } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilteredContacts } from 'state/selectors';
import { ContactsDescr, ContactsList, DeleteButton } from './Contacts.styled';
import { fetchContacts, deleteContact } from 'state/operations';

export const Contacts = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ContactsList>
      {filteredContacts.map((elem, index) => {
        return (
          <li key={nanoid()}>
            <div>
              <ContactsDescr>
                {elem.name}: {elem.number}
              </ContactsDescr>
              <DeleteButton
                type="button"
                onClick={() => dispatch(deleteContact(elem.id))}
              >
                Delete
              </DeleteButton>
            </div>
          </li>
        );
      })}
    </ContactsList>
  );
};
