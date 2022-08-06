import styled from 'styled-components';

export const InfoContainer = styled.div`
  text-align: center;
  margin-top: 200px;
`;

export const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  /* position: relative; */

  @media (min-width: 768px) {
  }
`;

export const DashboardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 15px;

  @media (min-width: 768px) {
    padding-top: 32px;
  }
  @media (min-width: 1280px) {
    display: flex;
    flex-direction: row;

    padding-top: 40px;
    padding-left: 19px;
    padding-right: 16px;
  }
`;

export const HomeInfo = styled.div`
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
  }
  @media (min-width: 1280px) {
    display: flex;
    flex-direction: column;
    align-self: flex-start;
    align-items: flex-start;

    border-right: 1px solid #e7e5f2;

    margin-right: 69px;
    height: 100vh;
  }
`;

export const NavBalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: 32px;

  @media (min-width: 768px) {
    margin-top: 8px;
    margin-bottom: 20px;
    margin-right: 32px;
    align-items: start;
  }
`;

export const CurrencyWrapper = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
`;
