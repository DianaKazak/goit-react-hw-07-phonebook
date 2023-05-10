import { Contact } from 'components/Contact/Contact';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { StyledContactList, StyledContactWraper } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { getContacts, getFilter, getIsLoading } from 'redux/selectors';
import { fetchContacts } from '../../redux/operations';
import ContentLoader from '../ContentLoader/ContentLoader';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const isLoading = useSelector(getIsLoading);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const formattedFilter = filter.toLowerCase();
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(formattedFilter)
  );
  return (
    <StyledContactWraper>
      <StyledContactList>
        {filteredContacts.map(({ id, name, phone }) => (
          <Contact key={id} name={name} phone={phone} id={id} />
        ))}

        {isLoading && <ContentLoader />}
      </StyledContactList>
    </StyledContactWraper>
  );
};
