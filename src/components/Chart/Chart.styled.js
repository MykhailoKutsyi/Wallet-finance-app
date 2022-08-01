import styled from "styled-components";

export const ChartWrapper = styled.div`
    position: relative;
    box-sizing: border-box;
    width: 100%;
    background: transparent;
    padding-bottom: 32px;

    @media (min-width: 768px) {
        width: 50%;
    }
`;

export const ChartTitle = styled.h2`
    margin: 0px;
    padding: 40px 0px 10px 0px;
    font-family: 'Poppins';
    font-size: 30px;
    font-weight: 400;
    line-height: 1.5;
    text-align: left;

    @media (min-width: 768px) {
        padding: 20px 0px;
    }

    @media (min-width: 768px) {
        padding: 32px 0px 20px 10px;
    }
`;

export const BalanceSpan = styled.h4`
    position: absolute;
    margin: 0px auto 0px auto;
    width: 50%;
    text-align: center;
    top: 60%;
    left: 25%;

`;

