import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  @media screen and (min-width: 320px) {
    width: 320px;
    height: 568px;
  }
  @media screen and (min-width: 768px) {
    width: 768px;
    height: 1024px;
    background: #e5e5e5;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media screen and (min-width: 1280px) {
    width: 1280px;
    height: 720px;
    display: flex;
    flex-direction: row;
    background: #e4f0f0;
  }
`;
export const RegistrationImage = styled.svg`
  @media screen and (min-width: 768px) {
    width: 260px;
    height: 250px;
    z-index: 10;
    margin-top: 60px;
    margin-left: 114px;
    margin-right: 40px;
  }
  @media screen and (min-width: 1280px) {
    width: 435px;
    height: 420px;
    margin: 148px 0px 32px 0px;
  }
`;
export const Title = styled.h1`
  font-family: Poppins;
  font-size: 30px;
  font-weight: 400;
  z-index: 10;
`;
export const Upside = styled.div`
  @media screen and (min-width: 320px) {
    display: none;
  }
  @media screen and (min-width: 768px) {
    display: block;
    width: 768px;
    display: flex;
    align-items: center;
    margin-bottom: 50px;
  }
  @media screen and (min-width: 1280px) {
    display: flex;
    flex-direction: column;
    width: 549px;
    height: 720px;
    margin: 0;
    margin-right: 107px;
    background: #e5e5e5;
  }
`;
export const Elips1 = styled.img`
  @media screen and (min-width: 320px) {
    display: none;
  }
  @media screen and (min-width: 768px) {
    display: block;
    position: absolute;
    left: 0;
    bottom: 0;
  }
`;
export const Elips2 = styled.img`
  @media screen and (min-width: 320px) {
    display: none;
  }
  @media screen and (min-width: 768px) {
    display: block;
    position: absolute;
    right: 0;
    top: 0;
  }
`;
