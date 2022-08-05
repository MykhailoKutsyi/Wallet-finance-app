import styled from "styled-components";

export const ChartWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: top;
    box-sizing: border-box;
    width: 100%;
    height: min-content;
    background: transparent;
    padding-bottom: 32px;

    @media (min-width: 768px) {
        width: 50%;
    }
`;

export const ChartTitle = styled.h2`
    margin: 0px;
    padding: 0px 0px 10px 0px;
    font-family: 'Poppins';
    font-size: 30px;
    font-weight: 400;
    line-height: 1.5;
    text-align: left;

    @media (min-width: 768px) {
        padding: 0px;
    }

    @media (min-width: 1280px) {
        padding: 0px 0px 20px 10px;
    }
`;

export const BalanceSpan = styled.h4`
    position: absolute;
    margin: 0px auto 0px auto;
    width: 50%;
    text-align: center;
    top: 55%;
    left: 25%;

    @media (min-width: 1280px) {
        top: 50%;
    }
`;

