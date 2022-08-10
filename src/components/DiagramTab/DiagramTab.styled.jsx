import styled from "styled-components";

export const Wrapper = styled.section`
    box-sizing: border-box;
    padding: 10px 20px;
    display: flex;
    flex-direction: column;
    align-items: top;
    background: transparent;
    z-index: 10;
    
    @media (min-width: 768px) {
        display: flex;
        flex-direction: row;
        align-items: top;
        padding: 20px 30px;
    }

    @media (min-width: 1280px) {
        display: flex;
        flex-direction: row;
        align-items: top;
        padding: 30px 15px 40px 0px;
    }

`;

export const SubWrapper = styled.div`
    display: block;
    width: 100%;

    @media (min-width: 768px) {
        width: 50%;
    }
`;