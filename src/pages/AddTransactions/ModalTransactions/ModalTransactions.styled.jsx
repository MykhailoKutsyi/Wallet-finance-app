import styled from 'styled-components';
import plus from 'assets/images/plus.svg';
import minus from 'assets/images/minus.svg';

export const TransactBackdrop = styled.div`
  z-index: 20;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.25);
`;

export const TransactContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  width: 320px;
  height: 100vh;
  padding: 10px;
  margin-left: auto;
  margin-right: auto;
  background: #ffffff;
  @media (min-width: 768px) {
    width: 540px;
    padding: 40px 73px;
    border-radius: 20px;
  }
`;

export const TransactBox = styled.div`
  width: 280px;
  padding-left: 10px;
  padding-right: 10px;
  margin-left: auto;
  margin-right: auto;
  @media (min-width: 768px) {
    padding: 0;
    width: 100%;
    /* padding: 40px 73px; */
  }
`;
export const TransButtonClose = styled.button`
  position: absolute;
  padding: 0;
  top: 20px;
  right: 20px;

  width: 16px;
  height: 16px;
  border: none;
  fill: black;
  background-color: transparent;
`;
export const TransactForm = styled.form``;

export const TransTitle = styled.h2`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 36px;
  text-align: center;
  color: #000000;
  @media (min-width: 768px) {
    font-size: 30px;
    line-height: 45px;
    margin-bottom: 40px;
  }
`;

export const CheckBoxWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-shrink: 0;
  width: 80px;
  height: 40px;
`;
export const CheckBoxLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 80px;
  height: 40px;
  border: 1px solid #e0e0e0;
  border-radius: 30px;
  background: #ffffff;
  cursor: pointer;
  &::after {
    content: '';
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: -5px;
    left: -4px;
    /* display: block; */
    border-radius: 50%;
    width: 44px;
    height: 44px;
    margin: 3px;
    background: #24cca7 url(${plus}) no-repeat center;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;
export const CheckBox = styled.input`
  position: absolute;
  opacity: 0;
  top: 0;
  left: 0;
  z-index: 1;
  border-radius: 15px;
  width: 80px;
  height: 40px;
  &:checked + ${CheckBoxLabel} {
    background: #ffffff;
    &::after {
      content: '';
      color: white;
      font-size: 44px;
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      top: -5px;
      right: -4px;
      border-radius: 50%;
      width: 44px;
      height: 44px;
      margin-left: 40px;
      background: #ff6596 url(${minus}) no-repeat center;
      transition: 0.2s;
    }
  }
`;
export const Income = styled.span`
  font-family: 'Circe';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height */
  color: ${({ checked }) =>
    checked ? 'var(--light-grey-color)' : 'var(--light-green-color)'};
`;

export const Expense = styled.span`
  font-family: 'Circe';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height */
  color: ${({ checked }) =>
    checked ? 'var(--ping-color)' : 'var(--light-grey-color)'};
`;

export const TransactHadleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const TransSumDateCommonBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;
export const TransactSumLabel = styled.label``;

export const TransactSumInput = styled.input`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 240px;
  height: 32px;
  padding-left: 20px;
  padding-right: 20px;
  margin-top: 40px;
  border: none;
  border-bottom: 1px solid #e0e0e0;
  @media (min-width: 768px) {
    /* display: flex;
     justify-content: center; */
    margin-right: auto;
    text-align: center;
    width: 181px;
  }
  &:focus {
    outline: 0;
    outline-color: transparent;
    outline-style: none;
  }
`;
export const DateTimeWrapper = styled.div`
  display: flex;
  height: 32px;
  width: 240px;
  margin-top: 40px;
  padding-left: 20px;
  padding-right: 20px;
  border-bottom: 1px solid #e0e0e0;
  @media (min-width: 768px) {
    width: 181px;
  }
`;

export const TransactDateInput = styled.input`
  display: flex;
  width: 178px;
  height: 32px;
  border: none;
  border-bottom: 1px solid #e0e0e0;
  @media (min-width: 768px) {
    width: 116px;
  }
  &:focus {
    outline: 0;
    outline-color: transparent;
    outline-style: none;
  }
`;

export const TransactComment = styled.textarea`
  height: 84px;
  width: 240px;
  padding: 0px 20px 8px 20px;
  margin-top: 40px;
  border: none;
  border-bottom: 1px solid #e0e0e0;
  resize: none;
  &:focus {
    outline: 0;
    outline-color: transparent;
    outline-style: none;
  }
  @media (min-width: 768px) {
    width: 354px;
    height: 32px;
  }
`;

export const TransactBtnAdd = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 280px;
  height: 50px;
  margin: auto auto 0px auto;
  background: #24cca7;
  border-radius: 20px;
  border: none;
  font-family: 'Circe';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;
  text-align: center;
  letter-spacing: 0.1em;
  margin-top: 40px;
  text-transform: uppercase;
  cursor: pointer;
  color: #ffffff;
`;

export const TransactBtnCncl = styled(TransactBtnAdd)`
  margin-top: 20px;
  background: #ffffff;
  border: 1px solid #4a56e2;
  color: #4a56e2;
`;
export const Error = styled.div`
  font-size: 12px;
  color: red;
  top: -24px;
`;
