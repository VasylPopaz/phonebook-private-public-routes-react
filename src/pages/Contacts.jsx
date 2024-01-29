import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContactsList, Filter } from 'components';
import { fetchContacts, selectIsLoading } from 'state';
import { Loader } from 'components';

const Contacts = () => {
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className="py-8 mx-auto max-w-[320px]">
      <Filter />
      <ContactsList />
      {isLoading && <Loader />}
    </div>
  );
};

export default Contacts;
