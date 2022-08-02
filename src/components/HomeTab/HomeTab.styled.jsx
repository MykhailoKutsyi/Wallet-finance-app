import styled from 'styled-components';

export const Transaction = styled.li`
  width: 280px;
  height: 40vh;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  border-radius: 10px;

  background-color: var(--white-color);

  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;

export const TransactionField = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  position: relative;
  overflow: hidden;

  padding-left: 20px;
  padding-right: 20px;

  width: 100%;
  height: 60px;

  overflow: hidden;

  &:first-child {
    border-radius: 10px 10px 0px 0px;
  }

  &:last-child {
    border-radius: 0px 0px 10px 10px;
  }

  &:not(:last-child) {
    border-bottom: 1px solid #dcdcdf;
  }

  font-family: font-face;
  font-style: normal;
`;

export const LineSide = styled.div`
  width: 5px;
  height: 100%;

  position: absolute;
  top: 0;
  left: 0;

  margin-right: 15px;

  &li:first-child {
    background-color: #ff6596;
  }

  /* &li:first-of-type {
    background-color: #ff6596;
  } */

  background-color: var(--light-green-color);
`;

export const Text = styled.span`
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;
`;
export const Data = styled.span`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
`;

// #DCDCDF;
