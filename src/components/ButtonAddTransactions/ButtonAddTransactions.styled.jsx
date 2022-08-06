import styled from 'styled-components';

export const BtnAddTransactions = styled.button`
  margin: auto 20px 20px auto;
  width: 44px;
  height: 44px;
  border: none;
  border-radius: 50%;
  background-color: var(--light-green-color);
  box-shadow: 0px 6px 15px rgba(36, 204, 167, 0.5);

  // чтобы свг стояла в центре:
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;

  bottom: 40px;
  right: 40px;
  &:hover,
  &:focus {
    background-color: var(--light-green-hover-color);
  }
  @media (max-width: 767px) {
    bottom: 20px;
    right: 20px;
  }
  &:hover {
    cursor: pointer;
  }
`;
