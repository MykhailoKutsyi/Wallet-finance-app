import styled from 'styled-components';

export const BtnAddTransactions = styled.button`
  margin: auto 40px 40px auto;

  width: 44px;
  height: 44px;
  border: none;
  border-radius: 50%;
  background-color: var(--light-green-color);
  box-shadow: 0px 6px 15px rgba(36, 204, 167, 0.5);

  display: flex;
  justify-content: center;
  align-items: center;

  margin: auto 40px 40px auto;
  &:hover,
  &:focus {
    background-color: var(--light-green-hover-color);
  }
  @media (max-width: 767px) {
    margin: auto 20px 20px auto;
  }
  &:hover {
    cursor: pointer;
  }
`;
