import styled from "styled-components";

export const Header = styled.header`
height: 60px;
padding: 0px 20px;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
background-color: var(--white-color);

    @media (min-width: 768px) {
    height: 80px;
    }
`;

export const RightSideGroup = styled.div`
padding: 15px 0px;
display: flex;
align-items: center;
`;

export const UserName = styled.p`
margin: 0px 10px 0px 0px;
padding: 0px;
font-family: Circe;
font-weight: 400;
font-size: 18px;
line-height: 1.5;
text-transform: uppercase;
text-align: right;
color: var(--grey-color);

    @media (min-width: 768px) {
    padding: 0px 10px 0px 0px;
    border-right: 1px solid var(--grey-color);
    }
`;

export const ExitBtn = styled.button`
border: none;
background-color: var(--white-color);
display: flex;
align-items: center;
outline: none;
    &:hover{
        cursor: pointer;
    }
`;

export const BtnIconWrapper = styled.svg`
    height: 18px;
    width: 18px;

    &:hover{
    cursor: pointer;
}`;


export const BtnSpan = styled.span`
margin: 0px 0px 0px 10px;
padding: 0px;
font-family: Circe;
font-weight: 400;
font-size: 18px;
line-height: 1.5;
text-align: right;
color: var(--grey-color);

    @media (max-width: 768px) {
    display: none;
    }

`;
