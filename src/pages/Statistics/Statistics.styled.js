import styled from 'styled-components';

export const AsideWrapper = styled.div`
  display: block;
  padding: 15px 10px;
  @media (min-width: 320px) {
    padding: 32px 0px;
    width: 100%;
    height: max-content;
  }

  @media (min-width: 768px) {
    padding: 32px;
    width: 768px;
    height: max-content;
  }

  @media (min-width: 1280px) {
    display: flex;
    padding: 40px 16px 0px 19px;
    width: 1280px;
    height: 897px;
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
