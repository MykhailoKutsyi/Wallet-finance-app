import styled from 'styled-components';

export const ContainerStyled = styled.div`
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
  margin: 0 auto;

  @media (min-width: 320px) {
    width: 320px;
  }

  @media (min-width: 768px) {
    padding-left: 32px;
    padding-right: 32px;
    width: 768px;
  }

  @media (min-width: 1280px) {
    padding-left: 16px;
    padding-right: 16px;
    width: 1280px;
  }
`;
