import PropTypes from 'prop-types';
import {
  StyledContacts,
  StyledButton,
  StyledName,
  StyledNumber,
} from './Contact.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';

export const Contact = ({ name, phone, id }) => {
  const distpach = useDispatch();
  return (
    <StyledContacts>
      <StyledName>{name}: </StyledName>
      <StyledNumber>{phone} </StyledNumber>
      <StyledButton
        onClick={() => {
          distpach(deleteContact({ id, name }));
        }}
      >
        Delete
      </StyledButton>
    </StyledContacts>
  );
};
Contact.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
