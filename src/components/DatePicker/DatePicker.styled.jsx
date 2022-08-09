import styled from 'styled-components';

export const DatePickWrapper = styled.div`
  margin: 0px;
  padding: 0px;
`;

export const Form = styled.form`
  padding: 15px 0px;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    padding: 15px 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const Input = styled.select`
  position: relative;
  box-sizing: border-box;
  padding: 10px 0px;
  height: 50px;
  width: 100%;
  font-size: 16px;
  text-align: center;
  outline: none;
  border: 1px solid #dcdcdf;
  border-radius: 50px;
  background: transparent;

  @media (min-width: 768px) {
    width: 45%;
    padding: 5px 15px;
  }
`;

export const Option = styled.option`
  padding: 5px 0px 5px 15px;
  font-size: 16px;
`;
