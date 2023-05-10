import styled from 'styled-components';
export const StyledContacts = styled.li`
  padding-top: 5px;
  width: 500px;
  display: flex;
  justify-content: space-between;
`;

export const StyledButton = styled.button`
  cursor: pointer;
  margin-left: auto;

  &:hover {
    box-shadow: 0 0 5px red;
  }
`;

export const StyledName = styled.span`
  color: #000000;
`;

export const StyledNumber = styled.span`
  padding-left: 10px;
  color: #756060;
`;
