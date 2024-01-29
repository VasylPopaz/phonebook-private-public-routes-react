import { ContactsListItem, Modal } from 'components';
import { useSelector } from 'react-redux';
import { useModal } from 'hooks/useModal';
import {
  selectContacts,
  selectError,
  selectFilteredContacts,
  selectIsLoading,
} from 'state';

export const ContactsList = () => {
  const { isOpen, toggleEditModal } = useModal();
  isOpen
    ? (document.body.style.overflow = 'hidden')
    : (document.body.style.overflow = 'auto');
  const isLoading = useSelector(selectIsLoading);
  const contacts = useSelector(selectContacts);
  const error = useSelector(selectError);
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <>
      <button
        onClick={toggleEditModal}
        className="btn mb-4 max-w-xs w-full bg-green-400 hover:bg-green-700 hover:text-white"
      >
        Add Contact
      </button>
      {contacts.length ? (
        <h2 className="text-violet-800 text-3xl font-bold text-center mb-4">
          Contacts - {contacts.length}
        </h2>
      ) : null}

      <div className="  max-h-screen overflow-auto">
        <ul className=" flex flex-col gap-2">
          {filteredContacts.map(item => {
            return <ContactsListItem key={item.id} item={item} />;
          })}
        </ul>
      </div>
      {!filteredContacts.length && contacts.length && !error && !isLoading ? (
        <h2 className="text-red-400 text-3xl font-bold text-center mb-4">
          We couldn't find anything.
        </h2>
      ) : null}
      {error ? (
        <h2 className="text-red-400 text-3xl font-bold text-center mt-4 mb-4">
          {error}
        </h2>
      ) : null}
      {isOpen && <Modal close={toggleEditModal}></Modal>}
    </>
  );
};
