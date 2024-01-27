import { ToastContainer } from 'react-toastify';
import { Section, Filter, Contacts, Phonebook, Loader } from 'components';
import 'react-toastify/dist/ReactToastify.css';
import { Container, StyledTitle } from './App.styled';
import { useSelector } from 'react-redux';
import {
  selectContacts,
  selectError,
  selectFilteredContacts,
  selectIsLoading,
} from 'state/selectors';

export function App() {
  const contacts = useSelector(selectContacts);
  const filteredContacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  return (
    <>
      <Container>
        <Section title="Phonebook">
          <Phonebook />
        </Section>

        <Section title="Contacts">
          <Filter />
          <Contacts />
          {contacts.length && !filteredContacts.length ? (
            <StyledTitle>No matches!</StyledTitle>
          ) : null}
        </Section>
      </Container>
      {error && <StyledTitle>{error}!</StyledTitle>}
      {isLoading && <Loader />}
      <ToastContainer autoClose={2000} />
    </>
  );
}
