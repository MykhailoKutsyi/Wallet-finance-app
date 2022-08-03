import styled from "styled-components";

export const TableWrapper = styled.div`
    width: 100%;
    box-sizing: border-box;
    @media (min-width: 768px) {
        width: 50%;
        padding: 20px;
    }
`;

export const TableMain = styled.div`
    width: 100%;
`;


export const TableHead = styled.thead`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    width: 100%;
    border-radius: 30px;
    font-weight: 700;
    font-size: 18px;
    line-height: 1.5;
    border: 1px solid #DCDCDF;

    @media (min-width: 1280px) {
        padding: 10px 30px;
    }
`;

export const TableBody = styled.tbody`
    display: block;
    width: 100%;
`;

export const TableRow = styled.tr`
    padding: 10px 20px;
    border-bottom: 1px solid #DCDCDF;
    display: flex;
    justify-content: space-between;
    font-weight: 400;
    font-size: 16px;
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
    color: #FF6596;
`;

export const TotalIncValue = styled.span`
    font-size: 16px;
    line-height: 1.125;
    font-weight: 700;
    color: #24CCA7;
`;