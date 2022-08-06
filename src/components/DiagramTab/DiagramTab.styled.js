import styled from "styled-components";

export const Wrapper = styled.section`
    box-sizing: border-box;
    padding: 40px 20px;
    display: flex;
    flex-direction: column;
    align-items: top;
    background: transparent;
    
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
        padding: 30px 15px 40px 60px;
        border-left: 1px solid var(--light-grey-color);
    }

`;

export const SubWrapper = styled.div`
    display: block;
    width: 100%;

    @media (min-width: 768px) {
        width: 50%;
    }
`;