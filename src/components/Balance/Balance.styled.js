import styled from 'styled-components';

export const BalanceBox = styled.div`
  width: 280px;
  height: 80px;
  padding: 8px 32px;
  background: #ffffff;
  border-radius: 30px;

  @media (min-width: 768px) {
    width: 336px;
    padding: 8px 40px;
  }
  @media (min-width: 1280px) {
    width: 395px;
  }
`;

export const BalanceTitle = styled.p`
  margin-bottom: 11.8px;
  font-family: 'Circe';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  text-transform: uppercase;
  color: #a6a6a6;
  @media (min-width: 1280px) {
    margin-bottom: 12px;
  }
`;

export const BalanceValue = styled.p`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 45px;
  display: flex;
  align-items: center;

  color: #000000;
`;
