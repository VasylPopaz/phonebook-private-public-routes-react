import { useSelector } from 'react-redux';
//
import {
  selectContacts,
  selectError,
  selectFilter,
  selectFilteredContacts,
  selectIsLoading,
} from 'state';

export const useContacts = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const filter = useSelector(selectFilter);
  const filteredContacts = useSelector(selectFilteredContacts);

  return {
    contacts,
    isLoading,
    filter,
    error,
    filteredContacts,
  };
};
