import styled from "styled-components";
import selectArrow from "../../images/sprite.svg#icon-select";

export const DatePickWrapper = styled.div`
    margin: 0px;
    padding: 0px;
`;

export const Form = styled.form`
    padding: 0px 20px;
    display: flex;
    justify-content: space-between;
`;

export const Input = styled.select`
    position: relative;
    box-sizing: border-box;
    padding: 5px 15px;
    height: 50px;
    width: 45%;
    font-size: 16px;
    text-align: center;
    outline: none;
    border: 1px solid #DCDCDF;
    border-radius: 50px;
`;


export const Option = styled.option`
    padding: 5px 0px 5px 15px;
    font-size: 16px;
    // text-align: left;
`;