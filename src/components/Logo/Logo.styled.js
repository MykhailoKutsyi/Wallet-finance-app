import styled from 'styled-components';

export const LogoWrapper = styled.div`
  padding: 15px 0px;
  @media (min-width: 768px) {
    padding: 20px 0px;
  }
`;

export const LogoLink = styled.a`
  text-decoration: none;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const LogoIconWrapper = styled.svg`
  height: 30px;
  width: 30px;

  @media (min-width: 768px) {
    height: 40px;
    width: 40px;
  }
`;

export const LogoSpan = styled.span`
  font: Poppins;
  font-weight: 700;
  font-size: 26px;
  line-height: 1.5;
  margin-left: 15px;
  color: #000;

  @media (min-width: 768px) {
    font-size: 30px;
    margin-left: 20px;
  }
`;
