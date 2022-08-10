import styled from 'styled-components';

export const AsideWrapper = styled.div`
  display: block;

  padding-top: 15px;
  padding-bottom: 30px;

  @media (min-width: 320px) {
    width: 100%;
    height: max-content;
  }

  @media (min-width: 768px) {
    padding-top: 32px;
    width: 768px;
    height: max-content;
  }

  @media (min-width: 1280px) {
    display: flex;
    flex-direction: row;
    width: 1280px;
    padding-top: 40px;
  }
`;
export const Elips1 = styled.img`
  @media screen and (min-width: 320px) {
    display: none;
  }
  @media screen and (min-width: 768px) {
    width: 430px;
    display: block;
    position: absolute;
    left: 0;
    bottom: 0;
    filter: blur(50px);
  }
`;

export const BalanceWrapper = styled.div`
  @media (max-width: 767px) {
    display: none;
  }
`;
