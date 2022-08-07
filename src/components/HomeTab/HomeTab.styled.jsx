import styled from 'styled-components';
import EllipsisText from 'react-ellipsis-text';

export const Transactions = styled.div`
  border-radius: 10px;

  &:not(:last-child) {
    margin-bottom: 8px;
  }

  @media (min-width: 768px) {
    margin-top: 20px;
    background-color: transparent;
  }

  @media (min-width: 1280px) {
    display: flex;
    flex-direction: column;
    align-self: flex-start;

    width: 715px;

    margin-top: 6px;
  }
`;

export const InfoContainer = styled.div`
  margin-top: 80px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
`;

export const TransactionHead = styled.thead`
  @media (max-width: 767px) {
    display: none;
  }

  @media (min-width: 768px) {
    width: 704px;
    height: 58px;

    overflow: hidden;

    border-radius: 30px;
  }

  @media (min-width: 1280px) {
    width: 715px;
  }
`;

export const HeadRow = styled.tr`
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 30px 170px 100px 140px 165px 20px;
    align-self: center;

    padding: 16px 20px 15px;

    border-radius: 30px;
    background-color: white;
  }
`;

export const HeadItem = styled.th``;

export const Transaction = styled.tbody`
  width: 280px;
  height: 350px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  margin-bottom: 8px;

  border-radius: 10px;
  background-color: transparent;

  @media (max-width: 767px) {
    background-color: var(--white-color);
  }

  @media (min-width: 768px) {
    margin: 0;
    border-radius: 0px;
    width: 704px;
    height: auto;
    flex-direction: row;
    border-bottom: 1px solid #dcdcdf;
  }
  @media (min-width: 1280px) {
    width: 715px;
  }
  padding-left: 20px;
  padding-right: 20px;
`;

export const LineSide = styled.td`
  width: 5px;
  height: 100%;

  position: absolute;
  top: 0;
  left: 0;

  margin-right: 15px;

  background-color: ${props => props.color};

  @media (min-width: 768px) {
    display: none;
  }
`;

export const TransactionField = styled.tr`
  display: flex;
  align-items: center;
  justify-content: space-between;

  position: relative;
  overflow: hidden;

  width: 100%;
  height: 60px;

  overflow: hidden;

  @media (max-width: 767px) {
    padding-left: 20px;
    padding-right: 20px;
    &:first-child {
      border-radius: 10px 10px 0px 0px;
    }

    &:last-child {
      border-radius: 0px 0px 10px 10px;
    }

    &:not(:last-child) {
      border-bottom: 1px solid #dcdcdf;
    }
  }

  @media (min-width: 768px) {
    &:nth-child(5) {
      justify-content: end;
    }
    &:nth-child(6) {
      justify-content: end;
    }
  }

  font-family: font-face;
  font-style: normal;
`;

export const Text = styled.td`
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const DataWrapper = styled.td`
  text-align: right;
  @media (max-width: 767px) {
    width: 90px;
  }
`;

export const Data = styled(EllipsisText)`
  font-size: 16px;
  line-height: 24px;
  font-weight: ${props => (props.color ? 700 : 400)};
  color: ${props => props.color || ' #000000'};
`;

export const LoadButton = styled.button`
  margin: 0 auto;
  margin-top: 20px;

  width: 150px;
  height: 35px;

  background-color: var(--blue-color);
  color: var(--white-color);

  border-radius: 10px;
  font-weight: 700;

  &:hover,
  &:focus {
    background-color: var(--blue-hover-color);
  }
`;

export const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;
