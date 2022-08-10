import styled from 'styled-components';

export const BtnAddTransactions = styled.button`
  // margin: auto 40px 40px auto;
  padding: 12px;
  position: fixed;

  bottom: 40px;
  right: 40px;
  width: 44px;
  height: 44px;
  border: none;
  border-radius: 50%;
  background-color: var(--light-green-color);
  box-shadow: 0px 6px 15px rgba(36, 204, 167, 0.5);

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 767px) {
    // position: absolute;
    bottom: 20px;
    right: 20px;
    // margin-top: 20px;
    // margin-right: 20px;
  }
  &:hover,
  &:focus {
    background-color: var(--light-green-hover-color);
    cursor: pointer;
  }
`;
