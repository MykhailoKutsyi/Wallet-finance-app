import styled from "styled-components";

export const Wrapper = styled.div`
    padding: 40px 20px;
    display: flex;
    flex-direction: column;

    @media (min-width: 768px) {
    padding: 20px 30px;
    flex-direction: row;
    }

    @media (min-width: 1280px) {
    padding: 30px 15px 40px 60px;
    flex-direction: row;
    border-left: 1px solid var(--light-grey-color);
    }

`;