import styled from 'styled-components';

export const LogoBox = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: auto;
`;

export const LogoutBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;

  width: 100vw;
  height: 100vh;
  padding: 20px;
  background: var(--white-color);

  @media (min-width: 768px) {
    width: 540px;
    height: 508px;
    border-radius: 20px;
  }
`;
export const LogoutBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.25);
`;
export const LogoutText = styled.p`
  display: flex;
  margin-left: auto;
  margin-right: auto;

  width: 280px;
  font-family: 'Poppins';
  font-style: normal;
  font-size: 30px;
  line-height: 45px;
  display: flex;
  align-items: center;
  text-align: center;

  color: var(--black-color);
`;

export const LogoutBtnY = styled.button`
  width: 280px;
  height: 50px;
  background: var(--category-leisure-color);
  border-radius: 20px;
  border: none;

  font-style: normal;
  font-size: 18px;
  line-height: 27px;
  text-align: center;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  cursor: pointer;

  color: var(--white-color);
`;
export const LogoutBtnN = styled(LogoutBtnY)`
  margin-top: 20px;
  background: var(--white-color);
  border: 1px solid var(--blue-color);

  color: var(--blue-color);
`;

export const BtnBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto auto 0px auto;
`;
