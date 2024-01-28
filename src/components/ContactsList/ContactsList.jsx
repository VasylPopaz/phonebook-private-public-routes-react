import { nanoid } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilteredContacts } from 'state/contacts/contactsSelectors';
import { deleteContact } from 'state/contacts/contactsOperations';

export const ContactsList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <>
      <ul>
        {filteredContacts.map(elem => {
          return (
            <li key={nanoid()}>
              <div>
                <p>
                  {elem.name}: {elem.number}
                </p>
                <button type="button">Edit</button>
                <button
                  type="button"
                  onClick={() => dispatch(deleteContact(elem.id))}
                >
                  Delete
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};
