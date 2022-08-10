import styled from 'styled-components';

export const TableWrapper = styled.div`
  box-sizing: border-box;
  @media (min-width: 768px) {
    padding: 20px;
  }
`;

export const TableMain = styled.table`
  width: 100%;
`;

export const TableHead = styled.thead`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  height: 60px;
  width: 100%;
  border-radius: 30px;
  font-weight: 700;
  font-size: 18px;
  line-height: 1.5;
  border: 1px solid #dcdcdf;

  @media (min-width: 1280px) {
    padding: 10px 30px;
  }
`;

export const TableHeadRow = styled.tr`
  // padding: 10px 0px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-weight: 400;
  font-size: 16px;
`;

export const TableBody = styled.tbody`
  display: block;
  width: 100%;
`;

export const TableRow = styled.tr`
  padding: 10px 20px;
  border-bottom: 1px solid #dcdcdf;
  display: flex;
  justify-content: space-between;
  font-weight: 400;
  font-size: 16px;

  @media (min-width: 1280px) {
    padding: 10px 30px;
  }
`;

export const TableCell = styled.td`
  display: flex;
  line-height: 2.2;
`;

export const StatusItem = styled.span`
  display: block;
  height: 24px;
  width: 24px;
  margin: 4px 16px 4px 0px;
  background-color: ${props => props.backgroundColor || 'red'};
`;

export const TotalSum = styled.p`
  padding: 10px 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const TotalSumKey = styled.span`
  font-size: 16px;
  line-height: 1.125;
  font-weight: 700;
`;

export const TotalExpValue = styled.span`
  font-size: 16px;
  line-height: 1.125;
  font-weight: 700;
  color: #ff6596;
`;

export const TotalIncValue = styled.span`
  font-size: 16px;
  line-height: 1.125;
  font-weight: 700;
  color: #24cca7;
`;
